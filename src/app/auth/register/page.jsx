"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../api/firebase/config";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,
        fullname: fullname,
        phone: phone,
        role: role || "member",
      });
      console.log("Document written with ID: ", docRef.id);
      setEmail("");
      setPassword("");
      setFullname("");
      setPhone("");
      setRole("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="container w-full h-screen flex justify-center items-center">
      <div className="w-1/3 border border-black shadow-md flex justify-center items-center flex-col rounded-md">
        <h1 className="text-2xl font-bold mt-10">Register User</h1>
        <form className="flex flex-col w-full p-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              className="bg-slate-300 rounded-sm py-1 px-2"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password:</label>
            <input
              className="bg-slate-300 rounded-sm py-1 px-2"
              placeholder="********"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Full Name:</label>
            <input
              className="bg-slate-300 rounded-sm py-1 px-2"
              placeholder="example fullname"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Phone:</label>
            <input
              className="bg-slate-300 rounded-sm py-1 px-2"
              placeholder="0123456789"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            type="submit"
          >
            Register
          </button>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
