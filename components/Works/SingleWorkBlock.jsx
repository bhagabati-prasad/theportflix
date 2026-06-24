import Hover3d from "../Hover3d"
import "./works.scss"

export const SingleWorkBlock = ({ index, work }) => {
  return (
    <div
      className={
        index % 2 === 0 ? "single_work_block" : "single_work_block_reverse"
      }
    >
      <Hover3d>
        <div
          data-work-count={index < 10 ? "0" + `${index + 1}` : `${index + 1}`}
          className="img_container"
        >
          {work?.images &&
            Array.isArray(work?.images) &&
            work?.images?.map((image, imgIndx) => (
              <img
                key={imgIndx}
                src={image}
                alt={work?.title}
                style={{ width: `${100 / work?.images?.length}%` }}
                loading="lazy"
              />
            ))}
        </div>
      </Hover3d>
      <div className="work_details">
        <h1 className="work_title">{work.title}</h1>
        <h2 className="work_desc">{work?.description}</h2>
      </div>
    </div>
  )
}
