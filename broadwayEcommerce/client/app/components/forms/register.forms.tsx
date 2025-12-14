import React from 'react'

const RegisterForm = () => {
  return (
    <div className="w-full max-w-md">
      <form className="flex flex-col gap-4">

        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="font-semibold text-sm">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="font-semibold text-sm">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@gmail.com"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="******"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1">
          <label htmlFor="gender" className="font-semibold text-sm">
            Gender
          </label>
          <select
            id="gender"
            className="border px-3 py-2 rounded outline-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col gap-1">
          <label htmlFor="profilePic" className="font-semibold text-sm">
            Profile Picture
          </label>
          <input
            id="profilePic"
            type="file"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="font-semibold text-sm">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+977 9800000000"
            className="border px-3 py-2 rounded outline-blue-400"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="font-semibold text-sm">
            Address
          </label>
          <textarea
            id="address"
            placeholder="Enter your address"
            className="border px-3 py-2 rounded outline-blue-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-blue-500 text-white py-2 rounded font-semibold mt-4">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
