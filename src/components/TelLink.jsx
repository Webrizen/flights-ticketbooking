import React from "react";

const TelLink = ({ href, children }) => {
  const isTelLink = href.startsWith("tel:");

  const handleContextMenu = (e) => {
    if (isTelLink) {
      e.preventDefault(); // Prevent right-click action on tel: links
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