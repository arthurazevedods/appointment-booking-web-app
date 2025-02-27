import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";


const outfit = Outfit({
  subsets: ["latin"],
});



export const metadata = {
  title: "Agendamento de consultas",
  description: "Site de agendamento de consultas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={outfit.className}
        suppressHydrationWarning
      >
        <div className="md:px-20">
          <Header />
          {children}
        </div>

      </body>
    </html>
  );
}
