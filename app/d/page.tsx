import waitForSeconds from "@/utils/waitForSeconds";
import Link from "next/link";

export default async function Dashboard() {
  await waitForSeconds(5, true);

  return (
    <main className="h-screen w-full bg-gray-100 text-gray-900">
      <h1>This is the dashboard Page</h1>
      <Link href={"/"}>Go To Home</Link>
    </main>
  );
}
