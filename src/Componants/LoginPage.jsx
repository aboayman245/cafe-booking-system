import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Coffee, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const handellogin = (values) => {
    let domain = "http://localhost:1337";
    let endpoint = "/api/auth/local";
    let url = domain + endpoint;
    let dataToSend = {
      identifier: values.email,
      password: values.password,
    };
    axios
      .post(url, dataToSend)
      .then((res) => {
        let token = res.data.jwt;
        // values.rememberIndex ? localStorage.setItem("token", token) : sessionStorage.setItem("token", token);
        if (values.rememberIndex) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        toast.success("Login Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  };

  const test = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  useEffect(() => {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full h-dvh pt-[90px] flex flex-col bg-[#FFF8DC] justify-center items-center from-[#FFF8DC] to-[#F5F5DC] text-black ">
      <Formik
        onSubmit={handellogin}
        initialValues={{
          email: "",
          password: "",
          rememberIndex: false,
        }}
        validationSchema={test}
      >
        <Form className="w-[400px]  p-4 rounded-2xl shadow bg-white border-0 flex flex-col gap-3 justify-center">
          <div className="text-center ">
            <div className="inline-flex items-center justify-center  bg-[#6f4e37]  p-3 rounded-full mb-4">
              <Coffee className="w-8 h-8 text-white" />
            
            </div>
            <h1 className="text-4xl text-center">Welcom Back </h1>
            <p>Login to your OLIVIA Cafe account</p>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 text-[#6f4e37]" />
            <Field
              type="email"
              name="email"
              placeholder="Email address"
              className="input  w-full pl-10 focus:pl-10 bg-gray-200 rounded focus:outline-none focus:ring-2  focus:ring-[#6f4e37] text-black"
            />
          </div>

          <ErrorMessage name="email" component={"p"} className="text-red-500" />
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10 text-[#6f4e37]" />
            <Field
              type="password"
              name="password"
              placeholder="Password" 
              className="input input-bordered w-full pl-10 focus:pl-10 bg-gray-200 focus:outline-none focus:ring-2  focus:ring-[#6f4e37] rounded text-black"
            />
          </div>

          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-500"
          />

          <label className="flex gap-2  ">
            <Field
              type="checkbox"
              name="rememberIndex"
              className="checkbox checkbox-primary"
            />
            Remember Me
          </label>
          <button className="btn bg-[#6f4e37] border-0 rounded-2xl w-full" type="submit">
            Login
          </button>
       
          <div className=" text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#6f4e37] hover:underline">
                Register here
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">
              Demo: Use admin@cafe.com for admin or any email for user
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Coffee, Mail, Lock } from 'lucide-react';
// // import { Button } from '../ui/Button';
// // import { Input } from '../ui/Input';
// // import { Card } from '../ui/Card';
// // import { setCurrentUser, users } from '../../data/mockData';

// export const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Mock authentication
//     if (email === 'admin@cafe.com') {
//       setCurrentUser(users[1]); // Admin user
//       navigate('/admin');
//     } else {
//       setCurrentUser(users[0]); // Regular user
//       navigate('/');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#FFF8DC] to-[#F5F5DC] flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center bg-primary p-3 rounded-full mb-4">
//             <Coffee className="w-8 h-8 text-primary-foreground" />
//           </div>
//           <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
//           <p className="text-muted-foreground mt-2">
//             Login to your Cozy Cafe account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//             <Input
//               type="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               error={errors.email}
//               className="pl-10"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={errors.password}
//               className="pl-10"
//             />
//           </div>

//           <Button type="submit" variant="primary" className="w-full">
//             Login
//           </Button>
//         </form>

//         <div className="mt-6 text-center space-y-2">
//           <p className="text-sm text-muted-foreground">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-primary hover:underline">
//               Register here
//             </Link>
//           </p>
//           <p className="text-xs text-muted-foreground">
//             Demo: Use admin@cafe.com for admin or any email for user
//           </p>
//         </div>
//       </Card>
//     </div>
//   );
// };
