import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import LoadingSpinner from './loading-spinner'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  loading?: boolean
  icon?: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, icon, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const fallback = loading || icon
    return (
      <>
        {fallback && (
          <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
            {!loading && icon}
            {loading && <LoadingSpinner className="w-4 h-4" />}
            {children ?? null}
          </button>
        )}
        {!fallback && (
          // eslint-disable-next-line react/no-children-prop
          <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} children={children} />
        )}
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
