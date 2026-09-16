import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { companyInfo, navLinks } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-graphite-900 border-t border-graphite-300/10">
      <div className="max-w-9xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-sm text-graphite-400 leading-relaxed max-w-xs">
              {companyInfo.fullName}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-graphite-300 mb-6">
              Навігація
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-graphite-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-graphite-300 mb-6">
              Контакти
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 text-sm text-graphite-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-sm text-graphite-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-graphite-400">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {companyInfo.address}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase text-graphite-300 mb-6">
              Графік роботи
            </h4>
            <p className="text-sm text-graphite-400 leading-relaxed">
              {companyInfo.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-graphite-300/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-graphite-500">
            © 2026 ІППО. Усі права захищені.
          </p>
          <p className="text-xs text-graphite-500">
            Архітектура та інженерія мостів
          </p>
        </div>
      </div>
    </footer>
  );
}
