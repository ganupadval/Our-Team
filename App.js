import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const eid = useRef();

  const mousemove = (ev) => {
    let left = eid.current.offsetLeft;
    let width = eid.current.offsetWidth;
    // let top = eid.current.offsetTop;
    let top = 73;
    let random = eid.current.getBoundingClientRect();
    let height = eid.current.offsetHeight;
    // console.log(height, width, left, top);
    //get relative mouse position (take element as center)
    let centerX = left + width / 2;
    let centerY = top + height / 2;
    console.log(random.x);
    let mouseX = ev.pageX - centerX;
    //reverse default y-axis in html
    let mouseY = -ev.pageY + centerY;
    // $("span").text("X: " + mouseX + ", Y: " + mouseY);
    console.log(mouseX, mouseY);
    // get angle between mouse pointer and element
    let rad = Math.atan2(mouseY, mouseX); // In radians
    let deg = rad * (180 / Math.PI);
    //  $("span").text("r: " + rad +" θ : "+ deg);

    let w;
    //update css according to current angle
    if (deg < 22.5 && deg >= -22.5) {
      w = "-180px";
    } else if (deg < 67.5 && deg >= 22.5) {
      w = "-240px";
    } else if (deg < 112.5 && deg >= 67.5) {
      w = "-300px";
    } else if (deg < 157.5 && deg >= 112.5) {
      w = "-360px";
    } else if ((deg < 180 && deg >= 157.5) || (deg < -157.5 && deg >= -180)) {
      w = "-600px";
    } else if (deg < -112.5 && deg >= -157.5) {
      w = "-540px";
    } else if (deg < -67.5 && deg >= -112.5) {
      w = "-480px";
    } else if (deg < -22.5 && deg >= -67.5) {
      w = "-420px";
    }
    let x = w + " 6300px";
    // console.log(x);
    // eid.css("background-position", x);
  };

  return (
    <>
      <div
        onMouseMove={(ev) => {
          mousemove(ev);
        }}
      >
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora
          illo, quaerat accusantium veniam ut aperiam saepe ex fugit rem,
          repudiandae dicta earum, alias voluptas iste? Ad eveniet
          exercitationem ullam.
        </h1>

        <div class="btnDiv">
          <button id="ed">submit</button>
        </div>
        <div>
          <ul class="team-grid the-team">
            <li style={{ top: "245px", left: "261px" }} class="visible-member">
              <figure class="eye" id="eid" ref={eid}></figure>
              <strong class="tooltip-title" style={{ display: "none" }}>
                Adrian Andrași
              </strong>
            </li>
          </ul>
        </div>
        {/* <div id="myID"></div> */}
        <span></span>
      </div>
    </>
  );
}

export default App;
