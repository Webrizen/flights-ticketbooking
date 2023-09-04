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


function Pricing() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
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
    </>
  );
}

export default Pricing;
