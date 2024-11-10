const Subscribe = () => {
  return (
    <div className="text-[#363F40] max-w-[658px] mx-auto w-full mb-10">
      <h2 className="font-medium text-lg xl:text-xl">
        Subscribe to our newsletter
      </h2>

      <div className="w-full flex gap-2 max-w-[658px] bg-[#F1F1F1] rounded-[16px] px-4 py-4 md:px-[49px]">
        <input
          type="text"
          name="newsletter"
          placeholder="Enter your email"
          className="outline-none flex-1 bg-transparent"
        />
        <button
          type="button"
          aria-label="subscribe"
          className="px-3 bg-[#ECB9BA]  montaga rounded-[10px] py-1"
          style={{
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
