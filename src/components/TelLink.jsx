import React from "react";

const TelLink = ({ href, children }) => {
  const isTelLink = href.startsWith("/");

  const handleContextMenu = (e) => {
    if (isTelLink) {
      e.preventDefault();
    }
  };

  return (
    <>
    <a href={href} onContextMenu={handleContextMenu}>
      {children}
    </a>
    </>
  );
};

export default TelLink;