import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFoundPage() {

	redirect('/')

	return (
		<>
			<Header />
			<div class="p-32 max-lg:p-8 max-lg:mt-10 flex flex-grow items-center justify-center bg-gray-50 w-full ">
				<div class="rounded-lg bg-white p-8 text-center shadow-xl">
					<h1 class="mb-4 text-4xl font-bold">404</h1>
					<p class="text-gray-600">
						{" "}
						Oops! The page you are looking for could not be found.
						We're working on it. Sorry for the inconvenience.{" "}
					</p>
					<Link
						href="/"
						class="mt-4 inline-block rounded bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
					>
						{" "}
						Go back to Home{" "}
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
