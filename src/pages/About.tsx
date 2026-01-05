import { Award, Users, Target, CheckCircle, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from '../components/CountUp';
import ImageWithLoader from '../components/ImageWithLoader';

export default function About() {
  const team = [
    { name: 'Mr. Ramchandra Jukanti', designation: 'Proprietor & Waterproofing Specialist', experience: '30+ Years' },
    { name: 'Mr. Vaijnath', designation: 'Supervisor / Waterproofing Specialist', experience: '25 Years' },
    { name: 'Mr. Sonavane', designation: 'Supervisor', experience: '18 Years' },
    { name: 'Mr. Sitaram', designation: 'Plumber', experience: '18 Years' },
    { name: 'Mr. Sunil Bera', designation: 'Plumber', experience: '15+ Years' },
    { name: 'Mr. Dilip', designation: 'Supervisor', experience: '15 Years' },
    { name: 'Mr. Suresh', designation: 'Supervisor', experience: '15 Years' },
    { name: 'Mr. Rajankumar Morya', designation: 'Foreman', experience: '15 Years' },
    { name: 'Mr. Dayanand', designation: 'Foreman', experience: '15 Years' },
    { name: 'Mr. Pintu', designation: 'Supervisor', experience: '12+ Years' }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                <span>Established 1991</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Story of <span className="text-cyan-600">Mamta Waterproofing</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every building tells a story. At Mamta Waterproofing, our story began in 1991 with a simple vision: to protect Mumbai's properties from the ravages of water damage and seepage. What started as a dream has evolved into three decades of unwavering commitment to excellence and innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as Mumbai's most trusted waterproofing company, having successfully protected over 90,75,000 sq.ft of residential and commercial properties. Our journey is a testament to the dedication of our team and the trust our clients place in us.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithLoader
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Building waterproofing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-5xl font-bold mb-2">
                    <CountUp end={30} suffix="+" />
                  </p>
                  <p className="text-xl">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 sm:p-12 lg:p-16 border border-cyan-200 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">The Founder's Vision</h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">Mr. Ramchandra Jukanti</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 30 years of specialized expertise in waterproofing, Mr. Ramchandra Jukanti founded Mamta Waterproofing with a mission to solve Mumbai's most persistent problem: water damage and seepage.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Starting from humble beginnings, his passion for quality and innovation transformed Mamta Waterproofing into an industry leader. His hands-on approach and deep technical knowledge have been instrumental in developing cutting-edge waterproofing solutions that address every type of water intrusion challenge.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "I believe that every building deserves protection," says Mr. Jukanti. "Our mission is not just to fix leaks, but to create lasting peace of mind for property owners across Mumbai."
                </p>
                <div className="pt-6 border-t-2 border-cyan-300">
                  <p className="text-cyan-600 font-bold text-lg">Proprietor & Waterproofing Specialist</p>
                  <p className="text-gray-600 text-lg">30+ Years of Industry Experience</p>
                </div>
              </div>
              <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithLoader
                  src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
                  alt="Founder at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg border border-cyan-100">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide the best waterproofing services with unwavering commitment to quality, ensuring every project is completed to perfection and on time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the leading waterproofing company in Mumbai, known for innovation, reliability, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg border border-teal-100">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, quality, and customer service are at the heart of everything we do. We believe in building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">What sets us apart from the competition</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '30+ Years Experience', description: 'Three decades of expertise in waterproofing solutions' },
              { title: 'Expert Team', description: 'Skilled professionals with 15-30 years of experience' },
              { title: 'Quality Materials', description: 'Using only premium, industry-approved products' },
              { title: 'Trusted by Leaders', description: 'Working with top builders since 1995' },
              { title: 'Timely Delivery', description: 'Projects completed on schedule, every time' },
              { title: 'Advanced Equipment', description: 'Modern tools and machinery for perfect results' },
              { title: 'Leak Masters', description: 'Experts in solving any type of leakage problem' },
              { title: '100% Satisfaction', description: 'Committed to excellence in every project' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <CheckCircle className="h-8 w-8 text-cyan-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>Expert Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Experienced professionals dedicated to quality workmanship</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                    <p className="text-cyan-600 text-sm font-medium">{member.experience}</p>
                  </div>
                </div>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Wrench className="h-4 w-4" />
                  <span>Equipment</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">State-of-the-Art Equipment</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We invest in the latest equipment and tools to ensure efficient and high-quality waterproofing work.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <p className="text-2xl font-bold text-cyan-600">
                        <CountUp end={8} duration={1500} />
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Lift Machines</p>
                      <p className="text-sm text-gray-600">For high-rise building access</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <p className="text-2xl font-bold text-blue-600">
                        <CountUp end={12} duration={1500} />
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Breaker Machines</p>
                      <p className="text-sm text-gray-600">For surface preparation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                      <p className="text-2xl font-bold text-teal-600">
                        <CountUp end={7} duration={1500} />
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Grouting Pumps</p>
                      <p className="text-sm text-gray-600">For injection waterproofing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                      <p className="text-2xl font-bold text-orange-600">
                        <CountUp end={10} duration={1500} />
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Cutter Machines</p>
                      <p className="text-sm text-gray-600">For precision cutting work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <ImageWithLoader
                  src="https://images.pexels.com/photos/5974056/pexels-photo-5974056.jpeg"
                  alt="Construction equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the list of satisfied clients who trust us for their waterproofing needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-cyan-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
