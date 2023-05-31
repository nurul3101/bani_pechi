import { PT_Sans } from "next/font/google";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser"

const pt_Sans = PT_Sans({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata = {
  title: "Бани и Печи в Уфе",
  description:
    "Интернет-магазин Бани и Печи. Все для создания бани, сауны в коттедже или на даче",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="ru">
      <body className={pt_Sans.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Header currentUser={currentUser} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
