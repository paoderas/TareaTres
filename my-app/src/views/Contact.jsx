// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar el envío del formulario a un servidor o alguna acción
    console.log("Formulario enviado", formData);
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center mb-8 text-lg">We would love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-500 text-white rounded-lg px-6 py-3 text-lg hover:bg-teal-400 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;




