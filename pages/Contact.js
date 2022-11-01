import React, { useState } from 'react';
import { PostWidget } from '../components';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/029341d0-59d3-11ed-b82c-5d75eaa7ccff"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
      <div className="bg-white shadow-lg text-center rounded-lg p-8 pb-12 m-4">
      <h1 className="mb-4 lg:col-span-2 opacity-80">If you would like to get in touch about a collaboration or find out about my {"\n"}
      Instagram or Blog post prices - please fill out the form below.</h1>
      <h1 className="mb-4 lg:col-span-2 opacity-80">Alternatively, email me at dionneandrubymaya@gmail.com</h1>
        <div className="bg-white shadow-lg text-center rounded-lg w-6/12 h-60 pt-14">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        </div>
        </div>
        </>
    );
  }

  return (
    <div className="bg-white grid shadow-lg rounded-lg p-8 pb-12 mb-8 lg:grid-cols-3">
      <h1 className="mb-4 lg:col-span-2 opacity-80">If you would like to get in touch about a collaboration or find out about my {"\n"}
      Instagram or Blog post prices - please fill out the form below.</h1>
      <h1 className="mb-4 lg:col-span-2 opacity-80">Alternatively, email me at <button  className="text-blue-600 underline"onClick={() => window.location = 'mailto:dionneandrubymaya@gmail.com'}>dionneandrubymaya@gmail.com</button></h1>
      <div className="lg:col-span-2 mt-8">
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none w-full md:w-2/4 lg:w-3/6 focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full md:w-2/4 lg:w-3/6"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="business"
          placeholder="Business Name"
          name="business"
          className="px-3 py-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full md:w-2/4 lg:w-3/6"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full md:w-2/4 lg:w-3/6"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    <div className="lg:col-span-1">
    <PostWidget />
    </div>
    </div>
  );
};

export default ContactForm;