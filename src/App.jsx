import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Componants/LoginPage";
import { Toaster } from "react-hot-toast";
import Hedaer from "./Componants/Hedaer";
import LandingPage from "./Pages/LandingPage";
import Page404 from "./Pages/Page404";
import RegisterPage from "./Componants/RegisterPage";
import BookTabel from "./Pages/BookTabel";
import MyBooking from "./Pages/MyBooking";

export default function App() {
  return (
    <div className="w-full h-dvh ">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Hedaer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bookTabel" element={<BookTabel />} />
          <Route path="/myBooking" element={<MyBooking/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
