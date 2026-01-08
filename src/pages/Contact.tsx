import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-cyan-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a waterproofing project? Contact us for a free consultation and quote. Our experts are ready to help protect your property.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:9322290414" className="block text-cyan-600 hover:text-cyan-700 font-semibold text-lg mb-2 transition-colors">
                +91 93222 90414
              </a>
              <a href="tel:8850990739" className="block text-cyan-600 hover:text-cyan-700 font-semibold text-lg transition-colors">
                +91 84338 42187
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your queries</p>
              <a href="mailto:mamtawaterproofing@yahoo.com" className="block text-blue-600 hover:text-blue-700 font-semibold text-lg break-all transition-colors mb-2">
                mamtawaterproofing@yahoo.com
              </a>
              <a href="mailto:navin.j@mamtawaterpoofing.com" className="block text-blue-600 hover:text-blue-700 font-semibold text-lg break-all transition-colors mb-2">
                navin.j@mamtawaterpoofing.com
              </a>
              <a href="mailto:ramchandra.j@mamtawaterproofing.com" className="block text-blue-600 hover:text-blue-700 font-semibold text-lg break-all transition-colors">
                ramchandra.j@mamtawaterproofing.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Working Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Saturday</p>
              <p className="text-teal-600 font-semibold text-lg">9:00 AM - 7:00 PM</p>
              <p className="text-gray-600 mt-4">Sunday</p>
              <p className="text-teal-600 font-semibold text-lg">By Appointment</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                data-tally-src="https://tally.so/embed/jaDZda?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="552"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Enquire for services"
                style={{ display: 'block' }}
              ></iframe>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      <strong>Mamta Waterproofing</strong><br />
                      Ankur Apartment, Plot No. 41,<br />
                      Near Vighnaharta Ganesh Mandir,<br />
                      Sector 20B, Airoli, Navi Mumbai,<br />
                      Thane, Maharashtra, India - 400708
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-4">Business Details:</p>
                  <p className="text-gray-300"><strong>GST:</strong> 27ADFPJ9975R1ZE</p>
                  <p className="text-gray-300"><strong>PAN:</strong> ADFPJ9975R</p>
                  <p className="text-gray-300 mt-2"><strong>Proprietor:</strong> Mr. Ramchandra Jukanti</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.6304574929785!2d72.9903215!3d19.1653956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9dcf220a49b%3A0xfebeba17366cf358!2sMamta%20Waterproofing!5e0!3m2!1sen!2sin!4v1704729600000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mamta Waterproofing Location"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                  <p className="text-center text-gray-700">
                    <MapPin className="inline h-5 w-5 text-cyan-600 mr-2" />
                    <strong>Airoli, Navi Mumbai - 400708</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border border-cyan-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Do you provide free consultations?</h3>
                <p className="text-gray-600">Yes, we offer free on-site consultations and quotes for all waterproofing projects.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">We serve Mumbai and surrounding areas including Navi Mumbai, Thane, and Vasai-Virar.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">How long does waterproofing take?</h3>
                <p className="text-gray-600">Project duration varies based on size and complexity. We provide accurate timelines during consultation.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Do you offer warranties?</h3>
                <p className="text-gray-600">Yes, we provide warranties on our workmanship and stand behind the quality of our services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
