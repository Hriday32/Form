"use client";
import React, { useState } from "react";

export default function EventForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    otherGender: "",
    gameGenre: "",
    contactNumber: "",
    age: "",
    state: "",
    district: "",
    city: "",
    wardNo: "",
    place: "",
    citizenshipNumber: "",
    playerPhoto: null,
    esewaVoucher: null,
    citizenshipPhotoFront: null,
    citizenshipPhotoBack: null,
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleClearForm = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      otherGender: "",
      gameGenre: "",
      contactNumber: "",
      age: "",
      state: "",
      district: "",
      city: "",
      wardNo: "",
      place: "",
      citizenshipNumber: "",
      playerPhoto: null,
      esewaVoucher: null,
      citizenshipPhotoFront: null,
      citizenshipPhotoBack: null,
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
            JAM JAM SKATE JAM
          </h1>
          <strong>
            <p className="text-center text-gray-600 mb-4">
              We are conducting this event in two categories: Roller Skate &
              Skateboarding.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>
                Rollerskate Venue: (IOE) Thapathali Campus, Kathmandu, Ashwin 4
              </li>
              <li>
                Skateboard Venue: (IOE) Pulchowk Campus, Kathmandu, Ashwin 5
              </li>
            </ul>
            <div className="text-sm text-gray-700 mb-6">
              <p>
                Registration Fee: <strong>100 NPR</strong> (via Esewa:
                9843761182)
              </p>
              <p>
                First Prize: <strong>30000 CASH</strong>
              </p>
              <p>
                Second Prize: <strong>15000 CASH</strong>
              </p>
              <p>
                Third Prize: <strong>10000 CASH</strong>
              </p>
              <p>
                Fourth Prize: <strong>5000 CASH</strong>
              </p>
            </div>
          </strong>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Game Genre */}
            <div>
              <label
                htmlFor="gameGenre"
                className="block text-gray-700 font-semibold mb-1"
              >
                Game Genre
              </label>
              <select
                id="gameGenre"
                name="gameGenre"
                value={formData.gameGenre}
                onChange={handleChange}
                required
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
              >
                <option value="">Choose</option>
                <option value="Roller Skate">Rollerskate</option>
                <option value="Skateboarding">Skateboard</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
              />
            </div>

            {/* Middle Name */}
            <div>
              <label
                htmlFor="middleName"
                className="block text-gray-700 font-semibold mb-1"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-1"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                    className="form-radio text-purple-600 focus:ring-purple-300"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="form-radio text-purple-600 focus:ring-purple-300"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    className="form-radio text-purple-600 focus:ring-purple-300"
                  />
                  <span className="ml-2">Other:</span>
                  <input
                    type="text"
                    name="otherGender"
                    value={formData.otherGender}
                    className="ml-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                    placeholder="Specify"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* State */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  required
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                />
              </div>

              {/* District */}
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  required
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  required
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                >
                  <option value="">Choose</option>
                  <option value="Metropolitan City">Metropolitan City</option>
                  <option value="Sub-Metropolitan City">
                    Sub-Metropolitan City
                  </option>
                  <option value="Municipality">Municipality</option>
                  <option value="Rural-Municipality">Rural-Municipality</option>
                </select>
              </div>

              {/* Ward No */}
              <div>
                <label
                  htmlFor="wardNo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ward No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="wardNo"
                  name="wardNo"
                  value={formData.wardNo}
                  required
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                />
              </div>

              {/* Place */}
              <div>
                <label
                  htmlFor="place"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                />
              </div>

              {/* Citizenship Number */}
              <div>
                <label
                  htmlFor="citizenshipNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Citizenship Number (If the player is above 16)
                </label>
                <input
                  type="text"
                  id="citizenshipNumber"
                  name="citizenshipNumber"
                  value={formData.citizenshipNumber}
                  className="block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* File Upload Fields */}
            <div>
              <label
                htmlFor="playerPhoto"
                className="block text-sm font-medium text-gray-700"
              >
                Player's Photo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="playerPhoto"
                name="playerPhoto"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring focus:ring-purple-300"
                required
              />
            </div>

            {/* Esewa Voucher */}
            <div>
              <label
                htmlFor="esewaVoucher"
                className="block text-sm font-medium text-gray-700"
              >
                Esewa Voucher <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="esewaVoucher"
                name="esewaVoucher"
                accept=".pdf,image/*"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            
              {/* Citizenship Photo Front */}
              <div>
                <label
                  htmlFor="citizenshipPhotoFront"
                  className="block text-sm font-medium text-gray-700"
                >
                  Citizenship Photo (Front)
                </label>
                <input
                  type="file"
                  id="citizenshipPhotoFront"
                  name="citizenshipPhotoFront"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            

            {/* Citizenship Photo Back */}
            <div>
              <label
                htmlFor="citizenshipPhotoBack"
                className="block text-sm font-medium text-gray-700"
              >
                Citizenship Photo (Back)
              </label>
              <input
                type="file"
                id="citizenshipPhotoBack"
                name="citizenshipPhotoBack"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Submit & Clear Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClearForm}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
