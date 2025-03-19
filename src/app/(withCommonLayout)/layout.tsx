import Navbar from "@/components/Lui/Navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>
        navbar products, cart, contact uus, ,ouur blog, , home, FAQ, new
        Arribale, cart,accouunt, logo
      </h1>
      <h1>banner, searchbar, </h1>

      <Navbar />

      {children}
    </div>
  );
}
