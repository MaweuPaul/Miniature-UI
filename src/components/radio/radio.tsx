import { useId, type ComponentPropsWithoutRef } from 'react';

export type RadioOption = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
};

export type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'value' | 'defaultValue' | 'onChange'
> & {
  legend: string;
  name: string;
  options: readonly RadioOption[];
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
};

export function RadioGroup({
  legend,
  name,
  options,
  value,
  onValueChange,
  error,
  disabled,
  className = '',
  ...inputProps
}: RadioGroupProps) {
  const generatedId = useId();
  const errorId = `${generatedId}-error`;

  return (
    <fieldset
      className={`space-y-3 ${className}`}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="mb-2 text-sm font-semibold text-neutral-900">
        {legend}
      </legend>

      {options.map((option) => {
        const optionId = `${generatedId}-${option.value}`;
        const isDisabled = disabled || option.disabled;

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className={`flex min-h-14 items-start gap-3 rounded-lg border p-4 transition-colors ${
              isDisabled
                ? 'cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-50'
                : value === option.value
                  ? 'cursor-pointer border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900'
                  : 'cursor-pointer border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50'
            }`}
          >
            <input
              {...inputProps}
              id={optionId}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={isDisabled}
              onChange={() => onValueChange(option.value)}
              className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            />

            <span className="min-w-0">
              <span className="block text-sm font-semibold text-neutral-900">
                {option.label}
              </span>

              {option.description && (
                <span className="mt-1 block text-sm leading-5 text-neutral-600">
                  {option.description}
                </span>
              )}
            </span>
          </label>
        );
      })}

      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
