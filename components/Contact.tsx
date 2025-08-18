"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedSection } from "./wrappers/animated-section";
import { FloatingInput } from "./wrappers/floating-input";
import { FloatingTextarea } from "./wrappers/floating-textarea";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await toast.promise(axios.post("/api/contact", data), {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: (err: unknown) => {
        if (err instanceof AxiosError) {
          return err.response?.data?.error || err.message;
        }
        if (err instanceof Error) {
          return err.message;
        }
        return "Unknown error occurred";
      },
    });

    reset();
  };
  return (
    <div id="contact" className="flex min-h-screen flex-col justify-center p-4">
      <AnimatedSection className="mx-auto w-full max-w-[1440px] py-16">
        <h2 className="text-heading-text mb-8 text-center text-3xl font-bold tracking-wide uppercase md:text-4xl">
          CONTACT
        </h2>
        <AnimatedSection>
          <form
            className="mx-auto max-w-md space-y-4 rounded-md border border-slate-800 p-8 shadow-lg shadow-slate-900"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FloatingInput
              type="text"
              id="name"
              label="Name"
              error={errors.name?.message}
              {...register("name")}
            />

            <FloatingInput
              type="email"
              id="email"
              label="Email address"
              error={errors.email?.message}
              {...register("email")}
            />

            <FloatingInput
              type="text"
              id="subject"
              label="Subject"
              error={errors.subject?.message}
              {...register("subject")}
            />

            <FloatingTextarea
              id="message"
              label="Message"
              rows={8}
              error={errors.message?.message}
              {...register("message")}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn bg-btn-bg text-heading-text hover:bg-btn-hover w-full rounded-full border-none text-center"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <span className="flex gap-4 text-base">
                  <Send width={20} />
                  Submit
                </span>
              )}
            </button>
          </form>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}
