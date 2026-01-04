import { Building2, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCountAnimation } from '../hooks/useCountAnimation';

function StatCard({ value, label }: { value: number; label: string }) {
  const { count, elementRef } = useCountAnimation(value);
  return (
    <div ref={elementRef} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <p className="text-4xl font-bold mb-2">{count}+</p>
      <p className="text-lg opacity-90">{label}</p>
    </div>
  );
}

export default function Clients() {
  const clients = [
    {
      name: 'Ekta World',
      slug: 'ekta-world',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2006 - 2023',
      total_area: '12,50,000 sq.ft'
    },
    {
      name: 'Prakash Group',
      slug: 'prakash-group',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2000 - 2022',
      total_area: '8,75,000 sq.ft'
    },
    {
      name: 'Dimple Realtors',
      slug: 'dimple-realtors',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2005 - 2021',
      total_area: '6,50,000 sq.ft'
    },
    {
      name: 'D.V. Realtors',
      slug: 'dv-realtors',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2008 - 2023',
      total_area: '5,25,000 sq.ft'
    },
    {
      name: 'S.J. Corporation',
      slug: 'sj-corporation',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2010 - 2024',
      total_area: '4,80,000 sq.ft'
    },
    {
      name: 'Rachna Group',
      slug: 'rachna-group',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2007 - 2022',
      total_area: '7,20,000 sq.ft'
    },
    {
      name: 'Yamuna Reality',
      slug: 'yamuna-reality',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2009 - 2023',
      total_area: '9,50,000 sq.ft'
    },
    {
      name: 'Land Developers',
      slug: 'land-developers',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2011 - 2024',
      total_area: '6,90,000 sq.ft'
    },
    {
      name: 'Empire Realtors',
      slug: 'empire-realtors',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2004 - 2020',
      total_area: '8,25,000 sq.ft'
    },
    {
      name: 'Sahakar Group',
      slug: 'sahakar-group',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2003 - 2019',
      total_area: '10,50,000 sq.ft'
    },
    {
      name: 'Parsh Groups',
      slug: 'parsh-groups',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2012 - 2024',
      total_area: '5,60,000 sq.ft'
    },
    {
      name: 'BJ Enterprises',
      slug: 'bj-enterprises',
      logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      image_url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      experience: '2015 - 2024',
      total_area: '4,95,000 sq.ft'
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
            {clients.map((client) => (
              <Link
                key={client.slug}
                to={`/clients/${client.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border-b-2 border-cyan-100">
                  <img
                    src={client.logo_url}
                    alt={`${client.name} logo`}
                    className="w-28 h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={client.image_url}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{client.name}</h3>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-white to-cyan-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-cyan-600">
                      <Building2 className="h-4 w-4" />
                      <span className="font-semibold text-xs">{client.experience}</span>
                    </div>
                    <div className="text-xs text-gray-600">{client.total_area}</div>
                  </div>
                  <div className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm">
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
              <StatCard value={50} label="Completed Projects" />
              <StatCard value={13} label="Builder Partners" />
              <StatCard value={30} label="Years Experience" />
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
