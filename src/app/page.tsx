import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-6">Welcome to Help-A-Dev!</h1>
      <p className="text-xl mb-10">
        This is a collection of small tools that I use more often than I
        realize.
      </p>
      <Link href="/app">
        <Button>Explore More</Button>
      </Link>
    </main>
  );
}
