import { useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  label: string;
  inputSize?: InputSize;
  description?: string;
  error?: string;
};

const sizeClasses: Record<InputSize, string> = {
  small: 'min-h-9 px-3 text-sm',
  medium: 'min-h-11 px-3 text-sm',
  large: 'min-h-12 px-4 text-base',
};

export function Input({
  label,
  inputSize = 'medium',
  description,
  error,
  id: providedId,
  className = '',
  required,
  ...inputProps
}: InputProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  const message = error ?? description;
  const messageId = `${id}-message`;

  // variant classes

  const baseClasses =
    'block w-full min-w-0 rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 transition-colors focus-visible:border-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50';
  // Return label, input, and message
  const errorClasses =
    'border-red-600 focus-visible:border-red-600 focus-visible:ring-red-200';

  const classes = [
    baseClasses,
    sizeClasses[inputSize],
    error && errorClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-neutral-900">
        {label}

        {required && (
          <span className="text-red-600" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      <input
        id={id}
        className={classes}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        {...inputProps}
      />

      {message && (
        <p
          id={messageId}
          className={
            error ? 'text-sm text-red-600' : 'text-sm text-neutral-500'
          }
          role={error ? 'alert' : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
}
