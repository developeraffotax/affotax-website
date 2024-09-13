
import Blog from '@/lib/Model/Blog';
import Image from 'next/image';
import Link from 'next/link';
import { connectDB } from '@/lib/connectDB';


export const metadata = {
	title: "Blogs | Affotax",
	description:
		`Discover a wealth of knowledge on our blogs page, featuring the latest updates, expert tips, and insightful articles on Accounting. Whether you're looking for in-depth guides or quick reads, we have content to keep you informed and inspired. `,
};








export default async function BlogsPage() {



  const db = await connectDB()
  const blogs = await Blog.find({}).sort({_id: -1})

  















    return (


<div>
  
  <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
    <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Blogs </h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {
          blogs.map((el) => {
              
              return(
                <article className="max-w-xs" key={el._id}>
                <Link href={`/blog/${el.slug}`}>
                  <Image src={el.imageUrl} className="mb-5 rounded-lg w-full max-h-36 " alt={el.title} width={500} height={500} />
                  
                </Link>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <Link href={`/blog/${el.slug}`}>{el.title}</Link>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">{el.description}
                </p>
                <Link href={`/blog/${el.slug}`} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 5 minutes
                </Link>
              </article>
              )
          })
        }







      </div>
    </div>
  </aside>

  
</div>

    )
}













































