import React, { useEffect, useState } from "react";
import "../app.css";

export default function Pricing() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://flights-ticketbooking-vite.vercel.app/api/data.json")
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
  )
}
