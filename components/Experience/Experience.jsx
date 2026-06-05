import "./experience.scss"
import EmblaCarousel from "../Carousel/EmblaCarousel"

const Experience = () => {
  const OPTIONS = {}
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const experience = [
    {
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
    },
  ]

  return (
    <section className="experience_section container mx-auto pb-(--section-padding)">
      <div className="grid grid-cols-12">
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
      </div>

      <div className="experience_section_main mt-8">
        <EmblaCarousel slides={experience} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Experience
