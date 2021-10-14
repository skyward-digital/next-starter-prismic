import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { register, handleSubmit } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormSubmission = async (data) => {
    //handles Netlify Form submission
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then()
      .catch((error) => console.log(error));
  };

  const onSubmit = async (data) => {
    await handleFormSubmission(data);
    // analyticsTracker('Form Submitted')
    setHasSubmitted(true);
  };

  return (
    <form
      className="max-w-3xl mx-auto my-6"
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      data-netlify="true"
      id="contactForm"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid md:grid-cols-2 md:gap-6">
        <Input
          name="first_name"
          label="First Name"
          type="text"
          required
          placeholder="Your first name"
          register={register}
          autoComplete="name"
        />

        <Input
          name="last_name"
          label="Last Name"
          type="text"
          required
          placeholder="Your last name"
          register={register}
          autoComplete="name"
        />
      </div>

      <div className="grid">
        <Input
          name="email"
          label="Email Address"
          type="email"
          required
          placeholder="hello@skyward.digital"
          register={register}
          autoComplete="email"
        />
      </div>

      <Input
        name="message"
        label="Message"
        type="textarea"
        required
        placeholder="How can we help you?"
        register={register}
      />

      <div className="flex flex-wrap items-center justify-center mt-4 lg:justify-start">
        {hasSubmitted ? (
          <div className="text-center lg:text-left">
            <p className="text-3xl font-extrabold text-gray-800">
              Thanks for enquiring
            </p>
            <p className="text-gray-800">We'll be in touch soon</p>
          </div>
        ) : (
          <>
            <button
              type="submit"
              className="btn btn-primary btn-xl"
              // onClick={fbq("track", "Contact")}
            >
              Submit enquiry
            </button>
            <p className="w-full mt-4 ml-4 text-sm text-left text-center text-gray-600 lg:w-auto">
              We'll get back to you within 48 hours
            </p>
          </>
        )}
      </div>
    </form>
  );
};

const Input = ({
  name,
  label,
  type,
  required,
  placeholder,
  autoComplete,
  register,
}) => (
  <div className="mb-4 text-left grid gap-1">
    <label htmlFor={name} className="font-semibold text-gray-800">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        {...register(name, { required })}
        className="w-full px-3 py-3 text-gray-800 bg-white outline-none rounded-xl focus:ring-2 focus:ring-indigo-600"
        placeholder={placeholder}
        rows={4}
        defaultValue={""}
      />
    ) : (
      <input
        name={name}
        id={name}
        type={type}
        {...register(name, { required: true })}
        className="w-full px-3 py-3 text-gray-800 bg-white outline-none rounded-xl focus:ring-2 focus:ring-indigo-600"
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    )}
  </div>
);
