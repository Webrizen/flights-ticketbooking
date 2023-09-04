import React, { useEffect, useState } from "react";
import "../app.css";
import TelLink from "../components/TelLink";

function Home() {
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
    </>
  );
}

export default Home;
