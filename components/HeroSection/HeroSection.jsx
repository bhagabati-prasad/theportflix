import DarkVeil from "@/components/DarkVeil"
import SplitTextWrapper from "@/components/SplitText"
import GradientText from "@/components/GradientText"

import "./hero-section.scss"
import RotatingText from "../RotatingText"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AtIcon,
  Call02Icon,
  Github01Icon,
  InstagramIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

const HeroSection = () => {
  const profile = {
    name: "Prasad B.",
    designation: "Full stack Engineer",
    contact: [
      { id: 1, icon: Call02Icon, label: "mobile", value: "+91 8249194704" },
      {
        id: 2,
        icon: AtIcon,
        label: "email",
        value: "bhagabatiprasada@gmail.com",
        link: "mailto:bhagabatiprasada@gmail.com",
      },
      {
        id: 3,
        icon: InstagramIcon,
        label: "instagram",
        value: "bhagabati_prasad",
        link: "https://www.instagram.com/i.bhagabati_prasad",
      },
      {
        id: 4,
        icon: Github01Icon,
        label: "github",
        value: "bhagabati-prasad",
        link: "https://github.com/bhagabati-prasad",
      },
      {
        id: 5,
        icon: Linkedin01Icon,
        label: "linkedIn",
        value: "bhagabati-prasad",
        link: "https://www.linkedin.com/in/bhagabati-prasad",
      },
    ],
  }

  return (
    <>
      <section
        className="hero_section relative pb-(--section-padding)"
        id="hero_section"
      >
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
              {profile?.contact &&
                profile?.contact?.map((item) => (
                  <Link
                    key={item?.id}
                    href={`${item?.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_box flex min-w-1/6 flex-col max-md:w-2/6 max-sm:w-full"
                  >
                    <span className="hero_label">
                      <span className="label_icon">
                        <HugeiconsIcon icon={item?.icon} width={16} />
                      </span>
                      <span>{item?.label}</span>
                    </span>
                    <span className="hero_value">{item?.value}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
