import { twMerge } from "tailwind-merge";

export interface TextProps {
  content?: string;
  children?: React.ReactNode;
  Tag?: React.ElementType;
  className?: string;
  variant: keyof typeof VARIANTS;
}

export const VARIANTS = {
  title: "text-4xl lg:text-6xl xl:text-7xl font-bold",
  subtitle: "text-md md:text-xl xl:text-2xl font-semibold",
  content: "text-md xl:text-lg font-medium",
  custom: "",
} as const;

const Text: React.FC<TextProps> = ({
  children,
  Tag = "span",
  className,
  content,
  variant,
}) => {
  return (
    <Tag
      className={twMerge(
        "text-primary text-base whitespace-pre-wrap text-center tracking-wide",
        VARIANTS[variant],
        className
      )}
    >
      {children}
      {content}
    </Tag>
  );
};

export default Text;
