import { Users, Award, Calendar, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Componants/Footer";

export default function LandingPage() {
  return (
    <div className="w-full  pt-[70px]">
      <section className="relative h-dvh  flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1739723745132-97df9db49db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQ2NDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-[#FF8C42]">OLIVIA Cafe</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, quality coffee, and warm
            atmosphere
          </p>
          <Link to="/bookTabel">
            <button
              variant="primary"
              size="lg"
              className="btn bg-[#6f4e37] border-0 rounded-2xl hover:bg-[#FF8C42]/90 text-white shadow-xl text-lg p-7"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book a Table Now
            </button>
          </Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-6">
              About Our Cafe
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              OLIVIA Cafe is more than just a coffee shop – it's a sanctuary for
              coffee lovers and food enthusiasts. We pride ourselves on serving
              premium coffee, delicious treats, and creating an atmosphere where
              memories are made.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to provide you with an exceptional dining
              experience in a warm, welcoming environment. Book your table and
              join our family of happy customers!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF8DC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-12">
            Our Table Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-2 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#FFF8DC]">
                <Users className="w-8 h-8 text-[#6F4E37]" />
              </div>

              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">
                Normal Tables
              </h3>

              <p className="text-gray-700 mb-4">
                Perfect for casual dining and small groups. Enjoy our cozy
                ambiance with friends and family.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Capacity: 2-6 persons</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Comfortable seating</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Quick service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 h-[400px] rounded-xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#6F4E37]">
                <Award className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">
                VIP Tables
              </h3>

              <p className="text-gray-700 mb-4">
                Experience premium service in our exclusive VIP section with
                extra privacy and comfort.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Capacity: 4-8 persons</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Private seating area</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FF8C42]" />
                  <span>Premium service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#6F4E37] mb-14">
            Opening Hours
          </h2>

          <div className="max-w-3xl mx-auto border-2  rounded-2xl shadow-2xl p-10">
            <div className="flex justify-center mb-8">
              <div className="bg-[#F5F5DC] p-5 rounded-full">
                <Clock className="w-12 h-12 text-[#6F4E37]" />
              </div>
            </div>

            <div className="space-y-6 text-lg">
              <div className="flex justify-between items-center pb-4 border-b-2 border-[#6F4E37]/40">
                <span className="font-semibold text-gray-800">
                  Monday - Friday
                </span>
                <span className="text-[#6F4E37] font-bold">
                  8:00 AM - 10:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b-2 border-[#6F4E37]/40">
                <span className="font-semibold text-gray-800">Saturday</span>
                <span className="text-[#6F4E37] font-bold">
                  9:00 AM - 11:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">Sunday</span>
                <span className="text-[#6F4E37] font-bold">
                  9:00 AM - 9:00 PM
                </span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/bookTabel">
                <button className="btn bg-[#6f4e37] border-0 rounded-2xl hover:bg-[#FF8C42]/90 text-white shadow-xl text-xl px-10 py-6 inline-flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Reserve Your Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
