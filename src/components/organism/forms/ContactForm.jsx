"use client";

import React, { useState } from "react";
import { ROUTES } from "@/constants/routes/routes";
import { Loader2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

import { submitForm } from "@/lib/helpers/form-submit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.add({
        type: "error",
        description: "Please fill in all fields.",
      });
      return;
    }

    setLoading(true);

    try {
      await submitForm({
        url: ROUTES.API.CONTACT,
        data: form,
        useAuth: false,

        onSuccess: () => {
          toast.add({
            type: "success",
            description: "Message sent successfully! We will get back to you soon.",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },

        onError: (error) => {
          toast.add({
            type: "error",
            description: error?.message || "Unable to send your message. Please try again.",
          });
        },
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unable to send your message. Please try again.";

      toast.add({
        type: "error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-card text-card-foreground border-border flex min-h-125 w-full flex-col gap-8 rounded-2xl border p-6 shadow-xl md:flex-row md:gap-12 md:p-10"
      onSubmit={handleSendMessage}
    >
      {/* Left Column */}
      <div className="flex w-full flex-col gap-6 md:w-5/12 lg:w-4/12">
        <div className="flex flex-col gap-5">
          <ContactInfo
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            body={
              <a
                href="mailto:info@enlighten.edu.np"
                className="text-muted-foreground hover:text-primary-red transition-colors"
              >
                ssw@gmail.com
              </a>
            }
          />

          <ContactInfo
            icon={<Phone className="text-primary-red h-6 w-6" />}
            title="Phone"
            body={
              <a
                href="tel:01-5342454"
                className="text-muted-foreground hover:text-primary-red transition-colors"
              >
                01-5921567
              </a>
            }
          />

          <ContactInfo
            icon={<MapPin className="h-6 w-6" />}
            title="Address"
            body={
              <p className="text-muted-foreground leading-relaxed">
                Narayangopal Chowk, Kathmandu, Nepal
              </p>
            }
          />

          <ContactInfo
            icon={<Share2 className="h-6 w-6" />}
            title="Follow Us"
            body={
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-primary-blue transition-transform hover:scale-110"
                >
                  <FaFacebook size={26} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-primary-red transition-transform hover:scale-110"
                >
                  <FaInstagram size={26} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-primary-blue-dark transition-transform hover:scale-110"
                >
                  <FaLinkedin size={26} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-primary-red transition-transform hover:scale-110"
                >
                  <FaYoutube size={26} />
                </a>

                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-primary-green transition-transform hover:scale-110"
                >
                  <FaWhatsapp size={26} />
                </a>
              </div>
            }
          />
        </div>
      </div>

      {/* Right Column: Form Inputs */}
      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col gap-4 sm:flex-row">
          <ContactInput
            title="Name"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <ContactInput
            title="Email Address"
            name="email"
            type="email"
            placeholder="Your email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <ContactInput
          title="Subject"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <div className="flex flex-1 flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="text-foreground text-sm font-semibold md:text-base"
          >
            Message
          </label>

          <Textarea
            id="contact-message"
            name="message"
            className="border-input bg-background/50 focus-visible:ring-destructive/30 min-h-45 flex-1 rounded-xl p-3.5 text-base transition-colors"
            placeholder="Write something..."
            value={form.message}
            onChange={handleChange}
            rows={10}
            required
          />
        </div>

        <Button
          className="bg-primary-blue  hover:bg-primary-blue/90 text-white h-12 w-full cursor-pointer rounded-xl font-semibold shadow-md transition duration-200 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}

function ContactInput({
  title,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label
        htmlFor={`contact-${name}`}
        className="text-foreground text-sm font-semibold md:text-base"
      >
        {title}
      </label>

      <Input
        id={`contact-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="border-input bg-background/50 focus-visible:ring-destructive/30 h-12 rounded-xl px-3.5 text-base transition-colors"
      />
    </div>
  );
}

function ContactInfo({ icon, title, body }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-primary">{icon}</span>

        <strong className="text-base font-bold md:text-lg">{title}</strong>
      </div>

      <div className="pl-7 text-sm md:text-base">{body}</div>
    </div>
  );
}
