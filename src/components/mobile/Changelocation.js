import React from "react";
import "../../assets/styles/mobile/Changelocation.css";
import { SlLocationPin } from "react-icons/sl";
import { BiCurrentLocation } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";

function Changelocation() {
  const [isLocationVisible, setisLocationVisible] = useState(true);
  const locationDisplayHandler = () => {
    if (isLocationVisible == true) {
      setisLocationVisible(false);
    } else setisLocationVisible(true);
  };
  return (
    <div className="parent-changelocation">
      <div className="loca" onClick={locationDisplayHandler}>
        Location
        <div className="locaicon">
          {isLocationVisible ? <SlArrowDown /> : <SlArrowUp />}
        </div>
      </div>

      <div
        className="lower-cl"
        style={{ display: isLocationVisible ? "block" : "none" }}
      >
        <div className="upper-cl">
          <div className="input-cl">
            <input type="text" placeholder="Change Location" />
            <div className="icon-cl">
              <SlLocationPin />
            </div>
          </div>
        </div>
        <div className="parent-suggestion">
          <div className="suggestion">
            <div className="text-sg">Suggestion 1</div>
            <div className="icon-sg">
              <BiCurrentLocation />
            </div>
          </div>
          <div className="line-sg"></div>

          <div className="suggestion">
            <div className="text-sg">Suggestion 2</div>
            <div className="icon-sg">
              <BiCurrentLocation />
            </div>
          </div>
          <div className="line-sg"></div>
          <div className="suggestion">
            <div className="text-sg">Suggestion 3</div>
            <div className="icon-sg">
              <BiCurrentLocation />
            </div>
          </div>
          <div className="line-sg"></div>
          <div className="suggestion">
            <div className="text-sg">Suggestion 4</div>
            <div className="icon-sg">
              <BiCurrentLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelocation;
