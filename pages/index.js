import Redirect from "@/components/Redirect";
import Slider from "@/components/Slider";
import HomeImage from "@/components/Hero"
import { SliderData } from "@/components/SliderData";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HomeImage heading='Fullvision Tracking' message='Gestão de operação logística e segurança da frota.'/>
      <div className="flex flex-wrap mb-20 justify-center items-center">
        <div className="lg:basis-1/4 lg:mr-10">
          <Redirect />
        </div>
        <div className="lg:basis-1/2 py-16 px-8">
          <Slider slides={SliderData} />
        </div>
      </div>
        <Footer />
    </>
  )
}
