import "./App.css";
import { useEffect, useState } from "react";
import New from "./New";
import { motion } from "framer-motion";
function App() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  // const obj = {
  //   Yash: {
  //     height: "0px",
  //     front: "/Yash/front.jpeg",
  //     top: "/Yash/top.jpeg",
  //     buttom: "/Yash/buttom.jpeg",
  //     left: "/Yash/left.jpeg",
  //     right: "/Yash/right.jpeg",
  //     topright: "/Yash/topright.jpeg",
  //     topleft: "/Yash/topleft.jpeg",
  //     buttomright: "/Yash/buttomright.jpeg",
  //     buttomleft: "/Yash/buttomleft.jpeg",
  //   },
  //   Raj: {
  //     height: "-180px",
  //     front: "/Raj/front.jpeg",
  //     top: "/Raj/top.jpeg",
  //     buttom: "/Raj/buttom.jpeg",
  //     left: "/Raj/left.jpeg",
  //     right: "/Raj/right.jpeg",
  //     topright: "/Raj/topright.jpeg",
  //     topleft: "/Raj/topleft.jpeg",
  //     buttomright: "/Raj/buttomright.jpeg",
  //     buttomleft: "/Raj/buttomleft.jpeg",
  //   },
  // };

  const obj1 = {
    Dhruv: "/allmembers/Dhruv.jpg",
    Deep: "/allmembers/Deep.jpg",
    Nirmiti: "/allmembers/Nirmiti.jpg",
    Manas: "/allmembers/Manas.jpg",
    AthangB: "/allmembers/AthangB.jpg",
    Ishika: "/allmembers/Ishika.jpg",
    Aishwarya: "/allmembers/Aishwarya.jpg",
    Snehal: "/allmembers/Snehal.jpg",
    Maulya: "/allmembers/Maulya.jpg",
    Saumya: "/allmembers/Saumya.jpg",
    Shruti: "/allmembers/Shruti.jpg",
    Krupa: "/allmembers/Krupa.jpg",
    Aarushi: "/allmembers/Aarushi.jpg",
    Prajna: "/allmembers/Prajna.jpg",
    Aniket: "/allmembers/Aniket.jpg",
    Atharvi: "/allmembers/Atharvi.jpg",
    Pratik: "/allmembers/Pratik.jpg",
    Prem: "/allmembers/Prem.jpg",
    Amshitha: "/allmembers/Amshitha.jpg",
    Tanmay: "/allmembers/Tanmay.jpg",
    Mohan: "/allmembers/Mohan.jpg",
    Pratham: "/allmembers/Pratham.jpg",
    Muntzar: "/allmembers/Muntzar.jpg",
    Sagar: "/allmembers/Sagar.jpg",
    Harshal: "/allmembers/Harshal.jpg",
    Jidnyasa: "/allmembers/Jidnyasa.jpg",
    AthangP: "/allmembers/AthangP.jpg",
    "You?": "/allmembers/You_.jpg",
  };

  const obj2 = {
    Raj: "/allmembers/Raj.jpg",
    Yash: "/allmembers/Yash.jpg",
    Mrunmayee: "/allmembers/Mrunmayee.jpg",
    Jay: "/allmembers/Jay.jpg",
    Akshata: "/allmembers/Akshata.jpg",
    Akshay: "/allmembers/Akshay.jpg",
    Saikiran: "/allmembers/Saikiran.jpg",
    Tanushree: "/allmembers/Tanushree.jpg",
    "You?": "/allmembers/You_.jpg",
  };

  useEffect(() => {
    console.log("useEffect");
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "110%";
    body.onmousemove = (e) => {
      setMouseCoords({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(e.clientX, e.clientY);
    };
}, []);

  return (
    <div>
      <h1 class="team-title text-center">Our Team</h1>
      <div
        className="flex flex-wrap justify-center items-center h-fit my-auto mx-auto"
        style={{ width: "65%", cursor: "crosshair" }}
      >
        {mouseCoords &&
          Object.keys(obj1).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj1[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.1}
              />
            );
          })}
      </div>
      <h1 class="team-title small text-center">TECH-GITS</h1>
      <div
        className="flex flex-wrap justify-center items-center h-fit my-auto mx-auto"
        style={{ width: "65%", cursor: "crosshair" }}
      >
        {mouseCoords &&
          Object.keys(obj2).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj2[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.3}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
