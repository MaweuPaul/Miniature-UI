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

  // Build input classes
  // Return label, input, and message
}
