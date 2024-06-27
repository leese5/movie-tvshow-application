import { Inter } from "next/font/google";
import Navbar from "./Nav/page";
const inter = Inter({ subsets: ["latin"] });

const body = {
  margin: 0,
  padding: 0,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={body} className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
