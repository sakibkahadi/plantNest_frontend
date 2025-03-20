import Image from "next/image";
import aboutImage from "../../../assets/about1-removebg-preview.png";
import Container from "@/components/Lui/Container";
export default function AboutUs() {
  return (
    <Container>
      <div className="grid  mx-auto p-2 mt-20 grid-cols-1 lg:grid-cols-2  gap-10 ">
        {/* image section */}
        <section className="flex order-2 lg:order-1 justify-center items-center">
          {/* parent */}
          <div className="relative">
            {/* animation */}
            <div className="bg-slate-300 lg:h-96 lg:w-80 h-64 w-56 relative hover:translate-x-6 hover:translate-y-4 transition-all duration-500 z-20">
              <Image
                src={aboutImage}
                alt="about"
                height={300}
                width={150}
                className="w-52 lg:w-80 absolute  -right-11 z-20 -bottom-10 "
              />
            </div>
            <div className="border-4 border-slate-400   absolute bg-auto -right-20 top-10 z-0 lg:h-96 lg:w-80 h-64 w-56"></div>
          </div>
        </section>

        {/* description section */}
        <section className="flex order-1 lg:order-2 flex-col justify-center items-center lg:items-start text-center lg:text-start ">
          <header>
            <h1 className="text-5xl font-light ">About Us</h1>
            <p className="uppercase tracking-wider text-slate-300 mt-2 font-extralight text-xl">
              ours plant house
            </p>
          </header>
          <article className="mt-6 mb-4">
            <p className="text-md text-slate-400">
              Anventore veritatis et quasi architecto beatae dicta sun
              explicabo. Nemo enim. dduis abs no matter what
            </p>
          </article>
          <footer>
            <button className="bg-green-800 text-sm px-5 py-2 rounded-full font-medium text-[#ffffffe1]">
              Shop Now
            </button>
          </footer>
        </section>
      </div>
    </Container>
  );
}
