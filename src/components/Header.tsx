"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'Abonnements', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              Kin<span className="text-secondary">Assistance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors duration-200 text-sm lg:text-base relative group py-2"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="#pricing"
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              S'abonner
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="text-slate-500 hover:text-primary p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white border-t border-slate-100 shadow-lg absolute w-full`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-2">
             <Link
                href="#pricing"
                className="w-full flex justify-center items-center bg-primary hover:bg-blue-700 text-white px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                S'abonner
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
