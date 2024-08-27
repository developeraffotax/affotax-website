import post1 from '@/public/annual-statements.png'
import post2 from "@/public/dormant.png";
import post3 from "@/public/company-dissolution.png";
import post4 from "@/public/llp.png";

import post5 from "@/public/how-to-pay-corporation-tax.png";
import post6 from "@/public/corporation-tax.png";
import post7 from "@/public/corporation-uk.png";
import post8 from "@/public/sa100.png";

import post9 from "@/public/sa302.png";
import post10 from "@/public/tax-code.png";
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
  const blogs = await Blog.find({});

  















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





























        <article className="max-w-xs">
          <a href="https://affotax.com/a-guide-to-understanding-annual-statements">
            <img src={post1.src} className="mb-5 rounded-lg" alt="Image 1" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/a-guide-to-understanding-annual-statements">A Guide to Understanding Annual Statements</a>
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">What is an annual statement? Annual statements are a crucial part of your company's financial health. Explore what annual reports are & what they contain.
          </p>
          <a href="https://affotax.com/a-guide-to-understanding-annual-statements" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 2 minutes
          </a>
        </article>


        <article className="max-w-xs">
          <a href="https://affotax.com/what-are-dormant-accounts">
            <img src={post2.src} className="mb-5 rounded-lg" alt="Image 2" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/what-are-dormant-accounts">What are dormant accounts?
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">What are dormant accounts? Learn about dormant accounts & importance of filing dormant company accounts in the UK. Explore the process with an example.</p>
          <a href="https://affotax.com/what-are-dormant-accounts" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>



        <article className="max-w-xs">
          <a href="https://affotax.com/what-is-a-company-dissolution-uk-business-owners-guide">
            <img src={post3.src} className="mb-5 rounded-lg" alt="Image 3" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/what-is-a-company-dissolution-uk-business-owners-guide">What is a Company Dissolution? </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Are you a UK business owner thinking what it means to dissolve a company? Read our guide to dissolving a company with debts & a notice of dissolution, etc.
          .</p>
          <a href="https://affotax.com/what-is-a-company-dissolution-uk-business-owners-guide" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 5 minutes
          </a>
        </article>





        <article className="max-w-xs">
          <a href="https://affotax.com/how-to-file-llp-accounts-with-companies-house">
            <img src={post4.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/how-to-file-llp-accounts-with-companies-house">How to File LLP Accounts With Companies House</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Understand how to file LLP accounts with Companies House. Learn the essentials of limited liability partnerships & ensure compliance for UK LLP accounts.
          </p>
          <a href="https://affotax.com/how-to-file-llp-accounts-with-companies-house" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>











        <article className="max-w-xs">
          <a href="https://affotax.com/a-guide-on-how-to-pay-corporation-tax-online-in-the-uk">
            <img src={post5.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/a-guide-on-how-to-pay-corporation-tax-online-in-the-uk">A Guide on How to Pay Corporation Tax Online in the UK
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Wondering how to pay corporation tax online in UK? Read our guide to learn about paying corporate tax online, including the rate of corporation tax & more.

          </p>
          <a href="https://affotax.com/a-guide-on-how-to-pay-corporation-tax-online-in-the-uk" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>











        <article className="max-w-xs">
          <a href="https://affotax.com/how-is-corporation-tax-calculated-and-filed-in-the-uk">
            <img src={post6.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/how-is-corporation-tax-calculated-and-filed-in-the-uk">How is Corporation Tax Calculated and Filed in the UK?
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Are you wondering how is corporation tax calculated & filed in the UK? Read our guide to learn how corporation tax is calculated & filed with an example.

          </p>
          <a href="https://affotax.com/how-is-corporation-tax-calculated-and-filed-in-the-uk" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>






        <article className="max-w-xs">
          <a href="https://affotax.com/a-guide-on-how-to-register-for-corporation-tax-in-the-uk">
            <img src={post7.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/a-guide-on-how-to-register-for-corporation-tax-in-the-uk">A Guide on How to Register for Corporation Tax in the UK
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Read our guide on how to register for corporation tax online in the UK. Get started with corporation tax registration and avoid any potential penalties.

          </p>
          <a href="https://affotax.com/a-guide-on-how-to-register-for-corporation-tax-in-the-uk" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>







        <article className="max-w-xs">
          <a href="https://affotax.com/what-is-a-tax-code">
            <img src={post8.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/what-is-a-tax-code">What is a Tax Code - Your Guide to Accurate Taxation
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Understanding your tax code is crucial for ensuring you pay the correct amount of tax and can help you avoid unexpected bills or refunds.

          </p>
          <a href="https://affotax.com/what-is-a-tax-code" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>
























        
        <article className="max-w-xs">
          <a href="https://affotax.com/what-is-sa302-and-how-to-obtain-it">
            <img src={post9.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/what-is-sa302-and-how-to-obtain-it">What is SA302 and How to Obtain It?

            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">The SA302 form is a document issued by HM Revenue and Customs (HMRC) in the UK. 

          </p>
          <a href="https://affotax.com/what-is-sa302-and-how-to-obtain-it" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 8 minutes
          </a>
        </article>












        <article className="max-w-xs">
          <a href="https://affotax.com/what-is-sa100-a-guide-to-filing-self-assessment-tax-return">
            <img src={post10.src} className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="https://affotax.com/what-is-sa100-a-guide-to-filing-self-assessment-tax-return">What is SA100? A Guide to Filing Self Assessment Tax Return
            </a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">A comprehensive guide to understanding what SA100 is, along with how to file a self-assessment tax return. Find out where you can find an SA100 form.

          </p>
          <a href="https://affotax.com/what-is-sa100-a-guide-to-filing-self-assessment-tax-return" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 5 minutes
          </a>
        </article>











      </div>
    </div>
  </aside>

  
</div>

    )
}













































