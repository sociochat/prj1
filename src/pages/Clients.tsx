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
      experience: '22 Years',
      projects: '18,45,000 sq.ft',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      logo: 'https://www.ektaworld.com/images/new-logo-png.png'
    },
    {
      name: 'Prakash Group',
      slug: 'prakash-group',
      experience: '23 Years',
      projects: '90,75,00 sq.ft',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      logo: 'https://prakashgroup.net/wp-content/uploads/2023/08/prakash-group-logo.png'
    },
    {
      name: 'Dimple Realtors',
      slug: 'dimple-realtors',
      experience: '16 Years',
      projects: '15,85,000 sq.ft',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      logo: 'https://dimplesgroup.com/assets/img/logo/logo.webp'
    },
    {
      name: 'D.V. Realtors',
      slug: 'dv-realtors',
      experience: '7 Years',
      projects: '5,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      logo: 'https://newprojects.99acres.com/projects/d.v._group/builderr.jpg'
    },
    {
      name: 'S.J. Corporation',
      slug: 'sj-corporation',
      experience: '4 Years',
      projects: '60,000 sq.ft',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      logo: 'https://sjconstructions.co.in/wp-content/uploads/2023/10/SJ-LOGO.png'
    },
    {
      name: 'Rachna Group',
      slug: 'rachna-group',
      experience: '12 Years',
      projects: '1,95,000 sq.ft',
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg',
      logo: 'https://lh3.googleusercontent.com/p/AF1QipNceeQBBJoo7xkmngOtgtuSfzwZsVEZcMdojAc_=s1360-w1360-h1020-rw'
    },
    {
      name: 'Yamuna Reality',
      slug: 'yamuna-reality',
      experience: '7 Years',
      projects: '5,43,000 sq.ft',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEzuIyTuJCXuIiPuIiPcN0PdHSawYoMDr/EKsPEAr+8Jru8Aru8Cru85SqAAru8Aru8Dru8Aru81OZYuLpEwJ44uL5IuMJI1L44tMJIwL5E0Lo8vKo8vL5EuMJIuL5IuL5IuL5JQLIAuMJKYupmKAAAAJHRSTlMASSPMnzAXLkAYcyKhVAuvi1q8FnctmE05z/mGIbf/oeLoe63eJBWdAAAArUlEQVR4AZ3LBQKDMBAEwBTXC0WjV/v/G+u4sxCdLOnlZJDZnExrXm3Tmm86rk3m4/lHMQgXMIrnDYIphN8S0mS+eU7TsPe6myCl3lzRT2gUzKEXUZr4BzAD720ZTBnkeRZ4RVlNIeNCgtJ4ySaKEvGaVYi3aqJ4+yPqUdXRWCPeYYASWxSsb0x0EHmvWnDsIpYdVRq/udWIslGoHr+UGdP/XUHqZHUI1Lu6OZ8Xn+4TOoSrN7sAAAAASUVORK5CYII='
    },
    {
      name: 'Land Developers',
      slug: 'land-developers',
      experience: '20 Years',
      projects: 'Multiple Projects',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
      logo: 'https://landsdeveloper.com/wp-content/uploads/elementor/thumbs/logo-qvcbx45qwyx9hs83pgz6e9vdlrxtymnq7nafg3pt0g.png'
    },
    {
      name: 'Empire Realtors',
      slug: 'empire-realtors',
      experience: '22 Years',
      projects: '3,55,000 sq.ft',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      logo: 'https://www.empirerealty.in/img/logonew.png'
    },
    {
      name: 'Sahakar Group',
      slug: 'sahakar-group',
      experience: '15 Years',
      projects: '8,75,000 sq.ft',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      logo: 'https://sahakar-group.in/wp-content/uploads/2021/08/Sahakar-Group-Logo-1536x535.png'
    },
    {
      name: 'Parsh Groups',
      slug: 'parsh-groups',
      experience: '15 Years',
      projects: '4,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg',
      logo: 'https://parshgroup.com/wp-content/uploads/2024/09/Logo_Retina_parsh.webp'
    },
    {
      name: 'BJ Enterprises',
      slug: 'bj-enterprises',
      experience: '5 Years',
      projects: '1,50,000 sq.ft',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
      logo: 'https://3.imimg.com/data3/AS/BJ/MY-3510185/b-j-enterprises-logo-120x120.png'
    },
    {
      name: 'Romell Group',
      slug: 'romell-group',
      experience: '8 Years',
      projects: '3,25,000 sq.ft',
      image: 'https://images.pexels.com/photos/5176023/pexels-photo-5176023.jpeg',
      logo: 'https://ik.imagekit.io/ootltj6dk/wp-content/uploads/2024/05/Romell-Logo.png'
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
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border-b-2 border-cyan-100">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-28 h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={client.image}
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
                    <div className="text-xs text-gray-600">{client.projects}</div>
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
