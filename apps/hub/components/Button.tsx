import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'ghost' | 'divergen';

const base =
  'inline-flex items-center justify-center font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-sage text-white hover:bg-sage-deep',
  gold: 'border border-gold-muted text-gold-muted hover:bg-gold hover:text-white',
  ghost:
    'border border-neutral-warm text-neutral-ink/80 hover:text-neutral-ink hover:border-neutral-ink/30',
  divergen: 'bg-divergen text-white hover:bg-divergen-deep',
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
