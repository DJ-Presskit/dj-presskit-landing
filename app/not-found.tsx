"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Text from "@/components/Text/Text";
import DefaultButton from "@/components/Buttons/DefaultButton";
import Link from "next/link";

function NotFoundContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <Text Tag="h1" variant="title" className="text-4xl md:text-6xl">
        404 - Página no encontrada
      </Text>
      <Text Tag="p" variant="content" className="text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </Text>
      <DefaultButton href="/">Volver al inicio</DefaultButton>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
