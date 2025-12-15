"use client";

import React, { useState } from "react";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  phone: string;
  address: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", formData);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">

        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Gender</label>
          <select
            name="gender"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+977 9800000000"
            className="border px-3 py-2 rounded outline-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm">Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            className="border px-3 py-2 rounded outline-blue-400 resize-none"
            onChange={onChange}
          />
        </div>

        <button className="bg-blue-500 text-white py-2 rounded font-semibold mt-4 hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
