import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joyería y Relojería Luna | Joyas que te representan",
  description: "Descubrí Joyería y Relojería Luna: piezas elegantes y atemporales pensadas para acompañarte todos los días.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es"><body>{children}</body></html>;
}
