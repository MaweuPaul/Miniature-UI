import type { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'checked' | 'defaultChecked' | 'onChange'
> & {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  description?: string;
  error?: string;
};
export function Checkbox({
  label,
  checked,
  onChange,
  description,
  error,
  ...checkboxProps
}: CheckboxProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...checkboxProps}
      />

      <span>{label}</span>
    </label>
  );
}
