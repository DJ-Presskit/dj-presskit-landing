import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { trackWhatsAppClick } from "@/lib/gtag";

export interface LandingLinkProps extends LinkProps {
  content?: string;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  newTab?: boolean;
  raw?: boolean;
  trackingLabel?: string;
}

const LandingLink: React.FC<LandingLinkProps> = ({
  content,
  className,
  containerClassName,
  children,
  prefetch = false,
  newTab,
  raw,
  trackingLabel,
  ...props
}) => {
  const handleClick = () => {
    if (
      props.href &&
      typeof props.href === "string" &&
      props.href.includes("wa.me") &&
      trackingLabel
    ) {
      trackWhatsAppClick(trackingLabel);
    }
  };

  return (
    <div className={twMerge("w-fit", containerClassName)}>
      <Link
        {...props}
        target={newTab ? "_blank" : ""}
        prefetch={prefetch}
        href={props.href}
        className={twMerge(
          className,
          raw ? "" : "font-semibold text-base transition duration-300"
        )}
        onClick={handleClick}
      >
        {content}
        {children}
      </Link>
    </div>
  );
};

export default LandingLink;
