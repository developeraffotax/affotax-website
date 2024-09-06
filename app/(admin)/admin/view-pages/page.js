import dynamic from "next/dynamic";







const ViewPages = dynamic(
    () => {
      return import("@/components/Admin/WhoWeHelpPages/ViewPages");
    },
    { ssr: false }
  );



export default function ViewPagesPage() {
    return (
        <ViewPages />
    )
}