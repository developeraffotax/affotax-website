 


 
import { connectDB } from "@/lib/connectDB";
import Log from "@/lib/Model/Log";
 
import dynamicCmp from "next/dynamic";

const Logs = dynamicCmp(
  () => {
    return import("@/components/Admin/Logs/Logs");
  },
  { ssr: false }
);

export const dynamic = "force-dynamic";


export default async function LogsPage() {



    const db = await connectDB();
	const logs = await Log.find().sort({_id: -1}).limit(50);

    return <Logs logsData={JSON.stringify(logs)} />;
}
