import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex  justify-between mt-10 text-center w-1/4 m-auto">
      <div className="mx-2 text-red-400">
        <FaInstagramSquare />{" "}
      </div>
      <div className="mx-2 text-blue-600">
        <FaFacebookSquare />
      </div>
      <div className="mx-2 text-blue-800">
        <FaLinkedin />
      </div>
      <div className="mx-2 text-green-400">
        <FaSquareWhatsapp />
      </div>
    </div>
  );
};

export default Socials;
