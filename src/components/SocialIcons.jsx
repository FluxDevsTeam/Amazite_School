import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import logo from '../assets/whatsapp_logo.png';
import clsx from 'clsx';
const SocialIcons = ({ className, imgClassName }) => {
  return (
    <div className={clsx(className)}>
      <FaFacebook className="text-[#1877F2]" />
      <FaSquareXTwitter />
      <FaLinkedin style={{ color: '#0A66C2' }} />
      <img src={logo} alt="" className={clsx(imgClassName)} />
    </div>
  );
};
export default SocialIcons;
