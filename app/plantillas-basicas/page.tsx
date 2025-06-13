"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PlantillasAvanzadas() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://template.dj-presskit.com");
  }, [router]);

  return null;
}
