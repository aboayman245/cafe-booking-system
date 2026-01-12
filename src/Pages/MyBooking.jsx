import axios from "axios";
import { Calendar, Clock, Users, X, Pencil, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyBookingsUI() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1337/" + "api/bookings")
      .then((res) => {
        setCards(res.data.data);
        console.log(res.data.data);
      })
      .catch();
  }, []);
  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#FFF8DC] pt-[100px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center bg-[#6F4E37] p-3 rounded-full mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-2">
            My Bookings
          </h1>
          <p className="text-gray-600">Manage your cafe reservations</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12 text-center mb-10">
          <Coffee className="w-16 h-16 text-gray-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-[#6F4E37] mb-2">
            No bookings yet
          </h3>

          <p className="text-gray-600 mb-6">
            Start by making your first reservation
          </p>

          <Link to="/bookTabel">
            <button className="px-8 py-3 bg-[#6F4E37] text-white rounded-xl hover:bg-[#FF8C42]/90 transition">
              Book a Table
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((el, index) => (
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#6F4E37]">Table B3</h3>
                  <p className="text-sm text-gray-500">Normal Table</p>
                </div>
                <span className=" inline-flex items-center justify-center min-w-[70px] h-7 text-sm rounded-full bg-green-200 text-green-700 font-medium">
                  Approved
                </span>
              </div>

              <div className="space-y-3 text-gray-700">
                <Info icon={Calendar}>{el.date}</Info>
                <Info icon={Clock}>{el.time}</Info>
                <Info icon={Users}>{el.persons} persons</Info>
              </div>

              <div className="mt-6">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                  <X className="w-4 h-4" />
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-[#6F4E37]" />
      <span>{children}</span>
    </div>
  );
}
