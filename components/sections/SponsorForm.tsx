"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { submitFormspreeForm } from "@/lib/formspree";

const interestOptions = ["Sponsor", "Exhibit", "Partner"];

export function SponsorForm() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [interest, setInterest] = React.useState("");
  const [interestError, setInterestError] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!interest) {
      setInterestError("Select an interest.");
      return;
    }

    setStatus("submitting");
    setInterestError("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("interest", interest);
    formData.set("formType", "Sponsor Interest");
    formData.set("sourcePage", "/sponsor/become-sponsor");

    const result = await submitFormspreeForm("sponsor", formData);

    if (!result.ok) {
      setStatus("error");
      setErrorMessage(result.message);
      return;
    }

    setStatus("success");
    form.reset();
    setInterest("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="sponsor-name">Full name</Label>
        <Input id="sponsor-name" name="name" placeholder="Your full name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sponsor-org">Organization</Label>
        <Input id="sponsor-org" name="organization" placeholder="Organization name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sponsor-email">Email</Label>
        <Input
          id="sponsor-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label>Interest</Label>
        <Select
          value={interest}
          onValueChange={(value) => {
            setInterest(value);
            setInterestError("");
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select interest" />
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {interestError ? (
          <p className="text-xs text-red-500">{interestError}</p>
        ) : null}
      </div>
      <Button type="submit" variant="dark" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Interest"}
      </Button>
      {status === "success" ? (
        <p className="text-sm font-medium text-brand-green">
          Thank you! Our team will reach out with sponsorship details.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      ) : null}
    </form>
  );
}
