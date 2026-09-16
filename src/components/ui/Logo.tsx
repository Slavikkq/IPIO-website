interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className = "", onClick }: LogoProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer select-none ${className}`}
    >
      <div className="w-10 h-10 border border-graphite-300/30 flex items-center justify-center shrink-0">
        <span className="text-[8px] font-bold tracking-wider text-graphite-300/50">
          LOGO
        </span>
      </div>
      <span className="text-lg font-bold tracking-ultra-wide text-white">
        ІПІО
      </span>
    </div>
  );
}
