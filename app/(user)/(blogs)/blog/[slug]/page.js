import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import Image from "next/image";
import Link from "next/link";

//Meta data
export async function generateMetadata({ params }) {
	const { slug } = params;

	const db = await connectDB();
	const blog = await Blog.findOne({ slug: slug });

	if (!blog) {
		return null;
	}

	return {
		title: blog?.metaTitle || '',
		description: blog?.metaDescription | '',
		keywords: blog?.keywords | [] ,
		metadataBase: new URL('https://affotax.com'), alternates: { canonical: `/blog/${blog?.slug}`, },
	};
}

//Blog Page
export default async function BlogPage({ params }) {
	const { slug } = params;

	const db = await connectDB();
	const blog = await Blog.findOne({ slug: slug });

	if (!blog) {
		return (
			<>
				<div className="w-full flex flex-col justify-center items-center py-40 gap-8  ">
					<h3 className="text-4xl font-semibold  ">
						This blog does not exist!
					</h3>
					<Link href="/">
						<button className="px-4 py-2 font-poppins font-semibold bg-orange-400 rounded-xl text-white ">
							Go to Homepage
						</button>
					</Link>
				</div>
			</>
		);
	}

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

										<p className="text-base text-gray-500 dark:text-gray-400">
											<time pubdate>Feb. 8, 2024</time>
										</p>
									</div>
								</div>
							</address>
						</header>

						<h2>{blog.title}</h2>
						<p>{blog.description}</p>

						<figure>
							<Image
								src={blog.imageUrl}
								alt={blog.title}
								className="w-full rounded-xl max-h-96"
								width={500}
								height={500}
							/>
						</figure>

						{/* <h2>{blog.title}</h2> */}

						<div
							dangerouslySetInnerHTML={{ __html: blog.content }}
						></div>
					</article>
				</div>
			</main>
		</div>
	);
}
