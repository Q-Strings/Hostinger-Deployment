"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitFormspreeForm } from "@/lib/formspree";

export function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("formType", "Contact");
    formData.set("sourcePage", "/contact");

    const result = await submitFormspreeForm("contact", formData);

    if (!result.ok) {
      setStatus("error");
      setErrorMessage(result.message);
      return;
    }

    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Full name</Label>
        <Input id="contact-name" name="name" placeholder="Your full name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email address</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell us how we can support your participation"
          required
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="dark" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
          <Send className="h-4 w-4" />
        </Button>
        {status === "success" ? (
          <p className="text-sm font-medium text-brand-green">
            Thanks! Your message has been received.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-600">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
