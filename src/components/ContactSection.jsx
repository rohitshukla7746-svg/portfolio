import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ngm2c3l";
const EMAILJS_TEMPLATE_ID = "template_kdx92gp";
const EMAILJS_PUBLIC_KEY = "W5bLw34Wldjvp8mto";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message sent! ✅",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Failed to send ❌",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(0,255,150,0.2)",
    background: "rgba(0,20,12,0.6)",
    color: "#c8efe0",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(0,255,150,0.5)";
    e.target.style.boxShadow = "0 0 16px rgba(0,255,150,0.12)";
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(0,255,150,0.2)";
    e.target.style.boxShadow = "none";
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rohit-shukla-01b23a2a8/", color: "rgba(0,200,255,0.7)", glow: "rgba(0,200,255,0.3)" },
    
  ];

  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "rohitshukla7746@gmail.com",
      href: "mailto:rohitshukla7746@gmail.com",
      color: "#00ffaa",
      bg: "rgba(0,255,150,0.1)",
      border: "rgba(0,255,150,0.2)",
      glow: "rgba(0,255,150,0.15)",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+917798790463",
      href: "tel:+917798790463",
      color: "#00e8ff",
      bg: "rgba(0,200,255,0.1)",
      border: "rgba(0,200,255,0.2)",
      glow: "rgba(0,200,255,0.15)",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "India, Maharashtra",
      href: null,
      color: "#a855f7",
      bg: "rgba(160,100,255,0.1)",
      border: "rgba(160,100,255,0.2)",
      glow: "rgba(160,100,255,0.15)",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 relative"
      style={{ background: "rgba(0,10,6,0.6)" }}
    >
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#d0f0e8" }}>
          Get In{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00ffaa, #00e8ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(0,255,150,0.4))",
            }}
          >
            Touch
          </span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "rgba(180,230,210,0.65)" }}>
          I’m currently open to Full Stack Developer opportunities.
If you’d like to discuss a role or project, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold" style={{ color: "#c8efe0" }}>
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: item.bg.replace("0.1", "0.04"),
                    border: `1px solid ${item.border}`,
                    boxShadow: `0 0 16px ${item.glow.replace("0.15", "0.05")}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = item.bg;
                    e.currentTarget.style.boxShadow = `0 0 24px ${item.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = item.bg.replace("0.1", "0.04");
                    e.currentTarget.style.boxShadow = `0 0 16px ${item.glow.replace("0.15", "0.05")}`;
                  }}
                >
                  <div
                    className="p-3 rounded-full shrink-0"
                    style={{
                      background: item.bg,
                      border: `1px solid ${item.border}`,
                      color: item.color,
                      boxShadow: `0 0 10px ${item.glow}`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-0.5" style={{ color: "#c8efe0" }}>
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ color: "rgba(180,230,210,0.6)", fontSize: "0.9rem" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(180,230,210,0.6)")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "rgba(180,230,210,0.6)", fontSize: "0.9rem" }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="font-medium mb-4" style={{ color: "#c8efe0" }}>
                Connect With Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(180,230,210,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.boxShadow = `0 0 16px ${s.glow}`;
                      e.currentTarget.style.background = s.glow.replace("0.3", "0.08");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(180,230,210,0.5)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className="p-8 rounded-xl"
            style={{
              background: "rgba(0,20,12,0.6)",
              border: "1px solid rgba(0,255,150,0.15)",
              boxShadow: "0 0 30px rgba(0,255,150,0.05)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: "#c8efe0" }}>
              Send a Message
            </h3>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "rgba(180,230,210,0.8)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name .."
                  style={{ ...inputStyle }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "rgba(180,230,210,0.8)" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email .."
                  style={{ ...inputStyle }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "rgba(180,230,210,0.8)" }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the opportunity or project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
                style={{
                  background: isSubmitting
                    ? "rgba(0,255,150,0.1)"
                    : "linear-gradient(135deg, rgba(0,255,150,0.2), rgba(0,200,255,0.2))",
                  border: "1px solid rgba(0,255,150,0.4)",
                  color: "#00ffaa",
                  boxShadow: "0 0 20px rgba(0,255,150,0.15)",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,150,0.35)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,255,150,0.3), rgba(0,200,255,0.3))";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,150,0.15)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(0,255,150,0.2), rgba(0,200,255,0.2))";
                  }
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
