import emailjs from "@emailjs/browser";
import { SuccessAnimation } from "@/components/SuccessAnimation";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_vw1sgxk",
        "template_1y3gmkm",
        e.target,
        "yteMGXHlT5zPnDPHQ"
      );

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);

      toast({
        title: "Message sent!",
        description: "Thanks! I'll reply soon.",
      });

      e.target.reset();
    } catch (error) {
      console.log(error);

      toast({
        title: "Error",
        description: "Message failed to send.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm a Software Engineering student at Arizona State University
          passionate about building creative web applications, UI/UX
          experiences, and interactive software projects. Feel free to reach
          out for collaborations or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:stamjeed@asu.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    stamjeed@asu.edu
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">
                    +1 (602) 336-3430
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Phoenix, Arizona, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex space-x-4 justify-center">

                {/* TODO: add your LinkedIn profile URL */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-5 w-5" />
                </div>

                <a
                  href="https://github.com/stamjeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>

                {/* TODO: add your Instagram profile URL */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Instagram className="h-5 w-5" />
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Saleha Tamjeed..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="stamjeed@asu.edu"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Success Animation */}
        <SuccessAnimation show={showSuccess} />

      </div>
    </section>
  );
};