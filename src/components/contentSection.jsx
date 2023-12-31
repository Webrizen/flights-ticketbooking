import React from 'react';
import TelLink from './TelLink';

export default function ContentSection() {
  return (
    <>
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
    </>
  )
}
