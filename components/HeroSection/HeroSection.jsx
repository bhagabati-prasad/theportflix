import DarkVeil from "@/components/DarkVeil"
import SplitTextWrapper from "@/components/SplitText"
import GradientText from "@/components/GradientText"

import "./hero-section.scss"
import RotatingText from "../RotatingText"

const HeroSection = () => {
  const profile = {
    name: "Prasad B.",
    designation: "Full stack Engineer",
    contact: {
      mobile: "+91 8249194704",
      email: "bhagabatiprasada@gmail.com",
      instagram: "bhagabati_prasad",
      github: "bhagabati-prasad",
      linkedIn: "bhagabati-prasad",
    },
  }

  return (
    <>
      <section className="hero_section relative pb-(--section-padding)">
        <div className="canvas_background">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="hero_container container mx-auto flex items-center">
          <div className="hero_main flex w-full flex-col items-start justify-between">
            <div className="hero_primary_row w-full">
              <h1>
                <SplitTextWrapper>
                  <span className="text-5xl">Hello, I'm</span>
                </SplitTextWrapper>
                <br />
              </h1>
              <h1>
                <SplitTextWrapper>
                  <span className="font-light">Bhagabati &nbsp;Prasad</span>
                </SplitTextWrapper>
              </h1>
              <h2 className="flex gap-4">
                <span className="line" />
                {/* <GradientText
                  colors={["#00f", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="custom-class"
                >
                  Software Developer
                </GradientText> */}
                <RotatingText
                  texts={[
                    "Full-stack Engineer",
                    "Craft Pixel Perfect Experiences",
                    "Design scalable systems",
                  ]}
                  mainClassName=""
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={4000}
                  splitBy="characters"
                  auto
                  loop
                />
              </h2>
            </div>
            <div className="hero_secondary_row flex w-full flex-wrap gap-5">
              <div className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full">
                <span className="hero_label">Phone Number</span>
                <span className="hero_value">{profile?.contact?.mobile}</span>
              </div>
              <div className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full">
                <span className="hero_label">E-mail</span>
                <span className="hero_value">{profile?.contact?.email}</span>
              </div>
              <div className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full">
                <span className="hero_label">Github</span>
                <span className="hero_value">{profile?.contact?.github}</span>
              </div>
              <div className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full">
                <span className="hero_label">Instagram</span>
                <span className="hero_value">
                  {profile?.contact?.instagram}
                </span>
              </div>
              <div className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full">
                <span className="hero_label">LinkedIn</span>
                <span className="hero_value">
                  {profile?.contact?.linkedIn}.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
