import React from "react";
import { revAnim } from "./FetchImages";

function Contacts() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen md:bg-none bg-cover bg-center bg-no-repeat font-garet"
    style={{
      backgroundImage: `url(${revAnim})`, // Inline style for dynamic background image
    }}>
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-[50%] min-h-[100vh] p-6 bg-reviot-blue bg-opacity-95 md:bg-opacity-100 justify-evenly text-white">
        <h2 className="text-3xl font-bold text-reviot-cyan">Let's Work together!</h2>
        <button className="rounded-full w-32 h-12 text-reviot-cyan border border-reviot-cyan"> Contact Us </button>

        <span className="flex flex-col gap-5 p-2">
          <p className="text-lg text-reviot-cyan">
            PHONE:
            <br />
            <span className="text-lg text-white">+254799 065 381</span>
          </p>
          <p className="text-lg text-reviot-cyan">
            EMAIL:
            <br />
            <span className="text-lg text-white">
            riotdynamics@gmail.com
            </span>
          </p>
          <p className="text-lg text-reviot-cyan">
            SOCIAL:
            <br />
            <span>
              <a
                href="https://www.facebook.com/riotdynamics"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-facebook-square"></i>
              </a>
            </span>
          </p>
        </span>
      </div>

      {/* Image Section for large screens */}
      <div className="hidden md:flex w-[50%] items-center justify-center">
        <img
          src={revAnim}
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Contacts;
