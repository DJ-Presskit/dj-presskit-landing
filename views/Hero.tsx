import { BackgroundBeams } from "@/components/AnimatedBackgrounds/BackgroundBeams";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";
import { whatsappLink } from "@/DATA";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-secondary flex flex-col items-center justify-center antialiased overflow-x-hidden">
      <BackgroundBeams />
      <div className="!z-[80] flex items-center justify-center flex-col gap-[10vh] section-max-w mx-auto section-px">
        <Text Tag={"h1"} variant="title" className="">
          Tu música ya tiene estilo,
          <br />
          tu presskit también debería
        </Text>
        <Text variant="content" className="max-w-[600px] mx-auto !text-center">
          <strong>
            Convertí tus flyers y drives en tu espacio digital, en 48 horas sin
            tocar una línea de código.
          </strong>
          <br />
          Profesionalizá tu marca personal: reuní tu bio, playlists, fechas y
          fotos en un solo link que hable por vos antes de que pongas play.
          Comunidad, claridad y estatus en cada click.
        </Text>
        <DefaultButton href={whatsappLink} className="uppercase">
          ¡Empezá tu Presskit!
        </DefaultButton>
      </div>
    </div>
  );
}
