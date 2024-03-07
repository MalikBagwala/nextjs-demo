import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>This is the root page</h1>
      <Link href={"/d"}>Go To Projects</Link>
    </div>
  );
}
