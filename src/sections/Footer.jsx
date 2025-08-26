import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">InteriorCo</h3>
          <p className="mt-2 text-gray-400">Transforming spaces into elegant experiences.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="mt-3">📍 New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@interiorco.com</p>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} InteriorCo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

