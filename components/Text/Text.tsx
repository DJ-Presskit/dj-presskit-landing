import { twMerge } from "tailwind-merge";

export interface TextProps {
  content?: string;
  children?: React.ReactNode;
  Tag?: any;
  className?: string;
  variant: keyof typeof VARIANTS;
}

export const VARIANTS = {
  title:
    "text-2xl lg:text-4xl xl:text-5xl font-bold uppercase leading-10 lg:leading-15 text-transparent bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600",
  subtitle: "text-md md:text-xl xl:text-2xl font-semibold",
  content: "text-sm xl:text-[18px] font-medium",
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
