"use client"
import { useEffect } from "react"
import DotGrid from "../DotGrid"
import "./skills.scss"
import RotatingText from "../RotatingText"

const Skills = () => {
  const skills = {
    frontend: [
      {
        name: "React.js",
        exp: "4",
      },
      {
        name: "Angular",
        exp: "4",
      },
      {
        name: "TypeScript",
        exp: "4",
      },
      {
        name: "JavaScript",
        exp: "4",
      },
      {
        name: "TailwindCSS",
        exp: "4",
      },
    ],
    backend: [
      {
        name: "Node.js",
        exp: "4",
      },
      {
        name: "Express.js",
        exp: "4",
      },
      {
        name: "Flask",
        exp: "4",
      },
      {
        name: "FastAPI",
        exp: "4",
      },
      {
        name: "Redis",
        exp: "4",
      },
      {
        name: "RabbitMQ",
        exp: "4",
      },
      {
        name: "GraphQL",
        exp: "4",
      },
    ],
    database: [
      {
        name: "MySQL",
        exp: "4",
      },
      {
        name: "PostgreSQL",
        exp: "4",
      },
      {
        name: "MongoDB",
        exp: "4",
      },
    ],
    cloud: [
      {
        name: "Docker",
        exp: "4",
      },
      {
        name: "ECS",
        exp: "4",
      },
      {
        name: "EC2",
        exp: "4",
      },
    ],
  }

  useEffect(() => {
    const blob = document.getElementById("blob")

    const handlePointerMove = (event) => {
      /*
      DESC:
        - clientX, clientY = location of cursor based on display
        - pageX, pageY = location of cursor based on page scroll amount
      */

      const { clientX: leftPos, clientY: topPos } = event
      // const { pageX: leftPos, pageY: topPos } = event;

      blob &&
        blob.animate(
          {
            left: `${leftPos}px`,
            top: `${topPos}px`,
          },
          { duration: 3000, fill: "forwards" }
        )
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <section className="skills_container container mx-auto pb-(--section-padding)">
      <div className="grid grid-cols-12">
        <div className="col-span-2 max-md:col-span-12">
          <h2 className="section_heading mt-2">Skills</h2>
        </div>
        <div className="col-span-10 max-md:col-span-12">
          <h2 className="section_main_desc mb-8 w-2/3 max-md:w-full">
            Designing scalable architectures and solving complex engineering
            problems with precision.
            {/* <RotatingText
              texts={[
                "Full-stack Engineer",
                "Software Engineer",
                "Passionate Designer",
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
            /> */}
          </h2>
          <div className="skill_stack_row relative w-full py-4">
            <div id="blob"></div>
            <div id="blur"></div>

            <div className="absolute top-0 left-0 h-full w-full">
              <DotGrid
                dotSize={2}
                gap={11}
                baseColor="#1f1a26"
                activeColor="#ffffff"
                proximity={120}
                shockRadius={250}
                shockStrength={1}
                resistance={450}
                returnDuration={1.2}
              />
            </div>
            {Object.entries(skills).map(([domain, skillsets], index) => (
              <div key={index} className="grid grid-cols-12">
                <div className="col-span-1 flex -rotate-90 items-center justify-center">
                  <h4 className="skill_domain_label h-10 text-sm uppercase">
                    {domain}
                  </h4>
                </div>
                <div className="col-span-11 flex flex-wrap items-center justify-start">
                  {skillsets?.map((skill, skillIndex) => (
                    <div key={skillIndex} className="honeycomb_box">
                      <span className="honeycomb_box_content">
                        {skill?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
