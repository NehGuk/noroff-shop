import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactSectionArea } from "./Contact.style";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Your name should be at least 3 characters.").required("Please enter your first name"),
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    subject: yup.string().min(3, "The subject should be at least 3 characters.").required("Please enter a subject"),
    body: yup.string().min(3, "Your message should be at least 3 characters.").max(1000, "Your first name cannot be longer than 100 characters.").required("Please enter a subject"),
  })
  .required();

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <ContactSectionArea>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName" hidden>
          Full name
        </label>
        <input name="fullName" {...register("fullName")} placeholder="Full name" />
        <p>{errors.fullName?.message}</p>

        <label htmlFor="email" hidden>
          Email
        </label>
        <input name="email" {...register("email")} placeholder="name@email.com" />
        <p>{errors.email?.message}</p>

        <label htmlFor="subject" hidden>
          Subject
        </label>
        <input name="subject" {...register("subject")} placeholder="Subject" />
        <p>{errors.subject?.message}</p>

        <label htmlFor="body" hidden>
          Message
        </label>
        <textarea name="body" {...register("body")} placeholder="Message" />
        <p>{errors.body?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </ContactSectionArea>
  );
}
