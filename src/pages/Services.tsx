import { Droplets, Shield, Wrench, CheckCircle, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCountAnimation } from '../hooks/useCountAnimation';

function EquipmentCard({ value, label }: { value: number; label: string }) {
  const { count, elementRef } = useCountAnimation(value);
  return (
    <div ref={elementRef} className="bg-white p-4 rounded-lg shadow">
      <p className="font-semibold text-gray-900">{label}</p>
      <p className="text-cyan-600 text-2xl font-bold mt-1">{count}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Terrace Waterproofing',
      description: 'Comprehensive waterproofing solutions for terraces and rooftops. We protect your property from water damage, seepage, and structural deterioration using advanced materials and proven techniques.',
      features: [
        'Complete surface preparation and cleaning',
        'Application of high-quality waterproofing membrane',
        'Proper drainage system installation',
        'UV-resistant coating for long-lasting protection',
        'Post-service inspection and quality assurance'
      ],
      image_url: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Bathroom & WC Waterproofing',
      description: 'Specialized waterproofing for bathrooms, toilets, and wet areas. We ensure complete moisture protection to prevent leaks, dampness, and damage to adjoining walls and floors.',
      features: [
        'Floor and wall waterproofing treatment',
        'Corner and joint sealing with flexible materials',
        'Anti-fungal coating application',
        'Proper slope creation for water drainage',
        'Testing and leak detection before completion'
      ],
      image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Layers,
      title: 'Water Tank Waterproofing',
      description: 'Professional waterproofing services for overhead and underground water tanks. We ensure your water storage remains leak-free and maintains water quality with food-grade waterproofing materials.',
      features: [
        'Interior and exterior tank waterproofing',
        'Crack repair and structural reinforcement',
        'Food-grade, non-toxic coating materials',
        'Anti-bacterial treatment for hygiene',
        'Regular maintenance and inspection services'
      ],
      image_url: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Wrench,
      title: 'China Mosaic Fixing',
      description: 'Expert installation and waterproofing of china mosaic tiles for bathrooms, terraces, and water features. Our skilled craftsmen ensure perfect alignment and complete water resistance.',
      features: [
        'Professional mosaic tile installation',
        'Waterproof adhesive and grouting',
        'Precision cutting and fitting',
        'Seamless finish with proper joint treatment',
        'Long-lasting aesthetic appeal'
      ],
      image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'PU Grouting',
      description: 'Advanced polyurethane injection grouting for sealing cracks, joints, and voids in concrete structures. This technique provides immediate water-stopping and prevents further deterioration.',
      features: [
        'High-pressure PU injection technology',
        'Effective for active water leaks',
        'Expands to fill cracks and voids completely',
        'Flexible and durable seal',
        'Minimal disruption during application'
      ],
      image_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'PU Coating',
      description: 'Premium polyurethane coating for superior waterproofing and protection. Ideal for terraces, balconies, and exposed surfaces requiring high durability and weather resistance.',
      features: [
        'Seamless waterproof membrane',
        'Excellent UV and weather resistance',
        'Flexible to accommodate structural movement',
        'Quick application and fast curing',
        'Long service life with minimal maintenance'
      ],
      image_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-2xl shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
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
                    <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image_url}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
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
                  <EquipmentCard value={8} label="Lift Machines" />
                  <EquipmentCard value={10} label="Cutter Machines" />
                  <EquipmentCard value={12} label="Breaker Machines" />
                  <EquipmentCard value={7} label="Grouting Pumps" />
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
