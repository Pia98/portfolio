import TitleHeader from "../components/TitleHeader";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// TODO: user feedback -> email successfully send and sth like I will reach out as soon as possible
// or something went wrong please try another time or reach out to email

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    title: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email with EmailJS:", error);
    } finally {
      console.log("Successfully send email");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center flex-col section-padding">
      <TitleHeader
        title="Please don't hesitate to reach out!"
        sub="Contact Me"
      />
      <div className="mt-10 flex-center card-border rounded-xl p-10 xl:w-[50%] w-full">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="title">E-Mail Subject</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Your subject"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your issue"
              rows="5"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text">{loading ? "Sending..." : "Send"}</p>
              <div className="arrow-wrapper">
                {/* TODO: add send arrow */}
                <img src="/general/arrow-down.svg" alt="arrow" />
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
