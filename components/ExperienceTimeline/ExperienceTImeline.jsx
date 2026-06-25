import "./experience-timeline.scss"
import { Timeline } from "@/components/ui/timeline"
import { MenuItem } from "../FlowingMenu"

function ExperienceTimeline() {
  const slide = {
    id: 1,
    from: 2022,
    to: 2024,
    companyName: "Rumango",
    city: "Bangalore",
    role: "Senior Software Engineer",

    description: [
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Leading the development of scalable web applications using React, Angular, Node.js, and Python across multiple enterprise systems. ",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Designed and implemented secure authentication systems, including multi-factor authentication and biometric verification. ",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Architected and optimized backend services for high performance using caching, concurrency, and efficient data handling using . ",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Mentored junior developers, conducted code reviews, and enforced best practices for clean and maintainable code. ",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Collaborated with cross-functional teams to deliver end-to-end solutions from requirement analysis to deployment. ",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        link: "",
        text: "Dummy text",
        desc: "Improved system performance, reliability, and user experience across critical business applications. ",
      },
    ],
  }

  const data = [
    {
      title: "2022 - 2026",
      content: (
        <div className="timeline_block" key={0}>
          <h1 className="timeline_title mb-2 text-xl">
            <span className="text-5xl font-semibold">{slide?.companyName}</span>
            &nbsp;,&nbsp;
            <span className="italic">{slide?.city}</span>
          </h1>
          <h2 className="timeline_sub_title mb-4 text-2xl">{slide?.role}</h2>
          <p className="mb-8">Apr 2022 - Jun 2026</p>
          <ul>
            {slide?.description?.map((item, index) => (
              <li key={index}>
                <p className="desc">{item?.desc}</p>
                {/* <div className="flowing_menu relative h-full">
                  <MenuItem
                    {...item}
                    speed={15}
                    textColor="#fff"
                    bgColor="#120F17"
                    marqueeBgColor="#fff"
                    marqueeTextColor="#120F17"
                    borderColor="#fff"
                  />
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div key={2}>
          <h1 className="timeline_title mb-2 text-xl">
            <span className="text-5xl font-semibold">Freelancing</span>
          </h1>
          <h2 className="timeline_sub_title mb-4 text-2xl">
            Freelance Web Developer
          </h2>
          <p className="mb-8">Oct 2020 - Mar 2022</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div key={3}>
          <h1 className="timeline_title mb-2 text-xl">
            <span className="text-5xl font-semibold">
              Master of Computer Application (MCA)
            </span>
          </h1>
          <h2 className="timeline_sub_title mb-4 text-2xl">
            <span>Odisha University of Technology and Research</span>
            &nbsp;,&nbsp;
            <span className="italic">Bhubaneswar</span>
          </h2>
          <p className="mb-8">Aug 2019 - Mar 2022</p>
        </div>
      ),
    },
  ]
  return (
    <section className="pt-(--section-padding)" id="experience_section">
      <div className="relative container mx-auto w-full overflow-clip">
        {/* <div className="grid grid-cols-12">
          <div className="col-span-2">
            <h2 className="section_heading mt-2">
              Work <br /> Experience
            </h2>
          </div>
          <div className="col-span-10">
            <h2 className="section_main_desc mb-8 w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              amet.
            </h2>
          </div>
        </div> */}
        <Timeline data={data} />
      </div>
    </section>
  )
}

export default ExperienceTimeline
