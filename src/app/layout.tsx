import "./globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Help a Dev",
  description:
    "A simple collection of tools to help devs with their everyday task.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
