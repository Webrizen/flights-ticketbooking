import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <img src="/logo.png" alt="FOS logo" className="h-8" />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year} FOS Travel LLC — All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.fostravelllc.com/terms-and-conditions" className="text-gray-500">
              Terms & Conditions
            </a>
            <a href="https://www.fostravelllc.com/privacy-policy" className="ml-3 text-gray-500">
             Privacy Policy
            </a>
          </span>
        </div>
      </footer> 
  )
}
