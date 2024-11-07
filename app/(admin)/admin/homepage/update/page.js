import dynamic from "next/dynamic";

const HomepageComponent = dynamic( () => { return import("@/components/Admin/Homepage/Homepage"); }, { ssr: false } );

export default function UpdateHomePagePage() {
	return <HomepageComponent />;
}
