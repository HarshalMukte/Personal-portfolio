import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

//for openGraph
import ogImage from './opengraph-image.jpg'

export const metadata = {
  title: "Harshal Mukte",
  description: "My Personal Portfolio App",
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ]
  },
}
//for openGraph

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Harshal Mukte",
//   description: "My Personal Portfolio App",
//   twitter: {
//     card: "summary_large_image"
//   }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
