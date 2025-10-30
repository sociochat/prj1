import { Shield, CheckCircle, Award, Droplets, Target, Wrench, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    { title: 'Terrace Waterproofing', description: 'Expert protection for your rooftop against water damage and seepage' },
    { title: 'Bathroom Waterproofing', description: 'Complete waterproofing solutions for bathrooms and WC areas' },
    { title: 'Water Tank Waterproofing', description: 'Overhead and underground tank waterproofing services' },
    { title: 'China Mosaic Fixing', description: 'Professional mosaic installation and waterproofing' }
  ];

  const clients = [
    { name: 'Ekta World', slug: 'ekta-world' },
    { name: 'Prakash Group', slug: 'prakash-group' },
    { name: 'Dimple Realtors', slug: 'dimple-realtors' },
    { name: 'D.V. Realtors', slug: 'dv-realtors' },
    { name: 'S.J. Corporation', slug: 'sj-corporation' },
    { name: 'Rachna Group', slug: 'rachna-group' },
    { name: 'Yamuna Reality', slug: 'yamuna-reality' },
    { name: 'Land Developers', slug: 'land-developers' },
    { name: 'Empire Realtors', slug: 'empire-realtors' },
    { name: 'Sahakar Group', slug: 'sahakar-group' },
    { name: 'Parsh Groups', slug: 'parsh-groups' },
    { name: 'BJ Enterprises', slug: 'bj-enterprises' }
  ];

  const locations = [
    'Borivali', 'Kandivali', 'Malad', 'Goregaon',
    'Andheri', 'Santacruz', 'Khar', 'Bandra',
    'Juhu', 'Vile Parle', 'Dahisar', 'Mira Road',
    'Vasai', 'Virar', 'Powai', 'Mulund'
  ];

  return (
    <div>
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>Trusted Since 1991</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Waterproofing
                <span className="block text-cyan-600">Solutions</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Protect your property with over 30 years of waterproofing expertise. We specialize in terrace, bathroom, and water tank waterproofing across Mumbai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-center">
                  Get Free Quote
                </Link>
                <Link to="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-all text-center">
                  Our Services
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600">30+</p>
                  <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600">50+</p>
                  <p className="text-sm text-gray-600 mt-1">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600">100%</p>
                  <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl transform rotate-3 shadow-2xl"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-start space-x-4 bg-cyan-50 p-4 rounded-xl">
                  <Shield className="h-8 w-8 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Quality Assured</h3>
                    <p className="text-sm text-gray-600 mt-1">Premium materials and expert workmanship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-blue-50 p-4 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Timely Delivery</h3>
                    <p className="text-sm text-gray-600 mt-1">Projects completed on schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-teal-50 p-4 rounded-xl">
                  <Award className="h-8 w-8 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Trusted by Leaders</h3>
                    <p className="text-sm text-gray-600 mt-1">Working with top builders since 1995</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Specialist Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive waterproofing solutions for all your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-cyan-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-cyan-100">
                <div className="bg-cyan-600 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">What drives us to deliver excellence every day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide the best waterproofing services with unwavering commitment to quality, ensuring every project is completed to perfection and on time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the leading waterproofing company in Mumbai, known for innovation, reliability, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, quality, and customer service are at the heart of everything we do. We believe in building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">What sets us apart from the competition</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Premium Quality Materials</h3>
                    <p className="text-gray-600">We use only the best waterproofing materials from trusted manufacturers to ensure long-lasting protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Our team of skilled professionals has 15-30 years of hands-on experience in waterproofing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Guaranteed Results</h3>
                    <p className="text-gray-600">We stand behind our work with quality guarantees and post-service support.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Equipment & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Lift Machines</p>
                    <p className="text-cyan-600 text-xl sm:text-2xl font-bold mt-1">4</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Cutter Machines</p>
                    <p className="text-cyan-600 text-xl sm:text-2xl font-bold mt-1">2</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Breaker Machines</p>
                    <p className="text-cyan-600 text-xl sm:text-2xl font-bold mt-1">6</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Grouting Pumps</p>
                    <p className="text-cyan-600 text-xl sm:text-2xl font-bold mt-1">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Builders</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">We've successfully completed projects for Mumbai's most reputed developers</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <Link
                key={index}
                to={`/clients/${client.slug}`}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-gray-200 hover:border-cyan-600 transition-all hover:shadow-lg flex items-center justify-center text-center"
              >
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{client.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Over 90,75,000 sq.ft Completed</h3>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">Successfully delivered waterproofing projects across residential and commercial properties in Mumbai and surrounding areas</p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Work Locations</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">We've completed projects across Mumbai and surrounding areas</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-white p-3 sm:p-4 rounded-lg border border-cyan-100 flex items-center space-x-2 sm:space-x-3 hover:shadow-lg transition-all">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
