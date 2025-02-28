"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/dashboard">
          <h1 className="text-xl font-bold tracking-wide">Sary-Mail</h1>
        </Link>
        <div className="flex gap-4">
          <Link href="/contacts" className="hover:text-yellow-400">Contacts</Link>
          <Link href="/campaigns" className="hover:text-yellow-400">Campaigns</Link>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
