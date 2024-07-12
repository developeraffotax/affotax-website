import post1 from "@/public/annual-statements.png";

export const metadata = {
	title: "A Guide to Understanding Annual Statements",
	description:
		"What is an annual statement? Annual statements are a crucial part of your company's financial health. Explore what annual reports are & what they contain.",
};

export default function BlogPage() {
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
										{/* <p className="text-base text-gray-500 dark:text-gray-400">Accountant, ACCA &amp; Accountant at Affotax</p> */}
										<p className="text-base text-gray-500 dark:text-gray-400">
											<time
												pubdate
												dateTime="2024-02-12"
												title="February 12th, 2024"
											>
												Feb. 12, 2024
											</time>
										</p>
									</div>
								</div>
							</address>
							<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
								A Guide to Understanding Annual Statements
							</h1>
						</header>
						<p className="lead">
							Allow yourself to delve into the world of accounting
							in the UK where you’d likely hear of financial
							statements. It is important to understand what an
							annual statement is and how it is a fundamental part
							of your business or company’s financial health. .
						</p>
						<p>
							{" "}
							In this comprehensive guide, we'll break down
							everything you need to know, including what it is,
							what it contains, and how to prepare it..
						</p>
						<figure>
							<img
								src={post1.src}
								alt="first blog"
								className="w-full rounded-xl"
							/>
							{/* <figcaption>Digital art by Anonymous</figcaption> */}
						</figure>
						<h2>What is an annual statement?</h2>
						<p>
							It is a report of your finances that your business
							must prepare every year. It will provide an overview
							of your company’s financial health by laying out a
							summary of its income, expenses, assets and
							liabilities.
						</p>
						<p>
							{" "}
							Your enterprise is required to file its financial
							statements with Companies House, which is the
							official register of businesses under the UK
							government..
						</p>
						<h2>What is included in an annual statement?</h2>
						Here is what it would typically include:
						<ol>
							<li>
								<strong>Company information</strong>. Your
								corporate information is mentioned, like the
								name of the director, registration number and
								registered office address.
							</li>
							<li>
								<strong>Director's report</strong>. In this
								report, the director presents his/her/their
								report and accounts at year end.
							</li>
							<li>
								<strong>A balance sheet</strong>. A balance
								sheet is an overview of your financial position
								at a specific point in time. A balance sheet
								helps in summarising your company's assets,
								liabilities, and equity.
							</li>
							<li>
								<strong>Income statement</strong>.An income
								statement, also known as a profit and loss
								account, gives a summary of revenues, expenses,
								and profits or losses over a specific time
								period. This is how we put it:
								<ul>
									<li>Turnover</li>
									<li>Direct cost</li>
									<li>Staff costs</li>
									<li>
										Depreciation and other amounts written
										off assets
									</li>
									<li>Other charges</li>
									<li>Profit/Loss for the financial year</li>
								</ul>
							</li>

							<li>
								<strong>Cash flow statement</strong>. A cash
								flow statement gives you a summary of inflows
								and outflows of cash over a specific time
								period.
							</li>

							<li>
								<strong>
									Notes to the financial statements
								</strong>
								. Notes to the financial statements These notes
								are used for additional information related to
								your firm's financial position like accounting
								policies, contingent liabilities, and any other
								event that could impact your financial health.
								<br />
								Seek the best{" "}
								<a href="https://affotax.com/annual-accounts">
									annual accounts services
								</a>{" "}
								which also provide the management of micro
								entity accounts, abridged accounts and small
								company accounts for the best accounting
								experience.
							</li>
						</ol>
						<h3>
							Best practices for crafting effective yearly reports
						</h3>
						<p>
							<strong>Clarity is key:</strong> It is important to
							be clear in the balance sheet; the language used
							must be clear and easy to understand.
						</p>
						<p>
							<strong>Visual representation:</strong> It should be
							visually attractive; the use of charts and graphs
							make it easy to grasp by the readers
						</p>
						<p>
							<strong>Timely submission:</strong> Keeping in mind
							the deadlines for annual filings and confirmation
							statements to avoid fines and maintain good
							relations with regulatory authorities.
						</p>
						<h3>Preparing your annual accounts</h3>
						<p>
							AThe first step is to file an annual confirmation
							statement with Companies House; which confirms
							whether your company's information, like its
							registered address and directors, is up to date or
							not.
							<br />
							<code>Preparing your financial statement</code> can
							take a lot of your time and it is a complex process,
							especially if you do not know anything about
							accounting principles. It is important that your
							annual statement is correct and fulfils legal
							requirements. This is why you should work with a
							qualified accountant or an accountancy firm that
							provides the best{" "}
							<a href="https://affotax.com/annual-accounts">
								annual accounts scheme
							</a>
							.
						</p>
					</article>
				</div>
			</main>
			{/* <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
    <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Our first office</a>
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 2 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Enterprise design tips</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 12 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">We partnered with Google</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 8 minutes
          </a>
        </article>
        <article className="max-w-xs">
          <a href="#">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
          </a>
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Our first project with React</a>
          </h2>
          <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
          <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 4 minutes
          </a>
        </article>
      </div>
    </div>
  </aside> */}
		</div>
	);
}
