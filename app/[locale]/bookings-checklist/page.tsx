import BookingsChecklist from "@/views/bookingChecklist/BookingsChecklist";
import CTA from "@/views/CTA";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Checklist para Bookings | DJ Presskit",
  description:
    "Usá esta checklist para organizar tus tareas clave y mejorar tus chances de conseguir bookings. Tus checks se guardan automáticamente.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BookingsChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") {
    notFound();
  }

  return (
    <main className="relative h-full">
      <BookingsChecklist />
      <CTA className={"!mb-0"} />
      <div
        className={
          "h-[100px] translate-y-[99px] w-full  absolute bottom-0 left-0 bg-gradient-to-b from-secondary to-transparent z-50"
        }
      ></div>
    </main>
  );
}
