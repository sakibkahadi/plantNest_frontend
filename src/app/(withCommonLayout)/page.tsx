import AboutUs from "@/components/module/Home/AboutUs";
import LatestCollection from "@/components/module/Home/LatestCollection";
import Services from "@/components/module/Home/Services";

export default function Layout() {
  return (
    <div className="space-y-20">
      <AboutUs />
      <LatestCollection />
      <Services />
    </div>
  );
}
