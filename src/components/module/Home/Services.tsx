import Container from "@/components/Lui/Container";
import icon1 from "../../../assets/services//service-icon4.png";
import icon2 from "../../../assets/services//service-icon3.png";
import icon3 from "../../../assets/services//service-icon2.png";
import icon4 from "../../../assets/services//service-icon1.png";
import logo from "../../../assets/logo-removebg-preview.png";
import Heading from "@/components/Lui/Heading";
import imageUrls from "@/lib/images";
import Image from "next/image";
import ServicesFragment from "@/components/Lui/ServicesFragment";
import serviceImage from "../../../assets/services/service-img.jpg";
export default function Services() {
  return (
    <Container>
      <Heading heading="Best services" src={logo} />
      <div className="mb-20 mt-10 ">
        {/* 1st section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 place-items-center ">
          {/* start section */}
          <section className="grid  gap-20">
            <ServicesFragment
              color="bg-emerald-500"
              heading="free shipping"
              subHeading="It is a long established fact be that a reader will be!"
              src={icon1}
              textEnd="text-end"
            />
            <ServicesFragment
              color="bg-yellow-500"
              heading="free shipping"
              subHeading="It is a long established fact be that a reader will be!"
              src={icon2}
              textEnd="text-end"
            />
          </section>
          {/* middle section  */}

          <section className="md:order-3 lg:order-2 order-2 md:col-span-2 lg:col-span-1">
            <Image
              src={serviceImage}
              alt="service"
              height={330}
              width={400}
              className="border"
            />
          </section>

          {/* last section  */}
          <section className="grid md:order-2 lg:order-3 order-3  gap-20">
            <ServicesFragment
              color="bg-emerald-500"
              rowReverse="flex flex-row-reverse"
              heading="free shipping"
              subHeading="It is a long established fact be that a reader will be!"
              src={icon3}
            />
            <ServicesFragment
              color="bg-yellow-500"
              heading="free shipping"
              rowReverse="flex flex-row-reverse"
              subHeading="It is a long established fact be that a reader will be!"
              src={icon4}
            />
          </section>
        </div>

        <div className="flex flex-wrap gap-10 mt-48">
          {imageUrls?.map((images, index) => (
            <div key={index}>
              <Image src={images} height={100} width={100} alt="ims" />{" "}
              <p>{index}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
