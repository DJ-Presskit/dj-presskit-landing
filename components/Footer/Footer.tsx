import LandingImage from "../Images/LandingImage";
import Text from "../Text/Text";

const Footer = () => {
  return (
    <footer
      className="h-[300px] relative lg:h-[300px] bg-secondary-lighter"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[300px] lg:h-[300px] w-full flex flex-col  justify-center lg:items-center">
        <Content />
      </div>
    </footer>
  );
};

const Content = () => {
  return (
    <div className="relative section-px section-max-w mx-auto w-full flex flex-col items-center gap-10 justify-between pt-[50px] md:flex-row-reverse">
      <div>
        <LandingImage
          noPreload
          src="default_logo"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
      <Text variant="content" className="!text-xs">
        © Copyright {new Date().getFullYear()} - <strong>DJ PRESSKIT ®</strong>{" "}
        -
        <br className="md:hidden" /> All Rights Reserved
      </Text>
      <div className="hidden md:flex w-full items-center justify-center h-[0px] blur-sm absolute top-auto bottom-auto left-0">
        <h5 className="text-[200px] tracking-wider  bg-gradient-to-t from-accent/40 to-secondary bg-clip-text text-transparent">
          DJ PRESSKIT
        </h5>
      </div>
    </div>
  );
};

export default Footer;
