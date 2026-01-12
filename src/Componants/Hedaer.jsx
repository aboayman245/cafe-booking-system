import { useState, useEffect } from "react";
import { Calendar, Coffee, House, LogOut, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loged, setLoged] = useState(true);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    toast.success("Logout Success");
    setLoged(false);
    navigate("/login");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 400) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [user, setUser] = useState(null);
  let domain = "http://localhost:1337";
  let endpoint = "/api/users/me";
  let url = domain + endpoint;

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    let basmga = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, basmga)
      .then((res) => {
        setUser(res.data);
        setLoged(true);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <header
      className={`w-full bg-white shadow-sm fixed top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="bg-[#6f4e37] p-2 rounded-lg">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#6f4e37]">OLIVIA Cafe</h1>
              <p className="text-xs text-[#6f4e37]">Book Your Perfect Table</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "flex items-center gap-2 hover:text-[#6f4e37] p-3 rounded border-0 " +
                (isActive ? "text-[#6f4e37]" : "")
              }
            >
              <House className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/bookTabel"
              className={({ isActive }) =>
                "flex items-center gap-2 hover:text-[#6f4e37] p-3 rounded border-0 " +
                (isActive ? "text-[#6f4e37]" : "")
              }
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </NavLink>

            <NavLink
              to="/myBooking"
              className={({ isActive }) =>
                "flex items-center gap-2 hover:text-[#6f4e37] p-3 rounded border-0 " +
                (isActive ? "text-[#6f4e37]" : "")
              }
            >
              <User className="w-4 h-4" />
              <span>My Bookings</span>
            </NavLink>
          </nav>
          {/* اسم اليوزر وي لو  كان عميل ولا ادمين */}
          <div className="hidden sm:block text-right text-black">
            <p className="text-sm font-medium">{loged && user?.username}</p>
            <p className="text-xs text-muted-foreground">Customer</p>
          </div>
          <NavLink to="/login">
            <button
              className="btn btn-ghost btn-sm flex items-center gap-2 text-black hover:bg-gray-200 rounded-2xl border-0"
              onClick={logOut}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
