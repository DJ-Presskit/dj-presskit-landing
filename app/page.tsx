import { BackgroundBeams } from "@/components/AnimatedBackgrounds/BackgroundBeams";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Text from "@/components/Text/Text";

export default function Home() {
  return (
    <main className="relative h-full">
      <div className="h-screen w-full bg-secondary flex flex-col items-center justify-center antialiased overflow-x-hidden">
        <BackgroundBeams />
        <div className="!z-[80] flex items-center justify-center flex-col gap-5 section-max-w mx-auto section-px">
          <Text
            Tag={"h1"}
            variant="title"
            className="tracking-wider bg-clip-text bg-gradient-to-b from-gray-200 to-secondary-lighter text-transparent"
          >
            Join the waitlist
          </Text>
          <Text
            variant="content"
            className="max-w-[500px] mx-auto !text-center"
          >
            <strong>¿Sos DJ y querés mostrar tu trabajo con estilo?</strong>
            <br />
            Creamos sitios únicos, listos en 48 - 72hs, que podés compartir en
            tus redes o enviar a tus contactos. Agendá una reunión y te
            mostramos cómo hacerlo realidad.
          </Text>
          <DefaultButton
            href="https://calendly.com/ramifazio/dj-presskit-interview"
            variant="secondary"
          >
            AGENDA UNA REUNION
          </DefaultButton>
        </div>
      </div>

      <div
        className={
          "h-[60px] translate-y-[58px] w-full  absolute bottom-0 left-0 bg-gradient-to-b from-secondary to-transparent z-50"
        }
      ></div>
    </main>
  );
}
