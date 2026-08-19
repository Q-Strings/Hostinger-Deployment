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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { events } from "@/lib/data/events-data";
import { submitFormspreeForm } from "@/lib/formspree";

const attendanceOptions = ["In-person", "Virtual"];

export function RegisterForm() {
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    country: "",
    organization: "",
    role: "",
    attendance: "",
    event: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [success, setSuccess] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "submitting" | "error"
  >("idle");
  const [submitError, setSubmitError] = React.useState("");

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (!form.country.trim()) nextErrors.country = "Country is required.";
    if (!form.organization.trim()) nextErrors.organization = "Organization is required.";
    if (!form.role.trim()) nextErrors.role = "Role/Position is required.";
    if (!form.attendance) nextErrors.attendance = "Select attendance type.";
    if (!form.event) nextErrors.event = "Select an event.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setSubmitStatus("idle");
      return;
    }

    setSubmitStatus("submitting");
    setSubmitError("");

    const formData = new FormData();
    formData.set("fullName", form.fullName);
    formData.set("email", form.email);
    formData.set("country", form.country);
    formData.set("organization", form.organization);
    formData.set("role", form.role);
    formData.set("attendance", form.attendance);
    formData.set("event", form.event);
    formData.set("submittedAt", new Date().toISOString());
    formData.set("formType", "Registration");
    formData.set("sourcePage", "/register");

    const result = await submitFormspreeForm("register", formData);

    if (!result.ok) {
      setSubmitStatus("error");
      setSubmitError(result.message);
      return;
    }

    setSuccess(true);
    setSubmitStatus("idle");
    setForm({
      fullName: "",
      email: "",
      country: "",
      organization: "",
      role: "",
      attendance: "",
      event: ""
    });
    setErrors({});
  };

  return (
    <>
      <form
        className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            id="fullName"
            label="Full name"
            value={form.fullName}
            error={errors.fullName}
            onChange={(value) => handleChange("fullName", value)}
          />
          <Field
            id="email"
            label="Email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(value) => handleChange("email", value)}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            id="country"
            label="Country"
            value={form.country}
            error={errors.country}
            onChange={(value) => handleChange("country", value)}
          />
          <Field
            id="organization"
            label="Organization"
            value={form.organization}
            error={errors.organization}
            onChange={(value) => handleChange("organization", value)}
          />
        </div>
        <Field
          id="role"
          label="Role/Position"
          value={form.role}
          error={errors.role}
          onChange={(value) => handleChange("role", value)}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>Attendance type</Label>
            <Select value={form.attendance} onValueChange={(value) => handleChange("attendance", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select attendance" />
              </SelectTrigger>
              <SelectContent>
                {attendanceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.attendance ? (
              <p className="text-xs text-red-500">{errors.attendance}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label>Event selection</Label>
            <Select value={form.event} onValueChange={(value) => handleChange("event", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select event" />
              </SelectTrigger>
              <SelectContent>
                {events.map((option) => (
                  <SelectItem key={option.slug} value={option.title}>
                    {option.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.event ? (
              <p className="text-xs text-red-500">{errors.event}</p>
            ) : null}
          </div>
        </div>
        <Button
          type="submit"
          variant="dark"
          size="lg"
          disabled={submitStatus === "submitting"}
        >
          {submitStatus === "submitting" ? "Submitting..." : "Submit Registration"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-sm font-medium text-red-600">{submitError}</p>
        ) : null}
      </form>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration submitted</DialogTitle>
            <DialogDescription>
              Thank you for registering. Your details have been submitted successfully.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text"
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
