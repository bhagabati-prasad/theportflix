"use client"
import { useState } from "react"
import "./contact.scss"
// import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"
import { sendEmail } from "@/actions/sendmail"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Agreement02Icon,
  AtIcon,
  Briefcase09Icon,
  CallIcon,
  Github01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Location05Icon,
  Mail01Icon,
  Message01Icon,
  SentIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"

const Contact = () => {
  const [status, setStatus] = useState(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })

  const fieldIcons = {
    name: UserIcon,
    email: Mail01Icon,
    mobile: CallIcon,
    subject: Briefcase09Icon,
    message: Message01Icon,
  }

  const sanitizeValue = (value) => {
    if (value == null) {
      return ""
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
  }

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: sanitizeValue(e.target.value) })
  }

  async function handleFormSubmit() {
    setStatus("Sending...")

    setTimeout(() => {
      setStatus("Email sent successfully!")
    }, 2000)
    // const result = await sendEmail(form)
    // if (result.success) {
    //   setStatus("Email sent successfully!")
    // } else {
    //   setStatus("Failed to send email.")
    // }
    setTimeout(() => {
      setStatus(null)
    }, 3000)
  }

  return (
    <>
      <>
        <section className="contact_me_section">
          <div className="container mx-auto py-(--section-padding)">
            <div className="grid grid-cols-12">
              <div className="col-span-2 max-md:col-span-12">
                <h2 className="section_heading mt-2">get in touch</h2>
              </div>
              <div className="col-span-10 max-md:col-span-12">
                <h2 className="section_main_desc mb-8 w-3/4 max-md:w-full">
                  <small>
                    Whether to collaborate, share ideas, or just have a
                    meaningful conversation. If this resonates with you, feel
                    free to reach out.
                  </small>
                  <br />
                </h2>
                <div className="container mx-auto grid grid-cols-12 gap-8">
                  <div className="contact_left_container col-span-4 max-lg:col-span-12">
                    <div className="contact_info_box">
                      <div className="contact_info_box_icon">
                        <HugeiconsIcon icon={AtIcon} />
                      </div>
                      <div>
                        <p className="label">Email</p>
                        <p className="value">bhagabatiprasada@gmail.com</p>
                      </div>
                    </div>
                    <div className="contact_info_box">
                      <div className="contact_info_box_icon">
                        <HugeiconsIcon icon={Location05Icon} />
                      </div>
                      <div>
                        <p className="label">Address</p>
                        <p className="value">
                          Whitefield, Bengaluru, India, 560067
                        </p>
                      </div>
                    </div>
                    <div className="contact_info_box">
                      <div className="contact_info_box_icon">
                        <HugeiconsIcon icon={Agreement02Icon} />
                      </div>
                      <div>
                        <p className="label">Availability</p>
                        <p className="value">
                          Available for full time opportunities
                        </p>
                      </div>
                    </div>
                    <div className="contact_info_box_grouped">
                      <p className="label">Connect Networks</p>
                      <div className="flex w-full flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <div className="contact_info_box_icon">
                            <HugeiconsIcon icon={Github01Icon} />
                          </div>
                          <div>
                            <p className="value capitalize!">Github</p>
                            <p className="label lowercase!">
                              github.com/bhagabati-prasad
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="contact_info_box_icon">
                            <HugeiconsIcon icon={Linkedin01Icon} />
                          </div>
                          <div>
                            <p className="value capitalize!">LinkedIn</p>
                            <p className="label lowercase!">
                              linkedin.com/in/bhagabati-prasad
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="contact_info_box_icon">
                            <HugeiconsIcon icon={InstagramIcon} />
                          </div>
                          <div>
                            <p className="value capitalize!">Instagram</p>
                            <p className="label lowercase!">
                              instagram.com/i.bhagabati_prasad
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact_info_box">
                      <div className="contact_info_box_blink">
                        <div className="dot"></div>
                      </div>
                      <div>
                        <p className="value capitalize!">
                          Available for opportunities
                        </p>
                        <p className="label lowercase!">
                          Typical response within 24h
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-8 max-lg:col-span-12">
                    <div className="contact_info_box contact_form_wrapper">
                      {Object.keys(form).map((field) => (
                        <div
                          key={field}
                          className={`input_box flex flex-col gap-2 ${field}`}
                        >
                          <label
                            htmlFor={field}
                            className="flex items-center gap-2"
                          >
                            <HugeiconsIcon
                              icon={fieldIcons[field]}
                              width={16}
                            />
                            {field}
                          </label>
                          {field === "message" ? (
                            <textarea
                              name={field}
                              id={field}
                              className="max-h-34 min-h-28"
                              value={form?.[field]}
                              onChange={handleInputChange}
                              disabled={status}
                            ></textarea>
                          ) : (
                            <input
                              type="text"
                              id={field}
                              name={field}
                              className="h-12"
                              value={form?.[field]}
                              onChange={handleInputChange}
                              disabled={status}
                            />
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#3face7] bg-[#3face7] p-2 font-medium text-black uppercase transition-all hover:bg-transparent hover:text-[#3face7] disabled:cursor-default disabled:bg-neutral-950 disabled:text-white disabled:capitalize"
                        onClick={handleFormSubmit}
                        disabled={!!status}
                      >
                        <HugeiconsIcon icon={SentIcon} height={18} />
                        {status ? status : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Contact
