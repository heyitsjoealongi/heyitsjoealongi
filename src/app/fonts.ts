import { Roboto, Roboto_Slab } from "next/font/google";

export const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const robotoSlab = Roboto_Slab({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});
