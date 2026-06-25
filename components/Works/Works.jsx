import Link from "next/link"
import { SingleWorkBlock } from "./SingleWorkBlock"
import "./works.scss"

const Works = () => {
  const listOfWorks = [
    {
      images: [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=4",
        "https://picsum.photos/600/400?random=5",
      ],
      title: "iCust - Banking",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, atque. Quibusdam eaque pariatur voluptate quos atque molestias laborum numquam similique.",
    },
    {
      images: ["https://picsum.photos/600/400?random=2"],
      title: "Project 02",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, atque. Quibusdam eaque pariatur voluptate quos atque molestias laborum numquam similique.",
    },
    {
      images: ["https://picsum.photos/600/400?random=3"],
      title: "Project 03",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, atque. Quibusdam eaque pariatur voluptate quos atque molestias laborum numquam similique.",
    },
  ]

  return (
    <section
      className="works_section container mx-auto pb-(--section-padding)"
      id="works_section"
    >
      <div className="sticky top-16 z-[-1] opacity-80">
        {/* <ThreeDMarqueeDemo /> */}
      </div>

      <div className="work_section_main grid grid-cols-12">
        <div className="col-span-2 max-md:col-span-12">
          <h2 className="section_heading mt-2">Works</h2>
        </div>
        <div className="col-span-10 max-md:col-span-12">
          <h2 className="section_main_desc mb-14 w-2/3 max-md:w-full">
            Production-grade systems engineered for scale, reliability, and
            real-world impact.
          </h2>

          {/* START: Main works block container */}
          <div className="work_section_contents relative flex flex-col items-start justify-start gap-14">
            {/* Single work block */}
            {listOfWorks &&
              Array.isArray(listOfWorks) &&
              listOfWorks?.map((work, index) => (
                <SingleWorkBlock key={index} index={index} work={work} />
              ))}
          </div>
          {/* END: Main works block container */}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="hover:text-[#3face7! border border-white px-8 py-4 transition-all hover:border-[#3face7]"
        >
          View all projects
        </Link>
      </div>
    </section>
  )
}

export default Works
