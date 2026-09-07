import {
  useEffect,
  useId,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

export type DialogProps = Omit<
  ComponentPropsWithoutRef<'dialog'>,
  'open' | 'children'
> & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  closeButtonClassName?: string;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className = '',
  closeButtonClassName = '',
  ...dialogProps
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const generatedId = useId();

  const titleId = `${generatedId}-title`;
  const descriptionId = `${generatedId}-description`;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const closeButtonClasses = [
    'flex size-11 shrink-0 items-center justify-center rounded-md',
    'text-neutral-500 transition-colors',
    'hover:bg-neutral-100 hover:text-neutral-900',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-neutral-900 focus-visible:ring-offset-2',
    closeButtonClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const classes = [
    'max-h-[calc(100dvh-2rem)] overflow-y-auto border border-neutral-200 bg-white p-0 text-neutral-900 shadow-2xl',
    'backdrop:bg-black/50 backdrop:backdrop-blur-[2px] m-auto w-[min(32rem,calc(100%-2rem))] rounded-xl',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <dialog
      {...dialogProps}
      ref={dialogRef}
      className={classes}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onCancel={(event) => {
        event.preventDefault();
        onOpenChange(false);
      }}
      onClose={() => onOpenChange(false)}
    >
      <div className="p-6">
        <header className="flex items-start justify-between gap-6">
          <div>
            <h2 id={titleId} className="text-lg font-semibold">
              {title}
            </h2>

            {description && (
              <p
                id={descriptionId}
                className="mt-1 text-sm leading-6 text-neutral-600"
              >
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label="Close dialog"
            onClick={() => onOpenChange(false)}
            className={closeButtonClasses}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="py-6">{children}</div>

        {footer && (
          <footer className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            {footer}
          </footer>
        )}
      </div>
    </dialog>
  );
}
