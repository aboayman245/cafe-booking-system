import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Coffee, Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handellogin = (values) => {
    let url = "http://localhost:1337/api/auth/local/register";

    axios
      .post(url, values)
      .then((res) => {
        sessionStorage.setItem("token", res.data.jwt);
        toast.success("Register Success");
        navigate("/bookTabel");
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  };

  const test = Yup.object({
    username: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Min 6 characters"),
  });

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8DC] to-[#F5F5DC] flex items-center justify-center pt-[90px] p-4">
      <Formik
        onSubmit={handellogin}
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={test}
      >
        <Form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5 border">
      
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-[#6f4e37] p-3 rounded-full mb-4">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#6f4e37]">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Join Olivia Cafe and start booking
            </p>
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f4e37]" />
            <Field
              name="username"
              placeholder="Full Name"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-200  focus:outline-none focus:ring-2 focus:ring-[#6f4e37] text-black"
            />
          </div>
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm mt-1"
          />

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f4e37]" />
            <Field
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full h-[10] p-10 pr-3 py-2 rounded-lg bg-gray-200  focus:outline-none focus:ring-2 focus:ring-[#6f4e37] text-black"
            />
          </div>

          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm mt-1"
          />

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f4e37]" />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6f4e37] text-black"
            />
          </div>
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm mt-1"
          />

          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#6f4e37] font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
