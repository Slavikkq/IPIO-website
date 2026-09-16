import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'group inline-flex items-center justify-center gap-3 font-medium tracking-wide transition-all duration-500 ease-expo uppercase';

  const variants = {
    primary:
      'bg-accent text-graphite-950 hover:bg-accent-light px-7 py-3.5 text-sm',
    outline:
      'border border-graphite-300/30 text-white hover:border-accent hover:text-accent px-7 py-3.5 text-sm',
    ghost:
      'text-graphite-200 hover:text-white px-0 py-0 text-sm',
  };

  const sizes = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-9 py-4',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

export function LinkButton({ children, to, className = '' }: { children: React.ReactNode; to: string; className?: string }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-graphite-200 hover:text-accent transition-colors duration-300 ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
