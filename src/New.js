import React, { useRef, useEffect, useState } from "react";

const New = ({ name, mouseCoords, Id }) => {
  const eid = useRef();
  const ref = useRef();
  // const [activePhoto, setActivePhoto] = useState(null);
  const [onDiv, setOnDiv] = useState(false);

  useEffect(() => {
    let random = eid.current.getBoundingClientRect();
    let left = random.left;
    let width = random.width;
    // let top = eid.current.offsetTop;
    let top = random.top;
    let height = random.height;

    let centerX = left + width / 2;
    let centerY = top + height / 2;
    // console.log(centerX, centerY);

    let mouseX = mouseCoords.x - centerX;
    let mouseY = -(mouseCoords.y - centerY);

    // console.log(ev)

    let rad = Math.atan2(mouseY, mouseX); // In radians
    let deg = rad * (180 / Math.PI);
    // !onDiv
    //   ? (ref.current.style.backgroundImage = `url(${name})`)
    //   : (ref.current.style.backgroundImage = `url(/Raj/front.jpeg)`);
    // console.log(name.front, deg);
    //update css according to current angle
    // if (deg < 22.5 && deg >= -22.5) {
    //   // eid.current.style.backgroundImage = `url(${name.right})`;
    //   setActivePhoto("right");
    // } else if (deg < 67.5 && deg >= 22.5) {
    //   // eid.current.style.backgroundImage = `url(${name.topright})`;
    //   setActivePhoto("topright");
    // } else if (deg < 112.5 && deg >= 67.5) {
    //   // eid.current.style.backgroundImage = `url(${name.top})`;
    //   setActivePhoto("top");
    // } else if (deg < 157.5 && deg >= 112.5) {
    //   // eid.current.style.backgroundImage = `url(${name.topleft})`;
    //   setActivePhoto("topleft");
    // } else if ((deg < 180 && deg >= 157.5) || (deg < -157.5 && deg >= -180)) {
    //   // eid.current.style.backgroundImage = `url(${name.left})`;
    //   setActivePhoto("left");
    // } else if (deg < -112.5 && deg >= -157.5) {
    //   // eid.current.style.backgroundImage = `url(${name.buttomleft})`;
    //   setActivePhoto("buttomleft");
    // } else if (deg < -67.5 && deg >= -112.5) {
    //   // eid.current.style.backgroundImage = `url(${name.buttom})`;
    //   setActivePhoto("buttom");
    // } else if (deg < -22.5 && deg >= -67.5) {
    //   // eid.current.style.backgroundImage = `url(${name.buttomright})`;
    //   setActivePhoto("buttomright");
    // }
    let w;
    if (onDiv) {
      w = "8px";
      ref.current.style.backgroundSize = "cover";
    } else {
      ref.current.style.backgroundSize = "";
      if (deg < 22.5 && deg >= -22.5) {
        w = "-50px";
      } else if (deg < 67.5 && deg >= 22.5) {
        w = "-108px";
      } else if (deg < 112.5 && deg >= 67.5) {
        w = "-165px";
      } else if (deg < 157.5 && deg >= 112.5) {
        w = "-223px";
      } else if ((deg < 180 && deg >= 157.5) || (deg < -157.5 && deg >= -180)) {
        w = "-280px";
      } else if (deg < -112.5 && deg >= -157.5) {
        w = "-335px";
      } else if (deg < -67.5 && deg >= -112.5) {
        w = "-395px";
      } else if (deg < -22.5 && deg >= -67.5) {
        w = "-450px";
      }
    }
    let x = w + " 0px";
    ref.current.style.backgroundPosition = x;
  }, [mouseCoords, onDiv]);

  return (
    <div id="eid" ref={eid} className="">
      {/* {Object.keys(name).map((key, index) => (
        <img
          id={name}
          key={index}
          src={name[key]}
          alt={key}
          className=" w-20 "
          style={{ display: activePhoto === key ? "block" : "none" }}
          onMouseOver={() => setActivePhoto("front")}
        />
        
      ))} */}
      <div
        ref={ref}
        id={Id}
        className="w-16 h-16 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${name})` }}
        onMouseOver={() => setOnDiv(true)}
        onMouseLeave={() => setOnDiv(false)}
        title={Id}
      ></div>
    </div>
  );
};

export default New;
