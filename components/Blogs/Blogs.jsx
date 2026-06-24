import { HugeiconsIcon } from "@hugeicons/react"
import "./blogs.scss"
import {
  ArrowUpRight01Icon,
  Clock4Icon,
  Tag01Icon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: "blog-bg1.png",
      title: "Building High-Performance FastAPI Services at Scale",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dolorem adipisci aperiam incidunt error sapiente assumenda.",
    },
    {
      id: 2,
      image: "blog-bg2.png",
      title: "Building High-Performance FastAPI Services at Scale",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dolorem adipisci aperiam incidunt error sapiente assumenda.",
    },
    {
      id: 3,
      image: "blog-bg3.png",
      title: "Building High-Performance FastAPI Services at Scale",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dolorem adipisci aperiam incidunt error sapiente assumenda.",
    },
  ]

  return (
    <>
      <section className="blogs_section">
        <div className="container mx-auto py-(--section-padding)">
          <div className="grid grid-cols-12">
            <div className="col-span-2 max-md:col-span-12">
              <h2 className="section_heading mt-2">Blog</h2>
            </div>
            <div className="col-span-10 max-md:col-span-12">
              <h2 className="section_main_desc mb-8 w-3/4 max-md:w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                veritatis dolore ab officiis at minima maiores maxime id
                voluptas veniam!
              </h2>
              <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {blogs &&
                  Array.isArray(blogs) &&
                  blogs?.map((blog) => (
                    <div
                      key={blog?.id}
                      className="blog_card col-span-1 overflow-hidden rounded-xl"
                    >
                      <div className="img_wraper">
                        <div className="blog_category absolute top-4 left-4 rounded-lg px-2 py-1 text-sm">
                          Architecture
                        </div>
                        <img
                          src={`images/${blog?.image}`}
                          alt="main image"
                          loading="lazy"
                        />
                      </div>
                      <div className="blog_content flex flex-col gap-3 px-5 py-4">
                        <p className="blog_timestamp flex items-center gap-2 text-sm opacity-50">
                          <HugeiconsIcon icon={Clock4Icon} height={12} />
                          <span>8 min ago</span>
                          &nbsp;
                          <span>Dec 12, 2024</span>
                        </p>
                        <h2 className="text-xl font-semibold">{blog?.title}</h2>
                        <h4 className="mb-8 text-base text-neutral-400">
                          {blog?.shortDescription}
                        </h4>
                        <div className="blog_tags flex w-full flex-wrap items-center gap-2">
                          <div className="flex gap-1 rounded-lg bg-neutral-800 py-1 pr-2 pl-1 text-xs">
                            <HugeiconsIcon icon={Tag01Icon} height={14} />
                            <span>Flask</span>
                          </div>
                          <div className="flex gap-1 rounded-lg bg-neutral-800 py-1 pr-2 pl-1 text-xs">
                            <HugeiconsIcon icon={Tag01Icon} height={14} />
                            <span>Flask</span>
                          </div>
                        </div>
                        <Link href={"/"} className="read_article">
                          Read article &nbsp;
                          <HugeiconsIcon icon={ArrowUpRight01Icon} width={18} />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
