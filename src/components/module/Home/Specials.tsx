import Heading from "@/components/Lui/Heading";
import logo from "../../../assets/logo-removebg-preview.png";
import Container from "@/components/Lui/Container";

import Card from "@/components/Lui/Card";
export default function Special() {
  return (
    <Container>
      <Heading src={logo} heading="specials" />

      {/* medium device  */}
      {/* cards */}
      <Card />

      <div className="lg:hidden">medium</div>
      {/* large device */}

      <div className="hidden lg:block">large</div>
    </Container>
  );
}
