import { useParams, Link } from 'react-router-dom';
import { Building2, Calendar, CheckCircle, ArrowLeft, MapPin } from 'lucide-react';
import ImageWithLoader from '../components/ImageWithLoader';

export default function ClientDetail() {
  const { slug } = useParams();

  const clientsData: Record<string, any> = {
    'ekta-world': {
      name: 'Ekta World',
      experience: '22 Years',
      totalArea: '18,45,000 sq.ft',
      description: 'One of our most valued clients, Ekta World has been a trusted partner since the late 1990s. We have successfully completed numerous waterproofing projects for their prestigious developments.',
      projects: [
        { name: 'Ekta Medows', location: 'Borivali (E)', area: '18,45,000 sq.ft' },
        { name: 'Ekta Terrace', location: 'Mahavir Nagar, Kandivali (W)' },
        { name: 'Ekta Bhoomi', location: 'Mahavir Nagar, Kandivali (W)' },
        { name: 'Leela Villa', location: 'Khar (W)' },
        { name: 'Rock Casal Building', location: 'Kandar Pada, Dahisar (W)' },
        { name: 'Ekta Wood', location: 'Raheja Estate, Borivali (W)' },
        { name: 'Ekta Bhoomi Garden Phase III', location: 'Rajand Nagar' },
        { name: 'Ecstasy I & II', location: '15th Road, Khar (W)' },
        { name: 'Ekta Impress', location: '14th Road, Khar (W)' },
        { name: 'Ekta Heights', location: '15th Road, Khar (W)' },
        { name: 'Global City - Ekta Parksville', location: 'Virar (W)' },
        { name: 'Ekta Lake Superior', location: 'JVLR-Powai' }
      ],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    'prakash-group': {
      name: 'Prakash Group',
      experience: '23 Years',
      totalArea: '90,75,00 sq.ft',
      description: 'Our longest-standing client relationship, spanning over two decades. Prakash Group has trusted us with their most prestigious projects across Mumbai.',
      projects: [
        { name: 'Aangan', location: '2nd Road, Juhu, Vile Parle (W)', area: '90,75,00 sq.ft' },
        { name: 'Pacific Enclave', location: '15th Road, Khar' },
        { name: 'Red Rose', location: '14 A Road, Khar' },
        { name: 'Palazzo', location: '15th Road, Santacruz (W)' },
        { name: 'Palazzo Residency', location: '17th Road, Khar' },
        { name: 'Legend V', location: 'Kandar Pada, Dahisar (W)' },
        { name: 'Park Royale', location: 'Off. L.B.S. Marg, Mulund (W)' },
        { name: 'Nova Rosa', location: 'Holy Cross Road, I.C. Colony, Borivali (W)' },
        { name: 'Vrunda', location: '2nd Road, JVPD Scheme, Vile Parle (W)' },
        { name: '92 Platinum Hive', location: 'Borivali West' }
      ],
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg'
    },
    'dimple-realtors': {
      name: 'Dimple Realtors',
      experience: '16 Years',
      totalArea: '15,85,000 sq.ft',
      description: 'A strong partnership built on quality and reliability. Dimple Realtors has been working with us since 1995 on various residential projects.',
      projects: [
        { name: 'Vridavan, Maduvan & Gokul Buildings', location: 'Deva Nagar Road, Borivali (W)', area: '15,85,000 sq.ft' },
        { name: 'Galaxi', location: 'Kandar Pada, Dahisar (W)' },
        { name: 'La Vista and La Beleja', location: 'Kaju Pada, Borivali (E)' },
        { name: 'Sapphire', location: 'I.C. Colony, Borivali (W)' },
        { name: 'Kamla Venu', location: 'I.C. Colony, Borivali (W)' },
        { name: '19 North', location: 'Kandivali West' }
      ],
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg'
    },
    'dv-realtors': {
      name: 'D.V. Realtors',
      experience: '7 Years',
      totalArea: '5,50,000 sq.ft',
      description: 'Working with D.V. Realtors across multiple locations including Borivali, Mira Road, and Vasai areas.',
      projects: [
        { name: 'Various Projects', location: 'Borivali (E) & (W)', area: '5,50,000 sq.ft' },
        { name: 'Various Projects', location: 'Mira Road (W)' },
        { name: 'Various Projects', location: 'Vasai (E)' }
      ],
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg'
    },
    'sj-corporation': {
      name: 'S.J. Corporation',
      experience: '4 Years',
      totalArea: '60,000 sq.ft',
      description: 'Successfully delivered waterproofing solutions for S.J. Corporation projects in Vasai and Borivali areas.',
      projects: [
        { name: 'Various Projects', location: 'Manpashwar Road, Vasai (E)', area: '60,000 sq.ft' },
        { name: 'Various Projects', location: 'Borivali' }
      ],
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg'
    },
    'rachna-group': {
      name: 'Rachna Group',
      experience: '12 Years',
      totalArea: '1,95,000 sq.ft',
      description: 'Long-standing relationship with Rachna Group for projects in Bandra and Grant Road areas.',
      projects: [
        { name: 'Various Projects', location: 'Bandra (W)', area: '1,95,000 sq.ft' },
        { name: 'Various Projects', location: 'Grant Road (E)' }
      ],
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg'
    },
    'yamuna-reality': {
      name: 'Yamuna Reality',
      experience: '7 Years',
      totalArea: '5,43,000 sq.ft',
      description: 'Successfully completed waterproofing projects for Yamuna Reality across multiple prime locations in Mumbai.',
      projects: [
        { name: 'Various Projects', location: 'Juhu', area: '5,43,000 sq.ft' },
        { name: 'Various Projects', location: 'Santacruz (E)' },
        { name: 'Various Projects', location: 'Malad (W)' },
        { name: 'Various Projects', location: 'Borivali (W)' }
      ],
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg'
    },
    'land-developers': {
      name: 'Land Developers',
      experience: '20 Years',
      totalArea: 'Multiple Projects',
      description: 'Two decades of successful partnership with Land Developers on various waterproofing projects.',
      projects: [
        { name: 'Multiple Residential Projects', location: 'Mumbai Suburbs' }
      ],
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg'
    },
    'empire-realtors': {
      name: 'Empire Realtors',
      experience: '22 Years',
      totalArea: '3,55,000 sq.ft',
      description: 'Long-standing partnership with Empire Realtors, delivering quality waterproofing solutions since 1995.',
      projects: [
        { name: 'Empire Meghna', location: 'Borivali (W)' },
        { name: 'Empire Stella', location: 'Borivali (W)', area: '3,55,000 sq.ft' },
        { name: 'Empire Vrindavan', location: 'Borivali (E)' },
        { name: 'Kirti Apartment', location: 'Borivali (E)' },
        { name: 'Patel Bhuvan', location: 'Borivali (E)' },
        { name: 'Empire Towers', location: 'Goregaon (E)' },
        { name: 'Amba Aashish', location: 'Borivali (E)' }
      ],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    },
    'sahakar-group': {
      name: 'Sahakar Group',
      experience: '15 Years',
      totalArea: '8,75,000 sq.ft',
      description: 'Extensive portfolio with Sahakar Group across prime locations in Mumbai suburbs.',
      projects: [
        { name: 'Revanta', location: 'Goregaon (W)', area: '8,75,000 sq.ft' },
        { name: 'Vista - Anand Nagar', location: 'Dahisar (E)' },
        { name: 'Fressia Ranibello', location: 'Malad (E)' },
        { name: 'Helicon Heights', location: 'Borivali (W)' },
        { name: 'Shree Shiv Shakti', location: 'Borivali (W)' },
        { name: 'Fressia Heights', location: 'Dahisar (E)' },
        { name: 'Fressia NX', location: 'Dahisar (W)' },
        { name: 'Fressia I, II, III', location: 'Dahisar (W)' },
        { name: 'Shree Shashwat', location: 'Dahisar (E) & Mira Road' },
        { name: 'Shree Krishna Garden', location: 'Mira Road' },
        { name: 'Dahisar Shivangan', location: 'Dahisar' }
      ],
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg'
    },
    'parsh-groups': {
      name: 'Parsh Groups',
      experience: '15 Years',
      totalArea: '4,50,000 sq.ft',
      description: 'Trusted partner of Parsh Groups and Relators for premium residential projects across Mumbai.',
      projects: [
        { name: 'Aangan', location: '2nd Road, Juhu, Vile Parle (W)', area: '4,50,000 sq.ft' },
        { name: 'Juhu Harshal Society', location: 'Juhu' },
        { name: '55 Evana', location: 'Santacruz (E)' },
        { name: '66 Avenue', location: 'Borivali (E), Cater Road No.1' },
        { name: 'Parsh Galacia', location: 'Santacruz (E)' },
        { name: 'Parsh Residency', location: 'Malad (W)' },
        { name: 'Parsh Galaxy', location: 'Malad (W)' },
        { name: 'Parsh Elegance', location: 'Andheri (E)' },
        { name: '66 Palazzio', location: 'Borivali (E), Cater Road No.1' }
      ],
      image: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg'
    },
    'bj-enterprises': {
      name: 'BJ Enterprises',
      experience: '5 Years',
      totalArea: '1,50,000 sq.ft',
      description: 'Growing partnership with BJ Enterprises on their residential projects in Vasai area.',
      projects: [
        { name: 'BJ Moonstone Wing A, B, C', location: 'Vasai', area: '1,50,000 sq.ft' },
        { name: 'Vishwa Nagri', location: 'Vasai (E)' }
      ],
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg'
    },
    'romell-group': {
      name: 'Romell Group',
      experience: '8 Years',
      totalArea: '3,25,000 sq.ft',
      description: 'Trusted partner of Romell Group for residential and commercial waterproofing projects in key Mumbai locations including Borivali East and Malad.',
      projects: [
        { name: 'Various Projects', location: 'Borivali East', area: '1,75,000 sq.ft' },
        { name: 'Various Projects', location: 'Malad West', area: '1,50,000 sq.ft' }
      ],
      image: 'https://images.pexels.com/photos/5176023/pexels-photo-5176023.jpeg'
    }
  };

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
                  <p className="text-2xl font-bold text-gray-900">{client.totalArea}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{client.projects.length}+</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithLoader
                src={client.image}
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
            {client.projects.map((project: any, index: number) => (
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
