"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedSection } from "./wrappers/animated-section";
import { FloatingInput } from "./wrappers/floating-input";
import { FloatingTextarea } from "./wrappers/floating-textarea";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

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
    <div id="contact" className="p-4 min-h-screen flex flex-col justify-center">
      <AnimatedSection className=" w-full max-w-[1440px] mx-auto py-16">
        <h2 className="font-bold text-4xl tracking-wide text-center uppercase mb-8">
          CONTACT
        </h2>
        <AnimatedSection>
          <form
            className="max-w-md shadow-lg rounded-md border border-slate-800 shadow-slate-900 p-8 mx-auto space-y-4"
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
              className="btn bg-btn-bg rounded-full w-full text-center hover:bg-btn-hover"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}
