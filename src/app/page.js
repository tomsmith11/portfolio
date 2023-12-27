import Image from "next/image";

import Pill from "./components/pill.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-white w-full h-full">
      
      <Pill src="/icons/pfp2.jpg" alt="image 1" text="Random photo 2" />
      <Pill src="/icons/pfp3.jpg" alt="image 2" text="Random photo 3" />
      <Pill src="/icons/pfp4.jpg" alt="image 3" text="Random photo 4" />
    </main>
  );
}
