import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

import Logo from "../images/LOGO.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Platform", href: "#platform" },
    { name: "Security", href: "#security" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <img
            src={Logo}
            alt="Variss"
            className="h-50 w-auto object-cover"
          />

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      className="text-[#1b368c] transition hover:text-[#2bb3cd] font-bold"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(22, 119, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-[#1b368c] to-[#31e3f8] rounded-full font-semibold text-md flex items-center justify-center space-x-2 group"
              >
                <a href="#">Login</a>
              </motion.button>

              <div className="block md:hidden ">
                <button
                  className="rounded-md p-2 text-white-600 hover:bg-gray-200 transition bg-gradient-to-r from-[#1b368c] to-[#2bb3cd]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-gray-100 ">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    className="block py-2 text-gray-700 hover:text-blue-600 transition"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;