"use client"
import { useState } from "react"
import "./contact.scss"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"
// import { sendEmail } from "@/actions/sendmail"

const Contact = () => {
  const [status, setStatus] = useState(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })

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
      <BackgroundBeamsWithCollision>
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
                <div className="grid grid-cols-6 gap-4 max-md:grid-cols-3">
                  <div className="contact_left_container col-span-3"></div>
                  <div className="col-span-3 flex flex-col gap-4 p-10">
                    {Object.keys(form).map((field) => (
                      <div key={field} className="w-full">
                        <div className="input_box flex flex-col gap-2">
                          <label
                            htmlFor={field}
                            className="ml-2 text-sm uppercase"
                          >
                            {field}
                          </label>
                          {field === "message" ? (
                            <textarea
                              name={field}
                              id={field}
                              className="max-h-34 min-h-28 rounded-sm border border-blue-950 px-2"
                              value={form?.[field]}
                              onChange={handleInputChange}
                              disabled={status}
                            ></textarea>
                          ) : (
                            <input
                              type="text"
                              id={field}
                              name={field}
                              className="h-12 rounded-sm border border-blue-950 px-2"
                              value={form?.[field]}
                              onChange={handleInputChange}
                              disabled={status}
                            />
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="col-span-4">
                      <button
                        type="button"
                        className="h-12 w-full cursor-pointer border border-blue-700 bg-blue-700 p-2 font-semibold text-black uppercase transition-all hover:bg-transparent hover:text-blue-700 disabled:cursor-default disabled:bg-neutral-950 disabled:text-white disabled:capitalize"
                        onClick={handleFormSubmit}
                        disabled={!!status}
                      >
                        {status ? status : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  )
}

export default Contact
