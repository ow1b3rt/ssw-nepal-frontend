"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import AnimatedCard from "@/components/ui/animated-card";
import { AnimatedWords } from "@/components/ui/animated-words";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

//
const purposeOptions = [
  "Career Counseling",
  "SSW Japan Consultation",
  "Study in Japan",
  "Japanese Language Training",
  "Job Opportunities in Japan",
  "Other",
];

const appointmentTypes = ["In-Person Consultation", "Online Consultation", "Phone Consultation"];

const preferredTimes = ["Morning", "Afternoon", "Evening"];

function RadioOption({ name, value, checked, onChange }) {
  return (
    <label className="flex w-fit cursor-pointer items-center gap-3">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span className="border-primary-green flex h-7 w-7 shrink-0 items-center justify-center rounded-full border">
        {checked && <span className="bg-primary-green h-3 w-3 rounded-full" />}
      </span>

      <span className="text-foreground text-sm font-medium sm:text-base">{value}</span>
    </label>
  );
}

export function AppointmentForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    purpose: "",
    appointmentType: "",
    preferredTime: "",
    additionalInfo: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      purpose: "",
      appointmentType: "",
      preferredTime: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 md:px-10 lg:px-0 lg:py-10">
      {/* Heading */}
      <AnimatedCard direction="down" distance={12} triggerOnView className="mb-14 text-center">
        <h1 className="text-primary-red text-4xl leading-tight font-bold sm:text-5xl">
          <AnimatedWords
            text="Book an Appointment"
            animKey="bookAppointment"
            durationMs={1000}
            staggerMs={100}
            direction="up"
          />
        </h1>

        <p className="text-muted-foreground mx-auto mt-3 max-w-3xl text-sm leading-6 sm:text-base">
          <AnimatedWords
            text="Schedule a consultation with our experts and take the next step toward your future in Japan."
            animKey="appointmentSubtitle"
            durationMs={1000}
            staggerMs={10}
            direction="up"
          />
        </p>
      </AnimatedCard>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <section>
            <h2 className="text-primary-blue-dark mb-7 text-xl font-bold sm:text-[21px]">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2 lg:gap-x-24">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-semibold sm:text-base">
                  First Name
                </Label>

                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  required
                  className="border-primary-blue/50 h-12 w-full rounded-md px-4 text-sm sm:h-14 sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-semibold sm:text-base">
                  Last Name
                </Label>

                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  required
                  className="border-primary-blue/50 h-12 w-full rounded-md px-4 text-sm sm:h-14 sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold sm:text-base">
                  Email Address
                </Label>

                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="border-primary-blue/50 h-12 w-full rounded-md px-4 text-sm sm:h-14 sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold sm:text-base">
                  Phone Number
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="(\d{10}|\+[0-9]{1,13}|\+[0-9]{1,3} [0-9]{10})"
                  maxLength={15}
                  title="Enter exactly 10 digits, or a '+' with country code (e.g. +911234567890 or +91 1234567890)"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="border-primary-blue/50 h-12 w-full rounded-md px-4 text-sm sm:h-14 sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-semibold sm:text-base">
                  Location
                </Label>

                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="City, Country"
                  className="border-primary-blue/50 h-12 w-full rounded-md px-4 text-sm sm:h-14 sm:text-base"
                />
              </div>
            </div>
          </section>
        </AnimatedCard>

        {/* Purpose of Appointment */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <section className="border-primary-blue/25 mt-8 border-t pt-6">
            <h2 className="text-primary-blue-dark mb-6 text-xl font-bold sm:text-[21px]">
              Purpose of Appointment
            </h2>

            <div className="space-y-4">
              {purposeOptions.map((option) => (
                <RadioOption
                  key={option}
                  name="purpose"
                  value={option}
                  checked={formData.purpose === option}
                  onChange={() => handleChange("purpose", option)}
                />
              ))}
            </div>
          </section>
        </AnimatedCard>

        {/* Preferred Appointment Type */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <section className="border-primary-blue/25 mt-8 border-t pt-6">
            <h2 className="text-primary-blue-dark mb-6 text-xl font-bold sm:text-[21px]">
              Preferred Appointment Type
            </h2>

            <div className="space-y-4">
              {appointmentTypes.map((option) => (
                <RadioOption
                  key={option}
                  name="appointmentType"
                  value={option}
                  checked={formData.appointmentType === option}
                  onChange={() => handleChange("appointmentType", option)}
                />
              ))}
            </div>
          </section>
        </AnimatedCard>

        {/* Preferred Time */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <section className="border-primary-blue/25 mt-8 border-t pt-6">
            <h2 className="text-primary-blue-dark mb-6 text-xl font-bold sm:text-[21px]">
              Preferred Time
            </h2>

            <div className="space-y-4">
              {preferredTimes.map((option) => (
                <RadioOption
                  key={option}
                  name="preferredTime"
                  value={option}
                  checked={formData.preferredTime === option}
                  onChange={() => handleChange("preferredTime", option)}
                />
              ))}
            </div>
          </section>
        </AnimatedCard>

        {/* Additional Information */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <section className="border-primary-blue/25 mt-8 border-t pt-6">
            <h2 className="text-primary-blue-dark mb-5 text-xl font-bold sm:text-[21px]">
              Additional Information
            </h2>

            <Textarea
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              placeholder="Tell us anything else you would like to know about your appointment."
              className="border-primary-blue/50 min-h-[180px] w-full resize-none rounded-md px-4 py-4 text-sm leading-6 sm:min-h-[220px] sm:text-base"
            />
          </section>
        </AnimatedCard>

        {/* Submit */}
        <AnimatedCard direction="up" distance={12} triggerOnView>
          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary-green hover:bg-primary-green-dark h-11 min-w-[120px] rounded-md px-6 text-sm font-semibold text-white sm:h-12 sm:min-w-[140px] sm:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </AnimatedCard>
      </form>
    </div>
  );
}
