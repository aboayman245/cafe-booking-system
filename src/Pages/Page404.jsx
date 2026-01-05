import { useNavigate } from "react-router-dom";
import errorIcon from "../assets/error_icon.svg";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      <div
        className="w-full md:w-1/2 max-h-full rounded-2xl shadow-lg bg-gray-300
                      flex flex-col items-center justify-center gap-6 p-8"
      >
        <h1 className="text-4xl text-[#6B6B6B] font-semibold text-center">
          Page Not Found
        </h1>

        <img
          src={errorIcon}
          alt="404 Error"
          className="w-48 h-48 object-contain"
        />

        <p className="text-xl text-red-600 font-semibold text-center">
          Please check the URL and try again.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
