import Tweet from "@/components/tweet";
import prisma from "@/lib/prisma";

export default async function Layout({ children }: { children: any }) {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      {children}
    </main>
  );
}
