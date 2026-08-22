import type { ComponentPropsWithoutRef } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'ghost'
  | 'outline';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
};
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-neutral-900 text-white hover:bg-neutral-800',

  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',

  outline:
    'border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100',

  ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-100',

  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-3 text-sm',
  medium: 'px-4 text-sm',
  large: 'px-6 text-base',
};

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  loadingText = 'Loading',
  disabled,
  className = '',
  children,
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  const baseClasses =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2';
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',

    isLoading
      ? 'cursor-wait'
      : disabled && 'pointer-events-none cursor-not-allowed opacity-50',

    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...buttonProps}
    >
      {isLoading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
          aria-hidden="true"
        />
      )}

      {isLoading ? loadingText : children}
    </button>
  );
}
