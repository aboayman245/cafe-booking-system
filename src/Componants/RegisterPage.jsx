// import axios from "axios";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useEffect } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";

// export default function RegisterPage() {
//   const navigate = useNavigate();

//   const handellogin = (values) => {
//     let domain = "http://localhost:1337";
//     let endpoint = "/api/auth/local/register";
//     let url = domain + endpoint;

//     axios
//       .post(url, values)
//       .then((res) => {
//         let token = res.data.jwt;
//         // values.rememberIndex ? localStorage.setItem("token", token) :
//         sessionStorage.setItem("token", token);
//         // if (values.rememberIndex) {
//         //   localStorage.setItem("token", token);
//         // } else {
//         //   sessionStorage.setItem("token", token);
//         // }
//         toast.success("Rister Success");
//         navigate("/");
//       })
//       .catch((err) => {
//         toast.error(err.response.data.error.message);
//       });
//   };

//   const test = Yup.object({
//     username: Yup.string().required(),

//     email: Yup.string().email().required(),

//     password: Yup.string()
//       .required()
//       .required("Password is required")
//       .min(6, "Password must be at least 6 characters")
//       .max(20, "Password must not exceed 20 characters")
//       .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//       .matches(/\d/, "Password must contain at least one number")
//       .matches(
//         /[^A-Za-z0-9]/,
//         "Password must contain at least one special character"
//       )
//       .test(
//         "no-sequential-numbers",
//         "Password must not contain sequential numbers like 123 or 456",
//         (value) => !/(012|123|234|345|456|567|678|789)/.test(value || "")
//       )
//       .test(
//         "no-repeated-numbers",
//         "Password must not contain repeated numbers like 11 or 222",
//         (value) => !/(\d)\1{1,}/.test(value || "")
//       ),
//   });

//   useEffect(() => {
//     let token =
//       localStorage.getItem("token") || sessionStorage.getItem("token");
//     if (token) {
//       navigate("/");
//     }
//   }, []);

//   return (
//     <div className="w-full h-dvh flex flex-col  justify-center items-center bg-white text-black ">
//       <Formik
//         onSubmit={handellogin}
//         initialValues={{
//           email: "",
//           password: "",
//           username: "",
//         }}
//         validationSchema={test}
//       >
//         <Form className="w-[400px] p-4 rounded-2xl shadow bg-white border flex flex-col gap-3 ">
//           <h2>Welcom , Please Register</h2>
//           <Field
//             type="text"
//             name="username"
//             className="w-full input"
//             placeholder="please Enter Your Name"
//           />
//           <ErrorMessage
//             name="username"
//             component={"p"}
//             className="text-red-500"
//           />
//           <Field
//             type="email"
//             name="email"
//             className="w-full input"
//             placeholder="please Enter Your Email"
//           />
//           <ErrorMessage name="email" component={"p"} className="text-red-500" />
//           <Field
//             type="text"
//             name="password"
//             className="w-full input"
//             placeholder=" Enter Your Password"
//           />
//           <ErrorMessage
//             name="password"
//             component={"p"}
//             className="text-red-500"
//           />
//           <button className="btn bg-[#6f4e37] w-full" type="submit">
//             Register
//           </button>

//            <div className=" text-center space-y-2">
//             <p className="text-sm text-muted-foreground">
//               Already have an account? {''}
//               <Link to="/login" className="text-[#6f4e37] hover:underline">
//                Login here
//               </Link>
//             </p>
//             {/* <p className="text-xs text-muted-foreground">
//               Demo: Use admin@cafe.com for admin or any email for user
//             </p> */}
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

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
        navigate("/");
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
