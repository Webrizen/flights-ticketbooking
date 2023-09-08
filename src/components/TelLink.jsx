import React from "react";

const TelLink = ({ href, children }) => {
  const isTelLink = href.startsWith("/");

  const handleContextMenu = (e) => {
    if (isTelLink) {
      e.preventDefault();
    }
  };

  const handleClick = (e) => {
    if (isTelLink) {
      // Call the phone number here
      window.location.href = `tel:+1-888-907-0866`;
      e.preventDefault();
    }
  };

  return (
    <a href={href} onContextMenu={handleContextMenu} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TelLink;
