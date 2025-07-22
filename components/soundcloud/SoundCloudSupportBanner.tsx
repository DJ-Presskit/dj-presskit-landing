import { Cross, CrossIcon } from "lucide-react";
import Icon from "../Icons/Icon";
import LandingImage from "../Images/LandingImage";
import Text from "../Text/Text";
import Image from "next/image";

const SoundCloudSupportBanner = () => {
  return (
    <section className="bg-gradient-to-t from-secondary via-[#ff5500]/50 to-secondary  w-full py-12 px-6 flex flex-col items-center justify-center text-center gap-5">
      <div className="flex items-center  flex-col">
        <Icon src="soundcloud" className="w-32 h-32 md:w-32 md:h-32" />
        <Text
          Tag={"h5"}
          variant="title"
          className="text-lg text-transparent bg-clip-text bg-gradient-to-t from-[#ff5500] to-white"
        >
          Official Partner
        </Text>
      </div>
      <Text variant="content">
        DJ Presskit is officially supported by SoundCloud.
        <br className="hidden lg:block" /> A trusted partnership to elevate your
        music presence.
      </Text>
    </section>
  );
};

export default SoundCloudSupportBanner;
