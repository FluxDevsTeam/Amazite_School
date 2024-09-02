import { NavLink } from 'react-router-dom';
import {
  footerLastPart,
  footerLinks,
  footerLinksMobile,
} from '../custom/data-json';
import styled from 'styled-components';
import Logo from './Logo';
const Footer = () => {
  return (
    <footer className="w-full bg-[#2FCFDC] py-4">
      <div className="max-w-[968px]  mx-auto  px-20 hidden md:flex items-center flex-col gap-12">
        <div className="w-full flex justify-between">
          {footerLinks.map((item) => {
            const { id, header, subLinks } = item;
            return (
              <Wrapper key={id} className="flex flex-col gap-6">
                <h4 className="capitalize montaga text-xl ">{header}</h4>
                <div className="flex flex-col gap-2">
                  {subLinks.map((link) => {
                    const { id, text, url } = link;
                    return (
                      <li key={id} className="">
                        <NavLink
                          to={url}
                          className={`underline-hover hover:text-[#EE5051] duration-500 inter text-sm`}
                        >
                          {text}
                        </NavLink>
                      </li>
                    );
                  })}
                </div>
              </Wrapper>
            );
          })}
        </div>
        <div className="w-full">
          {footerLastPart.map((item) => {
            const { id, header, subLinks } = item;
            const year = new Date().getFullYear();
            return (
              <ul
                key={id}
                className="w-full flex flex-col items-center gap-4 text-sm inter"
              >
                <h4 className="">@{year + ' ' + header}</h4>
                <div className="flex gap-4 text-center">
                  {subLinks.map((item) => {
                    return <li className="cursor-pointer">{item}</li>;
                  })}
                </div>
              </ul>
            );
          })}
        </div>
        <Logo />
      </div>

      <div className="px-8 py-4 flex flex-col gap-5 md:hidden items-center">
        <Logo />
        <div className="grid grid-cols-2 w-full justify-center gap-x-16 gap-y-6">
          {footerLinksMobile.map((item) => {
            const { id, header, subLinks } = item;
            return (
              <Wrapper key={id} className="flex flex-col gap-3">
                <h4 className="capitalize montaga text-xl font-medium">
                  {header}
                </h4>
                <div className="flex flex-col gap-2">
                  {subLinks.map((link) => {
                    const { id, text, url, icon } = link;
                    return (
                      <li key={id} className=" ">
                        <div className="underline-hover capitalize hover:text-[#EE5051] duration-500">
                          <NavLink
                            to={url}
                            className={`flex items-center gap-3 inter text-sm`}
                          >
                            <span className="">{text}</span>
                            {icon && <span>{icon}</span>}
                          </NavLink>
                        </div>
                      </li>
                    );
                  })}
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="w-full">
          {footerLastPart.map((item) => {
            const { id, header, subLinks } = item;
            const year = new Date().getFullYear();
            return (
              <ul
                key={id}
                className="w-full flex flex-col items-center gap-2 text-xs inter"
              >
                <h4 className="whitespace-nowrap">@{year + ' ' + header}</h4>
                <div className="flex gap-2 text-center">
                  {subLinks.map((item) => {
                    return (
                      <li className="cursor-pointer whitespace-nowrap">
                        {item}
                      </li>
                    );
                  })}
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const Wrapper = styled.ul`
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

  .underline-hover:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .underline-hover.active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
