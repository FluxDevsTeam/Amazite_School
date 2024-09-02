import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import logo from '../assets/whatsapp_logo.png';
const SocialIcons = () => {
  return (
    <div className="text-[20px] gap-4 flex">
      <FaFacebook className="text-[#1877F2]" />
      <FaSquareXTwitter />
      <FaLinkedin style={{ color: '#0A66C2' }} />
      <img src={logo} alt="" className="w-[20px] h-[20px]" />
    </div>
  );
};
export default SocialIcons;
