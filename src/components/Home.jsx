import React, { useEffect, useState } from "react";
import "../app.css";
import TelLink from '../components/TelLink';

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="gold"
      viewBox="0 0 24 24"
      strokeWidth={0}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function StarRating({ numStars }) {
  const stars = Array.from({ length: numStars }, (_, index) => (
    <StarIcon key={index} />
  ));

  return <div className="flex">{stars}</div>;
}


function Home() {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/api/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <>
    
      <section
        className="min-h-min body-font relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2015/07/30/11/12/boeing-737-867318_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gray-100 opacity-80 h-full"></div>
        <div className="container mx-auto grid md:grid-cols-2 p-6 md:p-12 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-semibold text-gray-900 animate-fade-right animate-once">
              24/7 Delta Airline Reservations & Support
            </h1>
            {/* Card 2 */}
            <div className="md:grid grid-cols-1 md:grid-cols-2 gap-3 p-2 hidden">
              <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </h2>
                <p className="leading-relaxed">BOOKINGS</p>
              </div>
              <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </h2>
                <p className="leading-relaxed">CANCELLATIONS</p>
              </div>
              <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p className="leading-relaxed">CHANGES</p>
            </div>
            <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p className="leading-relaxed">REFUNDS</p>
            </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-lg p-6 flex flex-col md:ml-auto md:w-4/5 w-full mt-6 border-t-8 border-orange-500 md:mt-0 z-40 bg-[rgba(1,1,47,1)] text-white">
            <h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Exclusive Unpublished Fares
            </h2>
            <TelLink href="/calling.html">
              <div className="relative mb-4 p-6 border border-gray-500 rounded-xl text-center text-4xl animate-pulse hoverState h-52 flex flex-col justify-center items-center">
                Call Now To Receive The Best Deals for Your Flight.
              </div>
            </TelLink>
            <TelLink href="/calling.html">
            <span className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full flex flex-row justify-center items-center gap-2 text-lg overflow-hidden animate-wiggle animate-infinite w-min whitespace-nowrap mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
                <span>1-888-907-0866</span>
              </span>
            </TelLink>
            <p className="text-lg text-white mt-3 text-center">
              LIVE AGENTS AVAILABLE 24/7/365
            </p>
          </div>
          {/* Card 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 md:hidden">
          <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </h2>
                <p className="leading-relaxed">BOOKINGS</p>
              </div>
              <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </h2>
                <p className="leading-relaxed">CANCELLATIONS</p>
              </div>
            <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p className="leading-relaxed">CHANGES</p>
            </div>
            <div className="p-4 text-center flex justify-center items-center flex-col bg-slate-200 rounded-lg animate-rotate-x animate-infinite animate-duration-[4000ms]">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p className="leading-relaxed">REFUNDS</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="body-font bg-gradient-to-r from-orange-400 to-yellow-300 p-4 sm:p-10 lg:p-20">
        <div className="container p-6 sm:p-16 lg:p-16 rounded-md border-t-8 border-blue-950 mx-auto bg-white flex flex-col gap-4">
          <div className="flex flex-col text-center w-full mb-4 sm:mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 sm:mb-4">
              Cheap Flight Search
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Flying-From"
                className="leading-7 text-sm text-gray-600"
              >
                Flying From? *
              </label>
              <input
                type="text"
                id="Flying-From"
                name="Flying-From"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Flying-To"
                className="leading-7 text-sm text-gray-600"
              >
                Flying To? *
              </label>
              <input
                type="text"
                id="Flying-To"
                name="Flying-To"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Departure-Date"
                className="leading-7 text-sm text-gray-600"
              >
                Departure Date *
              </label>
              <input
                type="date"
                id="Departure-Date"
                name="Departure-Date"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Return-Date"
                className="leading-7 text-sm text-gray-600"
              >
                Return Date *
              </label>
              <input
                type="date"
                id="Return-Date"
                name="Return-Date"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Passengers"
                className="leading-7 text-sm text-gray-600"
              >
                No. of Passengers *
              </label>
              <input
                type="number"
                id="Passengers"
                name="Passengers"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="Name" className="leading-7 text-sm text-gray-600">
                Name *
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="PhoneNumber"
                className="leading-7 text-sm text-gray-600"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="PhoneNumber"
                name="PhoneNumber"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="Email"
                className="leading-7 text-sm text-gray-600"
              >
                Email *
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <p className="leading-7 text-sm text-gray-600">Trip Type *</p>
              <div className="mt-2">
                <label
                  htmlFor="OneWay"
                  className="inline-flex items-center mr-6"
                >
                  <input
                    type="radio"
                    id="OneWay"
                    name="tripType"
                    value="OneWay"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">One Way</span>
                </label>
                <label htmlFor="RoundTrip" className="inline-flex items-center">
                  <input
                    type="radio"
                    id="RoundTrip"
                    name="tripType"
                    value="RoundTrip"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Round Trip</span>
                </label>
              </div>
            </div>
          </div>
          <span className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-3xl mx-auto mt-4">
            Get Free Quote
          </span>
          <span className="text-gray-500 border-0 py-2 px-8 focus:outline-none text-lg mx-auto flex flex-row items-center justify-center gap-2">
            <img
              src="/arrooo.png"
              alt="Arrow"
              className="w-6 h-6 animate-fade-right animate-infinite"
            />
            <span>
              Or Call{" "}
              <TelLink href="/calling.html" className="text-gray-700">
                1-888-907-0866
              </TelLink>
            </span>
          </span>
        </div>
      </section>
      
      <section className="body-font text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">
              the descent move
            </h2>
            <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-2">
              Services We Offer
            </h1>
            <p>
              At FOS Travel, we make it easy and quick for you to book all of
              your Delta Airlines travel. Whether you are planning a trip within
              the country or around the world, we have a variety of options to
              suit your needs.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 hoverState">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-2xl title-font font-medium">
                    Airline Bookings
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg">
                    Our team of travel experts are available 24/7/365 to help
                    you find the perfect airline deals and save you money.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hoverState">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-2xl title-font font-medium">
                    Flight Changes
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg">
                    We understand that your plans can change unexpectedly. Our
                    team is available to assist you with any modifications you
                    need to make to your airline booking.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 hoverState">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-2xl title-font font-medium">
                    Cancellations / Refunds
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg">
                    If you need to cancel your trip, or there are any other
                    disruptions to your travel plans, our team is here to assist
                    you with the cancellation and refund process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="body-font bg-gradient-to-r from-orange-400 to-yellow-300">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto gap-4">
            <h1 className="flex-grow sm:pr-16 text-4xl font-bold title-font text-gray-900">
              Exclusive Unpublished Offers, Call now to secure the best flight
              deals!
            </h1>
            <div>
              <TelLink href="/calling.html">
                <span className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full flex flex-row justify-center items-center gap-2 text-lg overflow-hidden animate-wiggle animate-infinite w-min whitespace-nowrap mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>

                  <span>1-888-907-0866</span>
                </span>
              </TelLink>
              <p className="text-lg text-gray-800 mt-3 md:text-center">
                LIVE AGENTS AVAILABLE 24/7/365
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
              Your Adventure Is Right Around the Corner!
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-2 lg:w-1/3 md:w-1/2 w-full hoverState"
              >
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt={project.title}
                    className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={project.imageSrc}
                  />
                  <div className="flex flex-col flex-grow gap-2">
                    <h2 className="text-gray-900 title-font font-medium text-2xl">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-lg">
                      From{" "}
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-2 rounded-full font-bold animate-pulse  animate-infinite">
                        ${project.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section
        className="text-gray-600 body-font relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/07/02/10/59/airport-3511342_640.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gray-200 opacity-60 h-full"></div>
        <div className="container px-5 py-24 mx-auto z-40 relative">
          <h1 className="sm:text-5xl text-3xl font-medium text-black title-font mb-12 text-center relative z-40">
            Our Customers Love Us!
          </h1>
          <div className="flex flex-wrap -m-4 z-40">
            {testimonials.map((testimonial, index) => (
              <div className="p-4 md:w-1/2 w-full z-40" key={index}>
                <div className="h-full bg-gray-100 p-8 rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-8 h-8 text-indigo-500 mb-4 rotate-180"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-lg text-gray-800">
                    <b>{testimonial.author}</b>, {testimonial.content}
                  </p>
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/profile.svg"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center bg-gray-200 p-3"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.author}
                      </span>
                      <span className="text-gray-500 text-sm">
                        <StarRating numStars={testimonial.rating} />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="body-font bg-gradient-to-r from-orange-400 to-yellow-300">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto gap-4">
            <h1 className="flex-grow sm:pr-16 text-4xl font-bold title-font text-gray-900">
              Plan and Book Your Next Adventure With FOS Travel, Offering You
              the Best Deals and Customer Service!
            </h1>
            <div>
              <TelLink href="/calling.html">
                <span className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full flex flex-row justify-center items-center gap-2 text-lg overflow-hidden animate-wiggle animate-infinite w-min whitespace-nowrap mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>

                  <span>1-888-907-0866</span>
                </span>
              </TelLink>
              <p className="text-xl text-gray-800 mt-3 md:text-center">
                LIVE AGENTS AVAILABLE 24/7/365
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
