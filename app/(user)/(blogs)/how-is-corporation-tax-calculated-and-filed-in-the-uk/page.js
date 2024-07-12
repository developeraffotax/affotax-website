import blog3 from "@/public/corporation-tax.png";

export const metadata = {
	title: "How is Corporation Tax Calculated and Filed in the UK?",
	description:
		"Are you wondering how is corporation tax calculated & filed in the UK? Read our guide to learn how corporation tax is calculated & filed with an example.",
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
												Jan. 18, 2024
											</time>
										</p>
									</div>
								</div>
							</address>
						</header>

						<h2>How is corporation tax calculated?</h2>
						<p>
							Nowadays, it is easier to calculate corporation tax
							as many online tools can help you do so quickly.
							Here is how you can do it yourself:
							<br /> <br />A tax paid by limited companies and
							other taxable organisations is called corporation
							tax, which is calculated on the profit of these
							companies or organisations during their accounting
							period. As a business owner in the UK, it is
							essential to understand how to calculate corporation
							tax and file it. This blog post will explore the
							answer to "How is corporation tax calculated?"
							including the corporation tax filing and some other
							tips. Let's get right into it.
						</p>

						<figure>
							<img
								src={blog3.src}
								alt="third blog"
								className="w-full rounded-xl"
							/>
							{/* <figcaption>Digital art by Anonymous</figcaption> */}
						</figure>

						<h3>Determine taxable profits</h3>

						<p>
							The first step in calculating corporation tax is to
							determine your taxable profits. To do this, subtract
							allowable business expenses from your total income.
							Allowable business expenses include operating costs,
							staff salaries, and other business-related expenses.
						</p>

						<h3>Determine taxable profits</h3>
						<p>
							The first step in calculating corporation tax is to
							determine your taxable profits. To do this, subtract
							allowable business expenses from your total income.
							Allowable business expenses include operating costs,
							staff salaries, and other business-related expenses.
						</p>

						<h3>Apply the corporation tax rate</h3>
						<p>
							Once you have successfully determined your taxable
							profits, the next thing you should do is apply the
							corporation tax rate. The corporation tax rates have
							been revised for the UK's financial year as of 1
							April 2023. <br />
							If your company has a profit of over GBP 250,000,
							you will have to pay 25% corporation tax; if it
							falls below GBP 50,000, you will pay 19%. However,
							your corporation tax can vary if your profits fall
							between GBP 50,000 and GBP 250,000; you must pay the
							primary tax rate (25%) with some marginal relief.
						</p>

						<h3>Deduct any tax credits</h3>
						<p>
							Suppose your company is eligible for tax credits,
							which is the money you can subtract from the income
							taxes you owe. In that case, you can deduct them
							from your corporation tax bill.
						</p>

						<h3>Submit your corporation tax return</h3>
						<p>
							After following the above steps, you are ready to
							submit your corporation tax return to Her Majesty
							Revenue & Customs (HMRC) within 12 months of the end
							of your accounting period.
						</p>

						<h3>Factor in special rules</h3>
						<p>
							Special rules or exemptions can affect Your
							corporation tax calculation due to particular
							circumstances. These circumstances include capital
							allowances on fixed assets, etc., which help reduce
							the corporation tax or research and development
							(R&D) tax credits, which are companies that work on
							projects in science and technology. <br />
							This incentive helps a company offset some of the
							costs of eligible research and development (R&D). It
							is essential to note these factors that can be
							beneficial for you.
						</p>

						<p>
							Suppose you have purchased any asset, including a
							computer, plant, machinery, or other office
							equipment. In that case, you can claim back the
							amount on the corporation tax. Contact us and let us
							help you reclaim your purchasing amount.
						</p>

						<div className="font-semibold [&_p]:m-0">
							<p>
								Here is an example of a calculated corporation
								tax return:
							</p>
							<p>Company name: ABC LTD</p>
							<p>Tax District: 123</p>
							<p>Tax reference: 1234567890</p>
							<p>
								Accounting period: From 01 January 2021 to 31
								December 2021
							</p>
							<p>
								Return period: From 01 January 2021 to 31
								December 2021
							</p>
							<p>Net profit: 60,782.00</p>
						</div>

						<table>
							<thead>
								<tr>
									<th>DATA</th>

									<th>%</th>
									<th>£</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<th>
										Profit chargeable to corporation tax
										profits
									</th>

									<th>-</th>
									<th>60,782.00</th>
								</tr>

								<tr>
									<th>Tax calculation</th>

									<th>19</th>
									<th>11,548.58</th>
								</tr>

								<tr>
									<th>Corporation tax chargeable</th>

									<th>-</th>
									<th>11,548.58</th>
								</tr>
							</tbody>
						</table>

						<h3>Corporation Tax Filing</h3>
						<p>
							The corporation tax, also known as CT600, consists
							of your company's standard information; however,
							sometimes, it is necessary to do some complex
							calculations. These calculations depend on your
							company, which includes turnover, income, deductions
							and reliefs, tax reliefs and reductions, losses, tax
							reconciliation, etc. Your company information would
							include company name, company registration number,
							Unique Taxpayer Reference (UTR), and type of
							company. <br />
							<br />
							The process can be daunting. To get detailed
							information, read the{" "}
							<a href="https://www.gov.uk/guidance/the-company-tax-return-guide">
								HMRC's guide
							</a>
							, which is published to help business owners better
							understand the company tax return. If you have
							received a notice from HMRC to deliver your company
							tax return, there is no need to panic. Our expert
							team knows the ins and outs of corporation tax. Let
							us help! Here is what you should remember during
							your corporation tax filing. Keep accurate records
						</p>

						<h3>Keep accurate records</h3>
						<p>
							It is essential to keep your records accurate and
							up-to-date, including your financial transactions,
							expenses, income, etc. This will help make filing
							easier while complying with UK law and regulations.
						</p>

						<h3>Utilise online filing platforms.</h3>
						<p>
							The UK government encourages business owners to use
							online platforms to{" "}
							<a href="https://affotax.com/file-corporation-tax">
								file their corporation tax returns online
							</a>
							. HMRC offers online services, making things easier
							and faster for you.
						</p>

						<h3>Remember the deadlines</h3>
						<p>
							It is essential to stay compliant with deadlines
							because failing to file your corporation tax return
							on time can result in fines and penalties.
						</p>

						<p>
							Now that you know "how is corporation tax calculated
							and filed", make sure you do it on time to avoid
							late filing penalties. Check out our{" "}
							<a href="https://affotax.com/file-corporation-tax">
								Corporation Tax Filing
							</a>{" "}
							service. Let us take the burden off your shoulders
							by calculating and filing your corporation tax.
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
