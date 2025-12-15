import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Directions from "@/components/Directions/Directions"
import Results from "@/components/Results/Results"
import StagesWork from "@/components/StagesWork/StagesWork"
import FAQ from "@/components/FAQ/FAQ"
import ConsultationForm from "@/components/ConsultationForm/ConsultationForm"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Directions />
      <Results />
      <StagesWork />
      <FAQ />
      <ConsultationForm />
    </>
  )
}