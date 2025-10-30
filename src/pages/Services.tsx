import { Droplets, Shield, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Terrace Waterproofing',
      icon: Droplets,
      description: 'Comprehensive terrace waterproofing solutions to protect your property from monsoon damage and water seepage.',
      features: [
        'Coating and membrane application',
        'Crack filling and repair',
        'Slope correction',
        'Drainage system installation',
        'Post-monsoon maintenance'
      ],
      image: 'https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg'
    },
    {
      title: 'Bathroom & WC Waterproofing',
      icon: Shield,
      description: 'Complete bathroom waterproofing services to prevent leakage and dampness in wet areas.',
      features: [
        'Floor and wall waterproofing',
        'Shower area treatment',
        'Tile joint sealing',
        'Anti-fungal coating',
        'Drainage line waterproofing'
      ],
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg'
    },
    {
      title: 'Water Tank Waterproofing',
      icon: Droplets,
      description: 'Specialized waterproofing for overhead and underground water tanks to ensure clean water storage.',
      features: [
        'Internal coating application',
        'Crack repair and sealing',
        'Leak detection and fixing',
        'Cleaning and sanitization',
        'Regular maintenance'
      ],
      image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg'
    },
    {
      title: 'China Mosaic Fixing',
      icon: Wrench,
      description: 'Expert china mosaic installation with proper waterproofing treatment for long-lasting results.',
      features: [
        'Surface preparation',
        'Waterproof adhesive application',
        'Precise mosaic installation',
        'Joint sealing and grouting',
        'Final protective coating'
      ],
      image: 'https://images.pexels.com/photos/6283958/pexels-photo-6283958.jpeg'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional waterproofing solutions backed by 30+ years of experience. We use premium materials and proven techniques to ensure lasting protection for your property.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-2xl shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl mt-4">
                    Request Quote
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Services?
                </h2>
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
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900">Lift Machines</p>
                    <p className="text-cyan-600 text-2xl font-bold mt-1">4</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900">Cutter Machines</p>
                    <p className="text-cyan-600 text-2xl font-bold mt-1">2</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900">Breaker Machines</p>
                    <p className="text-cyan-600 text-2xl font-bold mt-1">6</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-semibold text-gray-900">Grouting Pumps</p>
                    <p className="text-cyan-600 text-2xl font-bold mt-1">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Waterproof Your Property?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your waterproofing needs. Our experts are ready to help.
          </p>
          <Link to="/contact" className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
