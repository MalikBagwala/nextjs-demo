import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-100 text-gray-900">
      <h1>This is the root page</h1>
      <Link href={"/d"}>Go To Projects</Link>
    </main>
  );
}
