// Common project-wide TypeScript interfaces

// Props for Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
}

// Props for Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}
