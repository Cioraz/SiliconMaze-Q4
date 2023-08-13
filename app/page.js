import Image from "next/image";
import Checklist from "../components/Checklist";
export default function Home() {
  return (
    <main className=" w-full bg-teal-800 min-h-screen  items-center justify-between p-24">
      <Checklist />
    </main>
  );
}
