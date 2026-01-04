import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, type Client, type Project } from '../../lib/supabase';
import { ArrowLeft, Plus, Edit, Trash2, MapPin } from 'lucide-react';

export default function ProjectManagement() {
  const { clientId } = useParams<{ clientId: string }>();
  const [client, setClient] = useState<Client | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);

  useEffect(() => {
    if (clientId) {
      fetchClientAndProjects();
    }
  }, [clientId]);

  const fetchClientAndProjects = async () => {
    setLoading(true);

    const { data: clientData } = await supabase
      .from('clients')
      .select('*')
      .eq('id', clientId)
      .maybeSingle();

    const { data: projectsData } = await supabase
      .from('projects')
      .select('*')
      .eq('client_id', clientId)
      .order('name');

    setClient(clientData);
    setProjects(projectsData || []);
    setLoading(false);
  };

  const handleDeleteProject = async (project: Project) => {
    if (!deletingProject) return;

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', project.id);

    if (error) {
      alert('Error deleting project: ' + error.message);
    } else {
      setProjects(projects.filter(p => p.id !== project.id));
      setDeletingProject(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Client Not Found</h1>
          <Link to="/admin/dashboard" className="text-cyan-600 hover:text-cyan-700">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={client.logo_url}
                alt={client.name}
                className="w-16 h-16 object-contain rounded-lg bg-gray-50"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
                <p className="text-sm text-gray-600 mt-1">Manage projects for this client</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Projects ({projects.length})</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors shadow-md"
          >
            <Plus className="h-5 w-5" />
            <span>Add Project</span>
          </button>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No projects yet. Add your first project for this client.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 flex-1">{project.name}</h3>
                  <div className="flex items-center space-x-1 ml-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit Project"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeletingProject(project)}
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-2 text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>{project.location}</p>
                </div>
                {project.area && (
                  <p className="text-sm text-cyan-600 font-semibold">{project.area}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {showAddModal && (
        <ProjectModal
          clientId={clientId!}
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            setShowAddModal(false);
            fetchClientAndProjects();
          }}
        />
      )}

      {editingProject && (
        <ProjectModal
          clientId={clientId!}
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={() => {
            setEditingProject(null);
            fetchClientAndProjects();
          }}
        />
      )}

      {deletingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delete Project</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{deletingProject.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setDeletingProject(null)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProject(deletingProject)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectModal({
  clientId,
  project,
  onClose,
  onSave,
}: {
  clientId: string;
  project?: Project;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    name: project?.name || '',
    location: project?.location || '',
    area: project?.area || '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const projectData = {
        ...formData,
        client_id: clientId,
        area: formData.area || null,
      };

      if (project) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', project.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);

        if (error) throw error;
      }

      onSave();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {project ? 'Edit Project' : 'Add New Project'}
        </h3>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., 18,45,000 sq.ft"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : project ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
