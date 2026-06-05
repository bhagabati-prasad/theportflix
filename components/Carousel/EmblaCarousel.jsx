"use client"
import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Thumb } from "./EmblaCarouselThumbsButton"
import "./carousel.scss"
import FlowingMenu, { MenuItem } from "@/components/FlowingMenu"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.goTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedSnap())
    emblaThumbsApi.goTo(emblaMainApi.selectedSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on("select", onSelect).on("reinit", onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <span className="slide_count">{"0" + (index + 1)}</span>
              <div className="flex flex-col gap-1">
                <h1 className="company_name mb-4 text-5xl font-semibold capitalize">
                  {slide?.companyName}
                </h1>
                <h2 className="mb-2 text-2xl capitalize">{slide?.role}</h2>
                <div className="mb-4 flex items-center gap-4">
                  <h2 className="text-base capitalize">
                    {slide?.from} - {slide?.to}
                  </h2>
                  <span>|</span>
                  <h2 className="text-base capitalize">{slide?.city}</h2>
                </div>
              </div>
              <ul className="slide_desc_container mt-4">
                {slide?.description?.map((item, indx) => (
                  <li key={indx} className="experience_single_description">
                    <span className="desc">{item?.desc}</span>
                    <div className="flowing_menu relative h-full">
                      <MenuItem
                        {...item}
                        speed={15}
                        textColor="#fff"
                        bgColor="#120F17"
                        marqueeBgColor="#fff"
                        marqueeTextColor="#120F17"
                        borderColor="#fff"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div style={{ height: "600px", position: "relative" }}>
                {demoItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    {...item}
                    speed={15}
                    textColor="#fff"
                    bgColor="#120F17"
                    marqueeBgColor="#fff"
                    marqueeTextColor="#120F17"
                    borderColor="#fff"
                  />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                value={`${slide?.from} - ${slide?.to}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
