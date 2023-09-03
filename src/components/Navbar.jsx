import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="body-font sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto flex p-4 flex-row items-center justify-between">
          <img src="/logo.png" alt="FOC Logo" className="w-auto md:h-12 h-6" />
        </div>
      </header>
    </>
  );
}
