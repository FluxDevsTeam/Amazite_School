import { NavLink } from 'react-router-dom';
import navbarLink from '../custom/data-json';
import styled from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen } from '../redux/projectSlice';
import Logo from './Logo';
const Navbar = () => {
  const { isSidebarOpen } = useSelector((store) => store.amazite);
  console.log(isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <div className="py-4 px-4 md:px-16 bg-[#2FCFDC]">
      <Wrapper className="flex justify-between items-center">
        <Logo />
        <div className="lg:flex items-center hidden lg:gap-[55px]">
          {navbarLink.map((item) => {
            const { id, text, url } = item;
            return (
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  `underline-hover ${
                    isActive
                      ? 'active text-[#EE5051] whitespace-nowrap text-[16.89px] leading-[44px] font-bold'
                      : 'text-[#363F40] text-[16.89px] whitespace-nowrap leading-[44px] font-bold'
                  }`
                }
              >
                {text}
              </NavLink>
            );
          })}
          <NavLink
            to="/contact-us"
            className="bg-[#ECB9BA] hover:bg-[#ecb9baea] whitespace-nowrap duration-300 px-[18.33px] text-[#363F40] text-[16.89px] leading-[44px] rounded-[7.11px] font-bold"
          >
            Contact us
          </NavLink>
        </div>
        <button
          type="button"
          onClick={() => dispatch(setIsSidebarOpen())}
          className="text-[#363F40] block lg:hidden text-3xl hover:text-[#EE5051] duration-500 cursor-pointer outline-none"
        >
          <HiOutlineMenu />
        </button>
      </Wrapper>
    </div>
  );
};
export default Navbar;
const Wrapper = styled.nav`
  .underline-hover {
    position: relative;
    display: inline-block;
  }

  .underline-hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0px;
    width: 100%;
    height: 3px;
    background-color: #ee5051;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
  }

  .underline-hover.active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
