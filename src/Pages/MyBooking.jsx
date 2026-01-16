import { Calendar, Clock, Users, X, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function MyBookingsUI() {
  const navigate = useNavigate();

  const [cards, setCards] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBookings = cards.filter((booking) => booking.id !== id);
        setCards(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        Swal.fire({
          title: "Cancelled",
          text: "Your booking has been cancelled.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  useEffect(() => {
    const hasLogged =
      localStorage.getItem("hasLogged") || sessionStorage.getItem("hasLogged");

    if (hasLogged !== "true") {
      navigate("/login");
    }
  }, [navigate]);

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
          <p className="text-black">Manage your cafe reservations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookingCard
            id={1}
            title="Table 5"
            type="Normal Table"
            status="Pending"
            statusStyle="bg-yellow-200 text-yellow-700"
            date="Monday, January 20, 2026"
            time="18:00"
            persons="2 persons"
            actions="pending"
            onCancel={handleCancel}/>

          <BookingCard
            id={2}
            title="VIP Table 2"
            type="VIP Table"
            status="Approved"
            statusStyle="bg-green-200 text-green-700"
            date="Friday, January 24, 2026"
            time="20:00"
            persons="4 persons"
            actions="approved"
            onCancel={handleCancel}/>

          <BookingCard
            id={3}
            title="Table 1"
            type="Normal Table"
            status="Rejected"
            statusStyle="bg-red-200 text-red-700"
            date="Sunday, January 26, 2026"
            time="15:00"
            persons="3 persons"
            actions="rejected"
            onCancel={handleCancel}/>
        </div>
      </div>
    </div>
  );
}

function BookingCard({
  id,
  title,
  type,
  status,
  statusStyle,
  date,
  time,
  persons,
  actions,
  onCancel,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-6">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#6F4E37]">{title}</h3>
          <p className="text-sm text-black">{type}</p>
        </div>

        <span
          className={`inline-flex items-center justify-center min-w-[80px] h-7 text-sm rounded-full font-medium ${statusStyle}`}>
          {status}
        </span>
      </div>

      <div className="space-y-3 text-black">
        <Info icon={Calendar}>{date}</Info>
        <Info icon={Clock}>{time}</Info>
        <Info icon={Users}>{persons}</Info>
      </div>

      {actions === "pending" && (
        <div className="mt-6 flex gap-3">
          <button className="flex-1 border border-[#6F4E37] text-[#6F4E37] rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-[#6F4E37] hover:text-white transition">
            <Pencil className="w-4 h-4" />
            Reschedule
          </button>

          <button
            onClick={() => onCancel(id)}
            className="flex-1 bg-red-600 text-white rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-red-700 transition">
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      )}

      {actions === "approved" && (
        <div className="mt-6">
          <button
            onClick={() => onCancel(id)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
            <X className="w-4 h-4" />
            Cancel Booking
          </button>
        </div>
      )}

      {actions === "rejected" && (
        <div className="mt-6 p-3 bg-red-100 rounded-lg">
          <p className="text-sm text-red-700 text-center">
            This booking was not approved. Please contact us.
          </p>
        </div>
      )}
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
