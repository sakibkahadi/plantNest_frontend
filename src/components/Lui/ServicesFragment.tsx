import Image, { StaticImageData } from "next/image";

type TServicesFragment = {
  heading: string;
  subHeading: string;
  src: string | StaticImageData;
  rowReverse?: string;
  textEnd?: string;
  color: string;
};

export default function ServicesFragment({
  heading,
  subHeading,
  src,
  rowReverse,
  textEnd,
  color,
}: TServicesFragment) {
  return (
    <section className={`flex ${rowReverse}  items-center gap-3  `}>
      <div
        className={`flex flex-col ${textEnd}
  `}
      >
        <h1 className=" uppercase  tracking-tight text-lg   ">{heading}</h1>
        <p className="tracking-tighter font-light text-slate-300 text-sm  ">
          {subHeading}
        </p>
      </div>
      <div className={`border-none ${color}  rounded-full  p-1 `}>
        <div className="border size-16  rounded-full p-2">
          <Image
            className="size-12"
            alt="icon"
            src={src}
            height={95}
            width={100}
          />
        </div>
      </div>
    </section>
  );
}
