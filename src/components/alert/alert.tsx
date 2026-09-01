import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export type AlertProps = ComponentPropsWithoutRef<'div'> & {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
};

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  success: 'border-green-200 bg-green-50 text-green-900',
  warning: 'border-yellow-200 bg-yellow-50 text-yellow-900',
  danger: 'border-red-200 bg-red-50 text-red-900',
};

export function Alert({
  variant = 'info',
  title,
  children,
  className = '',
  ...alertProps
}: AlertProps) {
  const classes = ['rounded-md border p-4', variantClasses[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role={variant === 'danger' ? 'alert' : 'status'}
      {...alertProps}
    >
      {title && <p className="font-semibold">{title}</p>}

      <div className={title ? 'mt-1 text-sm' : 'text-sm'}>{children}</div>
    </div>
  );
}
