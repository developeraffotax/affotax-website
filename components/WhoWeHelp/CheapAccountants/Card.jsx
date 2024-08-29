import Image from "next/image";
import Link from "next/link";

export default function Card({ title, content, img, link }) {
	return (
		<div className="max-w-sm  bg-white/50 border w-full border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 h-[80vh] max-lg:h-auto p-2 ">
			<Link href={link}>
				<Image className="rounded-t-lg scale-90  " cover src={img} alt={title} />
			</Link>
			<div className="p-5  ">
				<Link href={link}>
					<h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white "> {title} </h5>
				</Link>
				<p className="mb-3 font-normal text-gray-700 text-sm  dark:text-gray-400">
					{content}
				</p>
			</div>
		</div>
	);
}
