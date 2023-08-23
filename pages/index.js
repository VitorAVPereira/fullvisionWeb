import Hero from "@/components/Hero";
import Redirect from "@/components/Redirect";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Home() {
  return (
    <>
      <Hero heading='Fullvision Tracking' message='Gestão de operação logística e segurança da frota.'/>
      <div className="md:justify-center sm:justify-center">  
        <Slider slides={SliderData} />
        <Redirect />
      </div>
    </>
  )
}
