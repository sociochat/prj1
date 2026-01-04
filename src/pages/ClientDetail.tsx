import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Building2, Calendar, CheckCircle, ArrowLeft, MapPin } from 'lucide-react';
import { supabase, type Client, type Project } from '../lib/supabase';

export default function ClientDetail() {
  const { slug } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchClientData();
    }
  }, [slug]);

  const fetchClientData = async () => {
    setLoading(true);

    const { data: clientData } = await supabase
      .from('clients')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (clientData) {
      setClient(clientData);

      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', clientData.id)
        .order('name');

      setProjects(projectsData || []);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading client details...</p>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="pt-16 sm:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Not Found</h1>
          <Link to="/clients" className="text-cyan-600 hover:text-cyan-700 font-semibold">
            ← Back to Clients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <Link to="/clients" className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-semibold mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to All Clients</span>
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" />
                <span>Partnership: {client.experience}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {client.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {client.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-cyan-100">
                  <Building2 className="h-8 w-8 text-cyan-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Total Area</p>
                  <p className="text-2xl font-bold text-gray-900">{client.total_area}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{projects.length}+</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={client.image_url}
                alt={client.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Completed Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg text-gray-900">{project.name}</h3>
                </div>
                <div className="flex items-start space-x-2 text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p>{project.location}</p>
                </div>
                {project.area && (
                  <p className="text-cyan-600 font-semibold">{project.area}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our list of satisfied clients and experience the difference of working with waterproofing experts.
          </p>
          <Link to="/contact" className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
