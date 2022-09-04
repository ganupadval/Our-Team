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
    Yash: "/allmembers/Yash.jpeg",
    Raj: "/allmembers/Raj.jpeg",
    Dhruv: "/allmembers/Dhruv.jpeg",
    Mrunmayee: "/allmembers/Mrunmayee.jpeg",
    Aarushi: "/allmembers/Aarushi.jpeg",
    Deep: "/allmembers/Deep.jpeg",
    Manas: "/allmembers/Manas.jpeg",
    Nirmiti: "/allmembers/Nirmiti.jpeg",
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
      className="flex justify-center items-center space-x-4"
      style={{ minHeight: "100vh" }}
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
