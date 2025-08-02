import { Tree, About, Header, Home, Featured, Contact, Footer } from "@/components";
import ExperienceTimeline from "@/components/Timeline";
import { experiences, roles } from "@/data";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      {/* <Featured/> */}
      <ExperienceTimeline experiences={experiences} />
      <Contact />
      <Footer />
    </>
  );
}
