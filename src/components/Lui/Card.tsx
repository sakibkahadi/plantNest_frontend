import Image from "next/image";
import StarRating from "./StarRating";

export default function Card() {
  return (
    <div className="relative border-4 border-gray-500 bg-white w-full   md:w-[350px] h-full flex-col  flex p-2 text-black items-center justify-center overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group">
      <div className="bg-gray-900 ">
        <Image
          src={
            "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/product/01-385x501.jpg"
          }
          className="h-full w-full bg-amber-200"
          alt="flower"
          height={100}
          width={1000}
        />
      </div>
      <div className="mt-5 space-y-2 text-center">
        <h3 className="text-md tracking-tight font-medium text-slate-400">
          aliquam quaerat voluptem
        </h3>
        <StarRating starCount={5} />
        <p>
          <span className="text-black font-bold">$110.00</span>{" "}
          <span className="relative inline-block text-slate-400 ">
            $122.00{" "}
            <span className="absolute left-0 right-0 top-1/2 h-0.25  bg-black transform  -translate-y-1/2"></span>
          </span>
        </p>
      </div>
      {/* hover content */}
      {/* <div className="absolute top-1/2 left-1/2 w-full h-full p-5 box-border bg-white opacity-0 transform -translate-x-1/2 -translate-y-1/2  transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-hover:rotate-0">
      <h2 className="m-0 text-2xl font-bold text-[#333]">Card Title</h2>
      <p className="mt-2 text-sm text-[#777] leading-relaxed">
        This is a hover card description. Everything is built using Tailwind
        CSS.
      </p>
    </div> */}
    </div>
  );
}
