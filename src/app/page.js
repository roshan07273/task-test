import "./globals.css";
import App from "./swipe/App";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="sm min-h-screen flex flex-col justify-center items-center">
      <nav className="mx-0 p-4">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </nav>
      <main className="sm:flex-grow">
        <div className="container mx-auto py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Daily task manager for health care
          </h1>
          <p className="text-lg">Start tracking your Health Tasks.</p>
        </div>
        <div>
          <App />
        </div>
      </main>
    </div>
  );
}
