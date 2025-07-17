import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-background border-t py-10 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold text-primary mb-2">
            Gourmet
          </Link>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Gourmet. All rights reserved.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Link
            href="/menu"
            className="hover:text-primary transition-colors text-sm"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors text-sm"
          >
            About
          </Link>
          <Link
            href="/reservation"
            className="hover:text-primary transition-colors text-sm"
          >
            Reservation
          </Link>
          <Link
            href="/order"
            className="hover:text-primary transition-colors text-sm"
          >
            Order Online
          </Link>
          <Link
            href="/admin"
            className="hover:text-primary transition-colors text-sm"
          >
            Admin
          </Link>
        </div>
        {/* Socials */}
        <div className="flex gap-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="mailto:info@gourmet.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      {/* Bottom line */}
      <div className="container mx-auto mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          Designed with <span className="text-red-500">♥</span> by Gourmet Team
        </span>
        <div className="flex gap-4 text-xs">
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
