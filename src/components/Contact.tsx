import { Instagram, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Footer from "./Footer";

function Contact() {
  const labelStyle = "block text-sm font-semibold mb-1";
  const inputStyle =
    "input bg-neutral w-full max-w-xs focus:outline-0 focus:border-primary mb-4";
  const [sendinMessage, setSendingMessage] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      for (let i = 0; i < form.current.length; i++) {
        const element = form.current[i] as
          | HTMLInputElement
          | HTMLTextAreaElement;

        if (
          (element.tagName === "INPUT" || element.tagName === "TEXTAREA") &&
          element.value.trim() === ""
        ) {
          return alert("Please fill all the fields");
        }
      }

      setSendingMessage(true);
      emailjs
        .sendForm(
          "service_owq4c0h",
          "template_foo7zmg",
          form.current,
          "P9CyFEIJfvinHMnWa"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            if (form.current) {
              form.current.reset();
            }
            setSendingMessage(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSendingMessage(false);
          }
        );
    }
  };

  return (
    <div id="contact" className="my-20  h-screen relative">
      <div className="w-[748px] mx-auto">
        <h1 className="text-7xl font-bold text-white">Let's work</h1>
        <h1 className="text-7xl font-bold text-primary mb-10">Together!</h1>
        <p>Connect with Me!</p>
        <div className="grid md:grid-cols-2 mt-5 gap-5">
          <div className="col-span-1">
            <p>
              Feel free to reach out if you have any questions, ideas, or
              projects in mind.{" "}
            </p>
            <p className="mb-5">
              I’d love to hear from you and help bring your vision to life!
            </p>
            <div className="flex items-center gap-3">
              <Mail
                size={40}
                strokeWidth={2.15}
                className="bg-primary text-white p-2 rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-white">Email</h1>
                <a href="mailto:mosquerabustamante88@gmail.com">
                  mosquerabustamante88@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <Instagram
                size={40}
                strokeWidth={2.15}
                className="bg-primary text-white p-2 rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-white">Instagram</h1>
                <a href="https://www.instagram.com/codecraft_x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  codecraft_x
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label className={labelStyle}>Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>Email</label>
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Your email"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>Message</label>
                <textarea
                  className="textarea bg-neutral w-full max-w-xs focus:outline-0 focus:border-primary text-base mb-4"
                  rows={5}
                  name="message"
                  placeholder="Your message..."
                ></textarea>
              </div>
              {sendinMessage ? (
                <button
                  className="flex items-center gap-2 bg-primary  text-white font-semibold px-4 py-2 rounded-lg"
                  disabled
                >
                  <span className="loading loading-dots loading-md"></span>
                  <p>Sending Message...</p>
                </button>
              ) : (
                <button
                  className="bg-primary  text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#7251F9] transition duration-300 ease-in-out"
                  type="submit"
                >
                  Send Message
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
