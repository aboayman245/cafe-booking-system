import { Coffee, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#6F4E37] text-white">
      <div className="container mx-auto px-6 py-14">
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-7 h-7" />
              <h3 className="text-xl font-bold"> OLIVIA Cafe</h3>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Experience the perfect blend of comfort and quality. Book your
              table and enjoy premium coffee in a cozy atmosphere.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-base text-white/80">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Mansoura, Al-Galaa Street, below Al-Moo Restaurant</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@OLIVIAcafe.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-base text-white/80">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <BsTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
          © 2024 OLIVIA Cafe ☕. All rights reserved. Designed with ❤️ for
          coffee lovers.
        </div>
      </div>
    </footer>
  );
}
