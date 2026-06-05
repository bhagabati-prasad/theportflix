"use client"
import Link from "next/link"
import PixelTransition from "../PixelTransition"
import SocialMediaDock from "../SocialMediaDock"
import "./about-me.scss"
import { MenuItem } from "../FlowingMenu"
import ScrollVelocity from "../ScrollVelocity"

const AboutMe = () => {
  const flowingMenus = [
    {
      image: "https://picsum.photos/600/400?random=1",
      link: "",
      text: "RCA & Troubleshooting",
      description: "Logical breakdown and Debugging complex technical issues.",
    },
    {
      image: "https://picsum.photos/600/400?random=2",
      link: "",
      text: "System Design & Security",
      description: "Scalable and reliable architecture design.",
    },
    {
      image: "https://picsum.photos/600/400?random=3",
      link: "",
      text: "Performance Optimization",
      description: "Faster, smoother, and efficient applications.",
    },
    {
      image: "https://picsum.photos/600/400?random=4",
      link: "",
      text: "Technology Adoption",
      description: "Integrating modern tools and technologies.",
    },
  ]

  return (
    <>
      <section className="details_container container mx-auto pb-(--section-padding)">
        <div className="grid w-full grid-cols-3 gap-5 max-md:grid-cols-1">
          <div className="iam_image col-span-1">
            <img src="images/IAM.png" alt="" />
            <div className="social_icons_container">
              <SocialMediaDock />
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2 max-sm:gap-8">
              <div className="col-span-2">
                <h2 className="section_heading">About me</h2>
                <h3 className="section_main_desc mb-6 w-3/4 max-md:w-full">
                  {/* Turning ideas into scalable systems */}Artist at heart,
                  engineer by craft. I leave things better than I found them.
                  {/* Think like an <span className="highlight">Artist</span>. Build
                  like an <span className="highlight">Engineer</span>. */}
                </h3>
                <p className="details_summary w-3/4 max-sm:w-full">
                  I blend creativity with structured thinking to build elegant,
                  scalable products. I believe good systems are not just built,
                  they are designed with intent, refined through iteration, and
                  improved continuously.
                </p>
              </div>
              {/* <div className="col-span-1 cursor-pointer">
                <button
                  type="button"
                  className="h-14 w-52 cursor-pointer rounded-full bg-white font-semibold text-black uppercase"
                >
                  Download CV
                </button>
                <button
                  type="button"
                  className="h-14 w-52 cursor-pointer rounded-full bg-white font-semibold text-black uppercase"
                >
                  Download 
                </button>
              </div> */}
              <div className="col-span-1 cursor-pointer">
                <PixelTransition
                  firstContent={
                    <Link
                      href="docs/Bhagabati Prasad - Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      // download={true}
                      className="details_pixel_primary_elem"
                    >
                      <img src="images/resume-orig.png" alt="Resume" />
                    </Link>
                  }
                  secondContent={
                    <div
                      className="pixel_trans_sec"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#29076f",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "2rem",
                          color: "#ffffff",
                          padding: "16px",
                        }}
                      >
                        Download Resume
                      </p>
                    </div>
                  }
                  gridSize={8}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.2}
                  className="custom-pixel-card w-full"
                />
              </div>
            </div>
            <div className="experience_block_section grid grid-cols-4 gap-4 max-md:grid-cols-2">
              <div className="experience_block col-span-2 flex items-center justify-start">
                <h1 className="flex w-full items-center justify-between gap-4">
                  <span>4</span>
                  <div className="flex flex-col">
                    <span>years</span>
                    <span>experience</span>
                  </div>
                </h1>
              </div>
              <div className="col-span-2">
                <ul className="flex h-full flex-col items-start justify-start">
                  {flowingMenus.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className="flex w-full grow items-center border-b border-b-[#00f] text-base uppercase"
                      >
                        <MenuItem
                          {...value}
                          speed={15}
                          textColor="#fff"
                          bgColor="#120F17"
                          marqueeBgColor="#080808"
                          marqueeTextColor="#fff"
                          borderColor="#fff"
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll_velocity_section mb-(--section-padding) bg-[#070707] pt-18">
        <ScrollVelocity
          texts={[
            // <p className="flex items-center gap-8 text-4xl font-extralight text-neutral-200 uppercase">
            //   <span>With 4+ years of experience of</span>
            //   <span className="divider_span h-1 w-1 rounded-full bg-white" />
            //   <span />
            // </p>,
            <p className="flex items-center gap-8 text-4xl font-extralight text-neutral-200 uppercase">
              <span className="text-blue-600">Think</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span className="text-blue-600">Code</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span className="text-blue-600">Ship</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span className="text-blue-600">Scale</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span className="text-blue-600">Repeat</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span />
            </p>,
            <p className="flex items-center gap-8 text-4xl font-extralight text-neutral-200 uppercase">
              <span>Stay</span>
              <span className="font-semibold text-blue-600!">HUNGRY</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span>Stay</span>
              <span className="font-semibold text-blue-600!">FOOLISH</span>
              <span className="divider_span h-1 w-1 rounded-full bg-white" />
              <span />
            </p>,
          ]}
          velocity={70}
          className="custom_scroll_text"
          numCopies={16}
          damping={50}
          stiffness={400}
        />
      </section>
    </>
  )
}

export default AboutMe
