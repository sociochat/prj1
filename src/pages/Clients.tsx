import { Building2, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Clients() {
  const clients = [
    {
      name: 'Ekta World',
      slug: 'ekta-world',
      experience: '22 Years',
      projects: '18,45,000 sq.ft',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    {
      name: 'Prakash Group',
      slug: 'prakash-group',
      experience: '23 Years',
      projects: '90,75,00 sq.ft',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg'
    },
    {
      name: 'Dimple Realtors',
      slug: 'dimple-realtors',
      experience: '16 Years',
      projects: '15,85,000 sq.ft',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg'
    },
    {
      name: 'D.V. Realtors',
      slug: 'dv-realtors',
      experience: '7 Years',
      projects: '5,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg'
    },
    {
      name: 'S.J. Corporation',
      slug: 'sj-corporation',
      experience: '4 Years',
      projects: '60,000 sq.ft',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg'
    },
    {
      name: 'Rachna Group',
      slug: 'rachna-group',
      experience: '12 Years',
      projects: '1,95,000 sq.ft',
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg'
    },
    {
      name: 'Yamuna Reality',
      slug: 'yamuna-reality',
      experience: '7 Years',
      projects: '5,43,000 sq.ft',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg'
    },
    {
      name: 'Land Developers',
      slug: 'land-developers',
      experience: '20 Years',
      projects: 'Multiple Projects',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg'
    },
    {
      name: 'Empire Realtors',
      slug: 'empire-realtors',
      experience: '22 Years',
      projects: '3,55,000 sq.ft',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    },
    {
      name: 'Sahakar Group',
      slug: 'sahakar-group',
      experience: '15 Years',
      projects: '8,75,000 sq.ft',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'
    },
    {
      name: 'Parsh Groups',
      slug: 'parsh-groups',
      experience: '15 Years',
      projects: '4,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg'
    },
    {
      name: 'BJ Enterprises',
      slug: 'bj-enterprises',
      experience: '5 Years',
      projects: '1,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Trusted Partners</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-cyan-600">Clients</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to work with Mumbai's leading builders and developers. Our long-standing relationships are built on trust, quality, and consistent excellence.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Link
                key={index}
                to={`/clients/${client.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{client.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-cyan-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-cyan-600">
                      <Building2 className="h-5 w-5" />
                      <span className="font-semibold">{client.experience}</span>
                    </div>
                    <div className="text-sm text-gray-600">{client.projects}</div>
                  </div>
                  <div className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                    View Projects →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Over 90,75,000 sq.ft Completed</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Successfully delivered waterproofing projects across residential and commercial properties in Mumbai, Navi Mumbai, Thane, and surrounding areas.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-lg opacity-90">Completed Projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">12+</p>
                <p className="text-lg opacity-90">Builder Partners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">30+</p>
                <p className="text-lg opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Work Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We've completed projects across Mumbai and surrounding areas</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Borivali', 'Kandivali', 'Malad', 'Goregaon',
              'Andheri', 'Santacruz', 'Khar', 'Bandra',
              'Juhu', 'Vile Parle', 'Dahisar', 'Mira Road',
              'Vasai', 'Virar', 'Powai', 'Mulund'
            ].map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-white p-4 rounded-lg border border-cyan-100 flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
