import React from 'react'
import TelLink from './TelLink'

export default function FormSection() {
  return (
    <>
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
    </>
  )
}
