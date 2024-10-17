import { revAnim } from "./FetchImages";
import { FaPhoneVolume, FaSquareInstagram, FaFacebook, FaXTwitter, FaLinkedin} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contacts() {
    const handleEmailClick = () => {
      window.location.href = "mailto:riotdynamics@gmail.com";
    };
  
    const handleCallClick = () => {
      window.location.href = "tel:+254799065381";
    };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen md:bg-none bg-cover bg-center bg-no-repeat font-garet"
    style={{
      backgroundImage: `url(${revAnim})`, // Inline style for dynamic background image
    }}>
      {/* Text Section */}
      <div className="flex flex-col w-full md:w-[50%] min-h-[100vh] p-6 bg-reviot-blue bg-opacity-95 md:bg-opacity-100 justify-evenly text-white">
        <h2 className="text-3xl font-bold text-reviot-cyan">Let's Work together!</h2>
        <button className="rounded-full w-32 h-12 text-reviot-cyan border border-reviot-cyan"
        onClick={handleEmailClick}> Contact Us </button>

        <span className="flex flex-col gap-5 p-2">
          <p className="text-lg text-reviot-cyan">
            PHONE:
            <br />
            <span className="flex gap-2 items-center text-lg text-white">+254799 065 381  <i onClick={handleCallClick} className="text-xl"><FaPhoneVolume /></i></span>
          </p>
          <p className="text-lg text-reviot-cyan">
            EMAIL:
            <br />
            <span className="flex gap-2 text-lg text-white items-center">
            riotdynamics@gmail.com  <i onClick={handleEmailClick} className="text-xl"><MdEmail /></i>
            </span>
          </p>
          <p className="text-lg text-reviot-cyan">
            SOCIAL:
            <br />
            <span className="flex gap-2">
                <a href="https://www.instagram.com/reviotdynamics/"><FaSquareInstagram /></a>
                <a href="https://www.facebook.com/people/Reviot-Dynamics/61566817934890/"><FaFacebook /></a>
                <a href="https://www.linkedin.com/company/reviot-dynamics-ltd"><FaLinkedin /></a>
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
