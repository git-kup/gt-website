import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

// Section Container
export function SectionContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("section-container", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Heading with animated underline
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  withAccent?: boolean;
}

export function Heading({
  as: Component = "h2",
  children,
  className,
  withAccent = false,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "relative font-display mb-6",
        withAccent && "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-accent after:rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Card component variants
const cardVariants = cva(
  "rounded-xl transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white shadow-md hover:shadow-lg",
        glass: "glass-panel hover:shadow-glass-hover",
        "glass-panel-dark": "glass-panel-dark",
        outline: "border border-border bg-transparent hover:border-accent",
        flat: "bg-muted",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
      interactive: {
        true: "hover:-translate-y-1 cursor-pointer",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ 
  className, 
  variant, 
  size, 
  interactive,
  children, 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size, interactive }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Badge component
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-primary text-primary",
        accent: "bg-accent text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

// Animated Button
export const animatedButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
      withArrow: {
        true: "group",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      withArrow: false,
    },
  }
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {}

export function AnimatedButton({
  className,
  variant,
  size,
  withArrow = false,
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(animatedButtonVariants({ variant, size, withArrow }), className)}
      {...props}
    >
      {children}
      {withArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </button>
  );
}

// Testimonial card component
export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  company?: string;
  avatarSrc?: string;
}

export function Testimonial({ 
  quote, 
  author, 
  company, 
  avatarSrc, 
  className,
  ...props 
}: TestimonialProps) {
  return (
    <Card 
      variant="glass" 
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      <div className="text-lg italic text-foreground/80">&ldquo;{quote}&rdquo;</div>
      <div className="flex items-center gap-3 mt-auto">
        {avatarSrc && (
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src={avatarSrc} alt={author} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-medium">{author}</div>
          {company && <div className="text-sm text-muted-foreground">{company}</div>}
        </div>
      </div>
    </Card>
  );
}

// Service card component
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  className,
  ...props 
}: ServiceCardProps) {
  return (
    <Card
      variant="glass"
      interactive={true}
      className={cn("flex flex-col items-start gap-4 h-full transition-all duration-300 group overflow-hidden relative", className)}
      {...props}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative z-10 p-6">
        <div className="mb-6 p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
          <div className="text-3xl">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 -mr-6 -mb-6 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-all duration-300"></div>
    </Card>
  );
}

// Contact Form Input
export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Contact Form Textarea
export function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input min-h-[120px]",
          className
        )}
        {...props}
      />
    </div>
  );
}
