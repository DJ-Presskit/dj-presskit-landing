import { BackgroundBeams } from "@/components/AnimatedBackgrounds/BackgroundBeams";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-secondary flex flex-col items-center justify-center antialiased overflow-x-hidden">
      <BackgroundBeams />
      <div className="!z-[80] flex items-center justify-center flex-col gap-[10vh] section-max-w mx-auto section-px">
        <Text
          Tag={"h1"}
          variant="title"
          className="text-transparent bg-clip-text bg-gradient-to-tl from-gray-200 to-neutral-600 lg:leading-15 xl:leading-25"
        >
          Tu música ya tiene estilo,
          <br />
          tu presskit también debería
        </Text>
        <Text variant="content" className="max-w-[600px] mx-auto !text-center">
          <strong>¿Sos DJ y querés mostrar tu trabajo con estilo?</strong>
          <br />
          Creamos presskits únicos, listos en menos de 48 horas hábiles, que podés compartir
          en tus redes o enviar a tus contactos. Agendá una reunión y te
          mostramos cómo hacerlo realidad.
        </Text>
        <DefaultButton href="https://calendly.com/ramifazio/dj-presskit-interview">
          AGENDA UNA REUNION
        </DefaultButton>
      </div>
    </div>
  );
}
