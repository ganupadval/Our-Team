import "./App.css";
import { useEffect, useState } from "react";
import New from "./New";

function App() {
  const [mouseCoords, setMouseCoords] = useState(null);
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

  const obj = {
    Yash: "/allmembers/Yash.jpg",
    Raj: "/allmembers/Raj.jpg",
    Dhruv: "/allmembers/Dhruv.jpg",
    Mrunmayee: "/allmembers/Mrunmayee.jpg",
    Aarushi: "/allmembers/Aarushi.jpg",
    Deep: "/allmembers/Deep.jpg",
    Manas: "/allmembers/Manas.jpg",
    Nirmiti: "/allmembers/Nirmiti.jpg",
    Jay: "/allmembers/Jay.jpg",
    Prajna: "/allmembers/Prajna.jpg",
    Saumya: "/allmembers/Saumya.jpg",
    Akshata: "/allmembers/Akshata.jpg",
    AthangP: "/allmembers/AthangP.jpg",
    Tanmay: "/allmembers/Tanmay.jpg",
    Ishika: "/allmembers/Ishika.jpg",
    Pratik: "/allmembers/Pratik.jpg",
    Akshay: "/allmembers/Akshay.jpg",
    Jidnyasa: "/allmembers/Jidnyasa.jpg",
    Prem: "/allmembers/Prem.jpg",
    Shruti: "/allmembers/Shruti.jpg",
    Tanushree: "/allmembers/Tanushree.jpg",
    Saikiran: "/allmembers/Saikiran.jpg",
    Mohan: "/allmembers/Mohan.jpg",
    Krupa: "/allmembers/Krupa.jpg",
    Maulya: "/allmembers/Maulya.jpg",
    Muntzar: "/allmembers/Muntzar.jpg",
    Pratham: "/allmembers/Pratham.jpg",
    Sagar: "/allmembers/Sagar.jpg",
    Snehal: "/allmembers/Snehal.jpg",
  };

  useEffect(() => {
    console.log("useEffect");
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "100%";
    body.onmousemove = (e) => {
      setMouseCoords({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(e.clientX, e.clientY);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center items-center"
      style={{ width:"65%", margin:"auto" }}
    >
      {mouseCoords &&
        Object.keys(obj).map((key) => {
          return (
            <New key={key} name={obj[key]} mouseCoords={mouseCoords} Id={key} />
          );
        })}
    </div>
  );
}

export default App;
