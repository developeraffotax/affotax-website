'use client'
import dynamic from "next/dynamic";
 

const DashboardComponent = dynamic(
    () => {
        return import("@/components/Admin/Dashboard/Dashboard");
    },
    { ssr: false }
);



export default function DashboardPage() {

    


    return <DashboardComponent />
}