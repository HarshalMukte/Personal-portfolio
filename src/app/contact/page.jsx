"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const text = "Say Hello ";
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true)


    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSuccess(true);
         form.current.reset();
         setLoading(false)
        },
        (error) => {
          setError(true);
          setLoading(false)
          console.log('FAILED...', error.text);
        },
      );
      
  };


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center justify-center gap-4 lg:flex-row p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center text-4xl sm:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-max md:h-1/2 lg:h-max lg:w-1/2 bg-white shadow-2xl rounded-xl text-xl flex flex-col gap-8 justify-center p-8 sm:p-16"
        >
          <span>Dear Harshal Mukte,</span>
          <textarea
            rows={2}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Enter message for me..."
            required
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Enter your mail"
            required
          />
          <span>Regards</span>
          <button value="Send" className="bg-purple-200 rounded font-semibold text-gray-600 p-2 sm:p-4">
            { loading ? "Sending..." : "Send" }
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! Try again later...
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
