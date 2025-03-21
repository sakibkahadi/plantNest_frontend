import Image, { StaticImageData } from "next/image";

type THeading = {
  heading: string;
  src: string | StaticImageData;
};

export default function Heading({ heading, src }: THeading) {
  return (
    <header className="flex justify-center flex-col items-center text-center">
      <div className="   relative pt-10 justify-center flex r">
        <Image
          className="absolute top-1 "
          src={src}
          alt="logo"
          height={50}
          width={50}
        />
        <h1 className="text-5xl  font-light  tracking-wide uppercase">
          {heading}
        </h1>
      </div>
      <div className="border-t-2  mt-10  w-16  "></div>
    </header>
  );
}
