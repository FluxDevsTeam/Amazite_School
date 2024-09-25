const Header = ({ header }) => {
  return (
    <div>
      <h3 className="capitalize text-2xl md:text-3xl lg:mb-2 text-[#363F40] font-medium roboto">
        {header}
      </h3>
    </div>
  );
};
export default Header;
