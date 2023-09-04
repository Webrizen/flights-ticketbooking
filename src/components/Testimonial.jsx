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


function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <>      
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
    </>
  );
}

export default Testimonial;
