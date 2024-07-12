import blog3 from "@/public/how-to-pay-corporation-tax.png";

export const metadata = {
	title: "A Guide on How to Pay Corporation Tax Online in the UK",
	description:
		"Wondering how to pay corporation tax online in UK? Read our guide to learn about paying corporate tax online, including the rate of corporation tax & more.",
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

						<h2>What is corporation tax?</h2>
						<p>
							Corporation tax is levied on the profits of limited
							companies, foreign companies with a UK
							branch/office, and all other organisations eligible
							to pay corporation tax. Before 1 April 1965,
							companies used to pay the same income tax rates as
							individual taxpayers with some additional tax on the
							companies' profits. After the Finance Tax 1965, this
							changed for companies and associations with a single
							corporate tax. Since 1997, the UK's tax legislation
							has been modernised according to the UK's Tax Law
							Rewrite Project; the rules governing income tax and
							corporation tax have also changed.
						</p>

						<figure>
							<img
								src={blog3.src}
								alt="third blog"
								className="w-full rounded-xl"
							/>
							<figcaption>Digital art by Anonymous</figcaption>
						</figure>

						<h2>Rate of Corporation Tax</h2>

						<p>
							Since 1 April 2023, the corporation tax rates for
							the UK's financial year have been revised. The
							primary rate was 19% before, and now it is 25%. This
							primary corporation tax rate applies to companies
							with profits over GBP 250,000; however, if your
							company's augmented profits fall below GBP 50,000,
							you might be eligible for the 19% corporation tax
							rate. Note that if your earnings fall between GBP
							50,000 and GBP 250,000, then you will pay 25% tax
							which is the main tax, but with some marginal
							relief.
						</p>

						<h2>Corporation tax bill</h2>
						<p>
							Once you have calculated your corporation tax, HMRC
							will send you a corporation tax bill. The bill shows
							the amount of corporation tax you must pay and the
							filing deadline. It is important to regularly review
							your corporation tax bill to manage your finances
							effectively and stay on top of your tax obligations.
						</p>

						<h2>When is the corporate tax filing deadline?</h2>
						<p>
							The deadline for filing corporation tax is usually
							12 months after the end of your accounting period.
							However, the deadline to pay a corporation tax bill
							differs: 9 months and a day after your accounting
							period ends. For example, if your accounting period
							ends on 31 December, your corporation tax is due on
							1 October the following year. Companies that are
							larger in size and business have the option to pay
							corporation tax in instalments, in which case some
							of the payments might fail due to your accounting
							year instead of after the year-end. If you miss the
							deadline, it can result in penalties and fines.
						</p>

						<h2>How Do I Pay Corporation Tax Online?</h2>
						<p>
							To start paying your corporation tax online, you are
							required to register for corporation tax online
							first with HMRC. You can do this on the official
							website of HMRC, which will send you an activation
							code for your account to be activated. Once you have
							received the code, you can start the process by
							following the following steps:
						</p>
						<ul className="">
							<li>
								<h4>Determine your accounting period</h4>
								<p>
									Understanding your accounting period is very
									important before embarking on the journey of
									paying corporation tax. The accounting
									period tells you and HMRC the timeframe for
									which your company prepares its financial
									statements.
								</p>
							</li>
							<li>
								{" "}
								<h4> Calculate your corporation tax</h4>{" "}
								<p>
									The corporation tax rate is mentioned above,
									which is essential to keep in mind. Check it
									out and calculate your taxable profits
									accordingly, but make sure your calculations
									are correct to avoid errors and
									noncompliance in your tax payment.
								</p>
							</li>

							<li>
								<h4>Access the HMRC Online Services</h4>{" "}
								<p>
									Visit the official website of HMRC and log
									in to your account - Access HMRC's online
									services to pay your corporation tax online.
								</p>
							</li>
							<li>
								<h4>Locate the corporation tax section</h4>{" "}
								<p>
									Once you log into your account on the HMRC
									website, you will find a section explicitly
									for corporation tax. You can find all the
									necessary tools and data to file corporation
									tax online here.
								</p>
							</li>
							<li>
								<h4>Fill in the relevant details.</h4>{" "}
								<p>
									Provide accurate and up-to-date company
									details, including the profits and amount
									you are paying, Unique Taxpayer Reference
									(UTR), and any other necessary information.
									Once you are done, recheck the data you
									provided to ensure no errors.
								</p>
							</li>
							<li>
								<h4>Choose your payment method.</h4>{" "}
								<p>
									Fill out the payment details along with the
									required details. HMRC offers multiple
									options for paying your corporation tax.
									Choose the payment method that suits you
									best, then proceed with the transaction
									securely, and Bob's your uncle! Your
									corporation has been paid.
								</p>
							</li>
						</ul>

						<p>
							Paying corporation tax on time and accurately is
							very important as it helps contribute to your
							business's financial health and compliance. Visit
							our Corporation Tax service page, check out our
							packages, and let us expertly handle your
							corporation tax, helping you free up your valuable
							time and resources.
						</p>
					</article>
				</div>
			</main>
			{/* <aside
				aria-label="Related articles"
				className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
			>
				<div className="px-4 mx-auto max-w-screen-xl">
					<h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
						Related articles
					</h2>
					<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
						<article className="max-w-xs">
							<a href="#">
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
									className="mb-5 rounded-lg"
									alt="Image 1"
								/>
							</a>
							<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
								<a href="#">Our first office</a>
							</h2>
							<p className="mb-4 text-gray-500 dark:text-gray-400">
								Over the past year, Volosoft has undergone many
								changes! After months of preparation.
							</p>
							<a
								href="#"
								className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
							>
								Read in 2 minutes
							</a>
						</article>
						<article className="max-w-xs">
							<a href="#">
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
									className="mb-5 rounded-lg"
									alt="Image 2"
								/>
							</a>
							<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
								<a href="#">Enterprise design tips</a>
							</h2>
							<p className="mb-4  text-gray-500 dark:text-gray-400">
								Over the past year, Volosoft has undergone many
								changes! After months of preparation.
							</p>
							<a
								href="#"
								className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
							>
								Read in 12 minutes
							</a>
						</article>
						<article className="max-w-xs">
							<a href="#">
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
									className="mb-5 rounded-lg"
									alt="Image 3"
								/>
							</a>
							<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
								<a href="#">We partnered with Google</a>
							</h2>
							<p className="mb-4  text-gray-500 dark:text-gray-400">
								Over the past year, Volosoft has undergone many
								changes! After months of preparation.
							</p>
							<a
								href="#"
								className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
							>
								Read in 8 minutes
							</a>
						</article>
						<article className="max-w-xs">
							<a href="#">
								<img
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
									className="mb-5 rounded-lg"
									alt="Image 4"
								/>
							</a>
							<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
								<a href="#">Our first project with React</a>
							</h2>
							<p className="mb-4  text-gray-500 dark:text-gray-400">
								Over the past year, Volosoft has undergone many
								changes! After months of preparation.
							</p>
							<a
								href="#"
								className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
							>
								Read in 4 minutes
							</a>
						</article>
					</div>
				</div>
			</aside> */}
		</div>
	);
}
