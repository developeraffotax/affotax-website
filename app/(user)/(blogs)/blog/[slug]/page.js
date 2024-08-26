import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import Image from "next/image";




export const metadata = {
	title: "A Guide on How to Pay Corporation Tax Online in the UK",
	description:
		"Wondering how to pay corporation tax online in UK? Read our guide to learn about paying corporate tax online, including the rate of corporation tax & more.",
};










export default async function BlogPage({params}) {


	
	
	const {slug} = params;
	console.log(slug)
	const db = await connectDB()
	const blog = await Blog.findOne({slug : slug });


	console.log(blog)













	return (
		<div>
			<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
				<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
					<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
						<header className="mb-4 lg:mb-6 not-format">
							<address className="flex items-center mb-6 not-italic">
								<div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
									<img
										className="mr-4 w-16 h-16 rounded-full"
										src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
										alt="Jese Leos"
									/>
									<div>
										<a
											href="#"
											rel="author"
											className="text-xl font-bold text-gray-900 dark:text-white"
										>
											By Dave Jangid
										</a>
										{/* <p className="text-base text-gray-500 dark:text-gray-400">
											Graphic Designer, educator &amp; CEO
											Flowbite
										</p> */}
										<p className="text-base text-gray-500 dark:text-gray-400">
											<time
												pubdate
												// dateTime="2022-02-08"
												// title="February 8th, 2022"
											>
												Feb. 8, 2024
											</time>
										</p>
									</div>
								</div>
							</address>
						</header>

						<h2>{blog.title}</h2>
						<p>
							{blog.description}
						</p>

						<figure>
							<Image
								src={blog.imageUrl}
								alt={blog.title}
								className="w-full rounded-xl max-h-96"
								width={500}
								height={500}
							/>
							{/* <figcaption>Digital art by Anonymous</figcaption> */}
						</figure>

						<h2>{blog.title}</h2>

						<div dangerouslySetInnerHTML={{__html: blog.content}}>

						</div>

						

						

					
						
					</article>
				</div>
			</main>

		</div>
	);
}
