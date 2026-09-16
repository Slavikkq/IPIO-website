import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { companyInfo, navLinks } from "@/data/company";
import { useScrollPosition } from "@/hooks/useScrollReveal";

export default function Header() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-expo ${
          scrolled
            ? "bg-graphite-950/90 backdrop-blur-xl border-b border-graphite-300/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-9xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="link-underline text-sm font-medium tracking-wide uppercase text-graphite-200 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm text-graphite-200 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-accent" />
              {companyInfo.phone}
            </a>
            <Button to="/#contact" size="sm">
              Зв'язатися з нами
            </Button>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-graphite-950 transition-all duration-500 ease-expo ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="text-3xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-300 py-4 border-b border-graphite-300/10"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.1 + i * 0.05}s, transform 0.5s ease ${0.1 + i * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <a
              href={`tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 text-lg text-graphite-200"
            >
              <Phone className="w-5 h-5 text-accent" />
              {companyInfo.phone}
            </a>
            <Button to="/#contact" size="lg" className="w-full">
              Зв'язатися з нами
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
