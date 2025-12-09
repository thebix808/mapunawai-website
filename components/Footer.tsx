"use client";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Book an Appointment", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-neutral-charcoal text-neutral-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Māpunawai
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body text-neutral-white/80 hover:text-neutral-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-white/10">
          <p className="text-body text-neutral-white/60">
            © {new Date().getFullYear()} Māpunawai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

