import Layout from "@/component/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between" >
        <h1>
          Hello, {session?.user?.email}
        </h1>
        <img src={session?.user?.image} className="h-9 w-9 rounded-full" alt="profile image" />
      </div>
    </Layout>
  )
}
