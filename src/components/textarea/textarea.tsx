import { useId, type ComponentPropsWithoutRef } from 'react';

export type TextareaSize = 'small' | 'medium' | 'large';

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
  label: string;
  textareasize?: TextareaSize;
  description?: string;
  error?: string;
};

const sizeClasses: Record<TextareaSize, string> = {
  small: ' min-h-20  py-2  text-sm px-3',
  medium: ' min-h-28 py-2 text-sm px-3',
  large: ' min-h-36 , py-3 ,px-4 text-base',
};

export function Textarea({
  label,
  textareasize = 'medium',
  description,
  error,
  id: providedId,
  className = '',
  required,
  ...textareaProps
}: TextAreaProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  const message = error ?? description;
  const messageId = `${id}-message`;

  const baseClasses =
    'block w-full resize-y rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 transition-colors focus-visible:border-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50';

  const errorClasses =
    'border-red-600 focus-visible:border-red-600 focus-visible:ring-red-200';

  const classes = [
    baseClasses,
    sizeClasses[textareasize],
    error && errorClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-900"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      <textarea
        id={id}
        className={classes}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        {...textareaProps}
      />

      {message && (
        <p
          id={messageId}
          role={error ? 'alert' : undefined}
          className={`text-sm ${error ? 'text-red-600' : 'text-neutral-500'}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
