import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Socials = () => {
  return (
    <aside className="w-auto max-w-xs h-auto bg-white/80 border border-gray-200 rounded-2xl shadow-lg p-6 space-y-7 backdrop-blur">
    
      {/* Contact Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Contact Info
        </h3>

        <div className="flex flex-col space-y-3 text-gray-600 text-sm">

          {/* Phone */}
          <a
            href="tel:+919971055886"
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50 hover:text-blue-700 transition group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
              <FaPhoneAlt className="text-sm" />
            </span>
            <div className="flex flex-col">
              <span className="font-medium">+91 9971055886</span>
              <span className="text-xs text-gray-400">Call us</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@myitronline.com"
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-blue-50 hover:text-blue-700 transition group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200">
              <FaEnvelope className="text-sm" />
            </span>
            <div className="flex flex-col">
              <span className="font-medium">info@myitronline.com</span>
              <span className="text-xs text-gray-400">Mail us</span>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps?q=305+3RD+FLOOR+PLOT+NO+51,+Hasanpur,+I.P.+Extension,+Patparganj,+Delhi,+110092"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl px-3 py-2 hover:bg-blue-50 hover:text-blue-700 transition group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 mt-0.5">
              <FaMapMarkerAlt className="text-sm" />
            </span>
            <div className="flex flex-col">
              <span className="font-medium">Office Address</span>
              <span className="text-xs text-gray-500 leading-snug">
                305 3RD FLOOR PLOT NO 51, Hasanpur, I.P. Extension, Patparganj,
                Delhi, 110092
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Social Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Follow Us
        </h3>

        <div className="flex flex-wrap gap-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition"
          >
            <FaFacebookF className="text-sm" />
            <span>Facebook</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-sky-400 hover:text-sky-500 hover:bg-sky-50 transition"
          >
            <FaTwitter className="text-sm" />
            <span>Twitter</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-50 transition"
          >
            <FaLinkedinIn className="text-sm" />
            <span>LinkedIn</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:border-pink-500 hover:text-pink-500 hover:bg-pink-50 transition"
          >
            <FaInstagram className="text-sm" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Socials;
