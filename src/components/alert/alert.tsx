import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export type AlertProps = ComponentPropsWithoutRef<'div'> & {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
};

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-blue-200 border-l-blue-600 bg-blue-50/70 text-blue-950',
  success:
    'border-emerald-200 border-l-emerald-600 bg-emerald-50/70 text-emerald-950',
  warning:
    'border-amber-200 border-l-amber-500 bg-amber-50/70 text-amber-950',
  danger: 'border-red-200 border-l-red-600 bg-red-50/70 text-red-950',
};

export function Alert({
  variant = 'info',
  title,
  children,
  className = '',
  ...alertProps
}: AlertProps) {
  const classes = [
    'rounded-lg border border-l-4 px-5 py-4 shadow-sm',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role={variant === 'danger' ? 'alert' : 'status'}
      {...alertProps}
    >
      {title && <p className="text-sm font-semibold leading-6">{title}</p>}

      <div className={`text-sm leading-6 opacity-90 ${title ? 'mt-0.5' : ''}`}>
        {children}
      </div>
    </div>
  );
}
