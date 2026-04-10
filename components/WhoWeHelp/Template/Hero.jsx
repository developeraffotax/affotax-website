import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";


export default function Hero({
  heading = "Default Heading",
  html = "",
  imageUrl = "",
  btnText = "Get Started",
  btnLink = "/contact-us",
}) {
  return (
    <div className="flex w-full flex-row gap-10 items-start justify-center px-80 max-2xl:px-40 max-xl:px-10 pt-20 bg-gradient-to-br from-orange-300/5 to-orange-900/20">
      
      <div className="w-full max-lg:flex-col items-start justify-center flex border-b border-gray-300 pb-10">
        
        <div className="relative flex flex-1 flex-col items-start justify-center">
          
          {heading && (
            <h1 className="mt-8 pb-8 max-lg:mt-0 leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text max-lg:text-5xl font-bold text-transparent sm:max-w-3xl sm:text-6xl">
              {heading}
            </h1>
          )}

          {html && (
            <span
              className="max-w-2xl text-start text-xl leading-relaxed text-gray-800"
              dangerouslySetInnerHTML={{
                __html: String(html),
              }}
            />
          )}

          {btnText && btnLink && (
            <div className="mt-12">
              <Link
                href={btnLink}
                className="flex flex-row items-center justify-center gap-x-2 font-semibold rounded-lg text-white px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all"
              >
                {btnText}
                <FaRegArrowAltCircleRight className="scale-110" />
              </Link>
            </div>
          )}
        </div>

        {imageUrl && (
          <div className="flex-1 flex justify-start items-start -mt-10 max-lg:m-0">
            <img
              className="object-cover object-center rounded drop-shadow-xl"
              alt={heading || "Hero Image"}
              src={imageUrl}
              width="1200"
              height="800"
            />
          </div>
        )}

      </div>
    </div>
  );
}