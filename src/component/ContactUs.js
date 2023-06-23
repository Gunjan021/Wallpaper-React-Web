import React from "react";

function ContactUs() {
  return (
    <div className="">
      <div className="p-4 font-semibold text-yellow-50 text-[30px]">
        <p>Contact Us</p>
      </div>
      <div className="md:flex py-2 md:py-5 justify-evenly items-center mx-2 lg:mx-5">
        <div className="rounded-3xl m-1 w-fit my-2 overflow-hidden">
          <img
            className="max-w-full md:max-h-[500px]"
            src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="bg-stone-400 rounded-lg p-2 md:p-3 lg:p-9">
          <form className="flex md:w-[400px] lg:w-[500px] just p-2 flex-col">
            <label className="text-white text-left" htmlFor="email">
              Full Name*
            </label>
            <input
              id="email"
              className="mt-1 p-3 rounded-lg"
              placeholder="Write Your Name Here!"
              type="text"
            />
            <label className="text-white text-left md:mt-10" htmlFor="email">
              Email address*
            </label>
            <input
              id="email"
              className="mt-1 p-3 rounded-lg"
              placeholder="Write Your E-mail Here!"
              type="text"
            />
            <label className="text-white text-left md:mt-10" htmlFor="message">
              Message*
            </label>
            <textarea
              className="mt-1 p-3 rounded-lg"
              name=""
              id="message"
              cols="30"
              rows="5"
              placeholder="Write Your Message Here!"
            ></textarea>
            <button
              className="mt-10 mx-auto p-3 w-48 md:w-80 bg-stone-900 text-yellow-50 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
