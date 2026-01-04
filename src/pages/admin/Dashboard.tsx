import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { api, type Client } from '../../lib/api';
import { Plus, Edit, Trash2, LogOut, Building2, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [deletingClient, setDeletingClient] = useState<Client | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const data = await api.clients.getAll();
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const handleDeleteClient = async (client: Client) => {
    if (!deletingClient) return;

    try {
      await api.clients.delete(client.id);
      setClients(clients.filter(c => c.id !== client.id));
      setDeletingClient(null);
    } catch (error: any) {
      alert('Error deleting client: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Manage clients, projects, and services</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/admin/services"
            className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-cyan-200 hover:border-cyan-300 transition-all hover:shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Manage Services</h3>
            </div>
            <p className="text-sm text-gray-600">Add, edit, or remove services displayed on the Services page</p>
          </Link>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border-2 border-gray-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Manage Clients</h3>
            </div>
            <p className="text-sm text-gray-600">View and manage all clients below</p>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Clients</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors shadow-md"
          >
            <Plus className="h-5 w-5" />
            <span>Add Client</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading clients...</p>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No clients yet. Add your first client to get started.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {clients.map((client) => (
              <div key={client.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={client.logo_url}
                      alt={client.name}
                      className="w-16 h-16 object-contain rounded-lg bg-gray-50"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{client.experience} experience</p>
                      <p className="text-sm text-gray-600">{client.total_area}</p>
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{client.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Link
                      to={`/admin/clients/${client.id}/projects`}
                      className="flex items-center space-x-1 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors border border-cyan-200"
                      title="Manage Projects"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Projects</span>
                    </Link>
                    <button
                      onClick={() => setEditingClient(client)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit Client"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setDeletingClient(client)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Client"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showAddModal && (
        <ClientModal
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            setShowAddModal(false);
            fetchClients();
          }}
        />
      )}

      {editingClient && (
        <ClientModal
          client={editingClient}
          onClose={() => setEditingClient(null)}
          onSave={() => {
            setEditingClient(null);
            fetchClients();
          }}
        />
      )}

      {deletingClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delete Client</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <strong>{deletingClient.name}</strong>? This will also delete all associated projects. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setDeletingClient(null)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteClient(deletingClient)}
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

function ClientModal({ client, onClose, onSave }: { client?: Client; onClose: () => void; onSave: () => void }) {
  const [formData, setFormData] = useState({
    name: client?.name || '',
    slug: client?.slug || '',
    experience: client?.experience || '',
    total_area: client?.total_area || '',
    description: client?.description || '',
    logo_url: client?.logo_url || '',
    image_url: client?.image_url || '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      if (client) {
        await api.clients.update(client.id, formData);
      } else {
        await api.clients.create(formData);
      }

      onSave();
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {client ? 'Edit Client' : 'Add New Client'}
        </h3>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name <span className="text-red-500">*</span>
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
                Slug (URL) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., 22 Years"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g., 18,45,000 sq.ft"
                value={formData.total_area}
                onChange={(e) => setFormData({ ...formData, total_area: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.logo_url}
              onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
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
              {saving ? 'Saving...' : client ? 'Update Client' : 'Add Client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
