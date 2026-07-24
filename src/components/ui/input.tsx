import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-xl border border-input bg-background px-4 text-sm transition-colors',
        'placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        'aria-[invalid=true]:border-red-500',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-32 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors',
      'placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
      'aria-[invalid=true]:border-red-500',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Input, Textarea };
