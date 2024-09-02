import { setIsSidebarOpen } from '../redux/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';
import navbarLink from '../custom/data-json';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
const SideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.amazite);
  const dispatch = useDispatch();
  return (
    <Wrapper
      className={clsx(
        ``,
        isSidebarOpen &&
          'fixed right-0 top-0 z-30 h-screen w-full bg-[rgba(18,27,25,0.63)] backdrop-blur-sm duration-300 ease-in-out'
      )}
    >
      <div
        className={clsx(
          `fixed bottom-0 right-0 top-0 z-50 h-lvh md:w-[40%] p-[10px] w-[80%]  bg-stone-50 duration-300 ease-in-out`,
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-10">
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => dispatch(setIsSidebarOpen())}
              className="text-[#363F40]  block lg:hidden text-3xl hover:text-[#EE5051] duration-500 cursor-pointer outline-none"
            >
              <IoClose />
            </button>
          </div>

          <ul className="flex-col pl-7 flex gap-7">
            {navbarLink.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id} className="">
                  <NavLink
                    key={id}
                    to={url}
                    onClick={() => dispatch(setIsSidebarOpen())}
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
                </li>
              );
            })}
            <li>
              <NavLink
                to="/contact-us"
                onClick={() => dispatch(setIsSidebarOpen())}
                className="bg-[#ECB9BA] hover:bg-[#ecb9baea] py-3 whitespace-nowrap duration-300 px-[18.33px] text-[#363F40] text-[16.89px] leading-[44px] rounded-[7.11px] font-bold"
              >
                Contact us
              </NavLink>
            </li>
            <SocialIcons />
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default SideBar;

const Wrapper = styled.aside`
  .underline-hover {
    position: relative;
    display: inline-block;
  }

  .underline-hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
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
