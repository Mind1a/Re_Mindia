import React from "react";

const Footer = ({ totalBooks }) => {
  const giftBooks = Math.floor(totalBooks / 3); // 1
  return (
    <div>
      <h1>Gifet books : {giftBooks}</h1>
    </div>
  );
};

export default Footer;
