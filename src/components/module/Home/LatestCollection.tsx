import Image from "next/image";
import latest from "../../../assets/latest.webp";
import Container from "@/components/Lui/Container";
export default function LatestCollection() {
  return (
    <Container>
      <div className="grid  mx-auto  mt-20 grid-cols-1 lg:grid-cols-2  gap-10 ">
        {/* image section */}
        <section className="flex order-2  justify-center items-center">
          {/* parent */}
          <div className="relative">
            {/* animation */}
            <div className="lg:h-96 border lg:w-80 h-64 w-56 relative hover:translate-x-6 hover:-translate-y-4 transition-all duration-500 z-20">
              <Image
                src={latest}
                alt="about"
                height={250}
                width={150}
                className="lg:h-96 border lg:w-80 h-64 w-56"
              />
            </div>
            <div className="border-4 border-t-amber-200 border-r-amber-200 border-b-green-300 border-l-green-300   absolute bg-auto -left-12 top-12 z-0 lg:h-96 lg:w-56 h-64 w-36"></div>
          </div>
        </section>

        {/* description section */}
        <section className="flex order-1  flex-col justify-center  items-center lg:items-end text-center lg:text-end ">
          <header>
            <h1 className="text-5xl tracking-wide font-light ">
              Gold To Interest
            </h1>
            <p className="uppercase tracking-wider text-slate-300 mt-2 font-extralight text-xl">
              new collection
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
