import { useId, type ComponentPropsWithoutRef } from 'react';

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};
export type SelectProps = Omit<
  ComponentPropsWithoutRef<'select'>,
  'children'
> & {
  label: string;
  options: readonly SelectOption[];
  placeholder?: string;
  description?: string;
  error?: string;
};

export function Select({
  label,
  options,
  placeholder,
  description,
  error,
  id: providedId,
  className = '',
  ...selectProps
}: SelectProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  const message = error ?? description;
  const messageId = `${id}-message`;

  const classes = [
    'block min-h-11 w-full rounded-md border bg-white px-3 text-sm text-neutral-900',
    'focus-visible:outline-none focus-visible:ring-2',
    error
      ? 'border-red-600 focus-visible:ring-red-200'
      : 'border-neutral-300 focus-visible:border-neutral-900 focus-visible:ring-neutral-300',
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
      </label>

      <select
        {...selectProps}
        id={id}
        className={classes}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

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
