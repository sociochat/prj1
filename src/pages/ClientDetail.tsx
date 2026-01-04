import { useParams, Link } from 'react-router-dom';
import { Building2, Calendar, CheckCircle, ArrowLeft, MapPin } from 'lucide-react';

const clientsData: Record<string, {
  name: string;
  slug: string;
  logo_url: string;
  image_url: string;
  experience: string;
  total_area: string;
  description: string;
  projects: Array<{
    name: string;
    location: string;
    area: string;
  }>;
}> = {
  'ekta-world': {
    name: 'Ekta World',
    slug: 'ekta-world',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2006 - 2023',
    total_area: '12,50,000 sq.ft',
    description: 'Ekta World is one of Mumbai\'s leading real estate developers. We\'ve been proud partners for over 17 years, delivering premium waterproofing solutions across multiple residential and commercial projects.',
    projects: [
      { name: 'Ekta Tripolis', location: 'Goregaon West', area: '2,50,000 sq.ft' },
      { name: 'Ekta Parksville', location: 'Virar West', area: '3,00,000 sq.ft' },
      { name: 'Ekta Panorama', location: 'Borivali East', area: '2,00,000 sq.ft' },
      { name: 'Ekta Meadows', location: 'Borivali West', area: '1,80,000 sq.ft' },
      { name: 'Ekta Oculus', location: 'Chembur', area: '3,20,000 sq.ft' }
    ]
  },
  'prakash-group': {
    name: 'Prakash Group',
    slug: 'prakash-group',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2000 - 2022',
    total_area: '8,75,000 sq.ft',
    description: 'Prakash Group has been a trusted partner for over 22 years. We\'ve provided comprehensive waterproofing solutions for their residential projects across Mumbai.',
    projects: [
      { name: 'Prakash Heights', location: 'Kandivali East', area: '1,50,000 sq.ft' },
      { name: 'Prakash Residency', location: 'Malad West', area: '2,25,000 sq.ft' },
      { name: 'Prakash Tower', location: 'Andheri East', area: '3,00,000 sq.ft' },
      { name: 'Prakash Gardens', location: 'Goregaon West', area: '2,00,000 sq.ft' }
    ]
  },
  'dimple-realtors': {
    name: 'Dimple Realtors',
    slug: 'dimple-realtors',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2005 - 2021',
    total_area: '6,50,000 sq.ft',
    description: 'Dimple Realtors specializes in premium residential developments. Our 16-year partnership has delivered exceptional waterproofing quality across their projects.',
    projects: [
      { name: 'Dimple Paradise', location: 'Dahisar West', area: '1,80,000 sq.ft' },
      { name: 'Dimple Heights', location: 'Mira Road', area: '2,20,000 sq.ft' },
      { name: 'Dimple Plaza', location: 'Borivali West', area: '2,50,000 sq.ft' }
    ]
  },
  'dv-realtors': {
    name: 'D.V. Realtors',
    slug: 'dv-realtors',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2008 - 2023',
    total_area: '5,25,000 sq.ft',
    description: 'D.V. Realtors has been our valued client for 15 years. We\'ve successfully completed waterproofing for their quality residential projects.',
    projects: [
      { name: 'DV Enclave', location: 'Santacruz East', area: '1,75,000 sq.ft' },
      { name: 'DV Residency', location: 'Khar West', area: '1,50,000 sq.ft' },
      { name: 'DV Heights', location: 'Bandra West', area: '2,00,000 sq.ft' }
    ]
  },
  'sj-corporation': {
    name: 'S.J. Corporation',
    slug: 'sj-corporation',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2010 - 2024',
    total_area: '4,80,000 sq.ft',
    description: 'S.J. Corporation focuses on modern residential complexes. Our ongoing 14-year partnership reflects our commitment to quality waterproofing solutions.',
    projects: [
      { name: 'SJ Harmony', location: 'Powai', area: '1,60,000 sq.ft' },
      { name: 'SJ Elite', location: 'Mulund West', area: '1,40,000 sq.ft' },
      { name: 'SJ Paradise', location: 'Thane West', area: '1,80,000 sq.ft' }
    ]
  },
  'rachna-group': {
    name: 'Rachna Group',
    slug: 'rachna-group',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2007 - 2022',
    total_area: '7,20,000 sq.ft',
    description: 'Rachna Group is known for their upscale residential projects. We\'ve proudly served them for 15 years with expert waterproofing services.',
    projects: [
      { name: 'Rachna Heights', location: 'Juhu', area: '2,40,000 sq.ft' },
      { name: 'Rachna Elegance', location: 'Vile Parle', area: '2,30,000 sq.ft' },
      { name: 'Rachna Palace', location: 'Santacruz', area: '2,50,000 sq.ft' }
    ]
  },
  'yamuna-reality': {
    name: 'Yamuna Reality',
    slug: 'yamuna-reality',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2009 - 2023',
    total_area: '9,50,000 sq.ft',
    description: 'Yamuna Reality develops large-scale residential townships. Our 14-year partnership has delivered comprehensive waterproofing across their major projects.',
    projects: [
      { name: 'Yamuna Township Phase 1', location: 'Vasai East', area: '3,50,000 sq.ft' },
      { name: 'Yamuna Heights', location: 'Virar West', area: '3,00,000 sq.ft' },
      { name: 'Yamuna Residency', location: 'Nalasopara', area: '3,00,000 sq.ft' }
    ]
  },
  'land-developers': {
    name: 'Land Developers',
    slug: 'land-developers',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2011 - 2024',
    total_area: '6,90,000 sq.ft',
    description: 'Land Developers creates modern living spaces. We\'ve been their waterproofing partner for 13 years, ensuring quality in every project.',
    projects: [
      { name: 'Land Paradise', location: 'Kandivali West', area: '2,30,000 sq.ft' },
      { name: 'Land Heights', location: 'Malad East', area: '2,30,000 sq.ft' },
      { name: 'Land Residency', location: 'Goregaon East', area: '2,30,000 sq.ft' }
    ]
  },
  'empire-realtors': {
    name: 'Empire Realtors',
    slug: 'empire-realtors',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2004 - 2020',
    total_area: '8,25,000 sq.ft',
    description: 'Empire Realtors builds premium residential complexes. Our 16-year collaboration has set quality standards in waterproofing.',
    projects: [
      { name: 'Empire State', location: 'Andheri West', area: '2,75,000 sq.ft' },
      { name: 'Empire Tower', location: 'Lokhandwala', area: '2,75,000 sq.ft' },
      { name: 'Empire Heights', location: 'Versova', area: '2,75,000 sq.ft' }
    ]
  },
  'sahakar-group': {
    name: 'Sahakar Group',
    slug: 'sahakar-group',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2003 - 2019',
    total_area: '10,50,000 sq.ft',
    description: 'Sahakar Group is a prominent cooperative housing developer. We\'ve served them for 16 years with reliable waterproofing solutions.',
    projects: [
      { name: 'Sahakar Nagar Phase 1', location: 'Mira Road', area: '3,50,000 sq.ft' },
      { name: 'Sahakar Heights', location: 'Bhayandar', area: '3,50,000 sq.ft' },
      { name: 'Sahakar Complex', location: 'Naigaon', area: '3,50,000 sq.ft' }
    ]
  },
  'parsh-groups': {
    name: 'Parsh Groups',
    slug: 'parsh-groups',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2012 - 2024',
    total_area: '5,60,000 sq.ft',
    description: 'Parsh Groups focuses on affordable housing. Our 12-year partnership delivers quality waterproofing at competitive prices.',
    projects: [
      { name: 'Parsh Residency', location: 'Dahisar East', area: '1,85,000 sq.ft' },
      { name: 'Parsh Heights', location: 'Borivali East', area: '1,90,000 sq.ft' },
      { name: 'Parsh Complex', location: 'Kandivali East', area: '1,85,000 sq.ft' }
    ]
  },
  'bj-enterprises': {
    name: 'BJ Enterprises',
    slug: 'bj-enterprises',
    logo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
    image_url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
    experience: '2015 - 2024',
    total_area: '4,95,000 sq.ft',
    description: 'BJ Enterprises is an emerging developer with a focus on quality construction. We\'ve been their trusted waterproofing partner for 9 years.',
    projects: [
      { name: 'BJ Heights', location: 'Malad West', area: '1,65,000 sq.ft' },
      { name: 'BJ Paradise', location: 'Goregaon West', area: '1,65,000 sq.ft' },
      { name: 'BJ Residency', location: 'Jogeshwari West', area: '1,65,000 sq.ft' }
    ]
  }
};

export default function ClientDetail() {
  const { slug } = useParams();
  const client = slug ? clientsData[slug] : null;

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
                  <p className="text-2xl font-bold text-gray-900">{client.projects.length}+</p>
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
            {client.projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all">
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
