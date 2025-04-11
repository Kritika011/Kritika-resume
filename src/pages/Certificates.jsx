import React from 'react';
import uxdesign from "../image/uxdesign.png";
import digitalmarketing from "../image/googledigital.png";
import kgcss from "../image/kgcss.png";
import kgreact from "../image/kgreact.png";
import tihhtml from "../image/tihhtml.png";
import infosyspresent from "../image/infosyspresent.png";  
import infosyspython from "../image/infosyspython.png";
import python from "../image/googlepython.png";
import hackerrankpython from "../image/hackerrankpython.png";
import hackerrankcss from "../image/hackerrankcss.png";
import hackerranksql from "../image/hackerranksql.png";
import accenture from "../image/accenturedigital.png";

const certificateImages = [
  uxdesign,
  digitalmarketing,
  kgcss,
  kgreact,
  tihhtml,accenture,
  infosyspresent,
  infosyspython,
  python,hackerrankcss,hackerrankpython,
  hackerranksql,
];

const Certificates = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 px-4 py-6">
      {certificateImages.map((src, index) => (
        <div
          key={index}
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={src}
            alt={`Certificate ${index + 1}`}
            className="w-[39vw] h-[30vw] object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Certificates;
