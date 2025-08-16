"use client";

import { AnimatedSection } from "./wrappers/animated-section";
import { FloatingInput } from "./wrappers/floating-input";
import { FloatingTextarea } from "./wrappers/floating-textarea";

export default function Contact() {
  return (
    <div id="contact" className="p-4">
      <AnimatedSection className="min-h-screen flex flex-col justify-center w-full max-w-[1440px] mx-auto py-16">
        <h2 className="font-bold text-4xl tracking-wide text-center uppercase mb-8 ">
          CONTACT
        </h2>
        <AnimatedSection>
          <form className="max-w-md mx-auto">
            <FloatingInput type="text" id="name" label="Name" required />
            <FloatingInput
              type="email"
              id="email"
              label="Email address"
              required
            />

            <FloatingInput type="text" id="subject" label="Subject" required />

            {/* New Floating Textarea */}
            <FloatingTextarea id="message" label="Message" required rows={8} />
            <button
              type="submit"
              className="btn bg-btn-bg rounded-full w-full text-center hover:bg-btn-hover"
            >
              Submit
            </button>
          </form>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}
