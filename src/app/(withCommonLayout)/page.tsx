import AboutUs from "@/components/module/Home/AboutUs";
import Banner from "@/components/module/Home/Banner";
import LatestCollection from "@/components/module/Home/LatestCollection";
import Services from "@/components/module/Home/Services";

export default function Layout() {
  return (
    <div className="space-y-20 mb-20">
      {/* <AboutUs />
      <LatestCollection />
     */}
      {/* <Banner /> */} <Services />
    </div>
  );
}
