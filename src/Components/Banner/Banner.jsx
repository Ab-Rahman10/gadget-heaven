import BannerBg from "../BannerBg/BannerBg";

const Banner = ({ title, subtitle, btnText }) => {
  return (
    <div className=" ">
      <div className="pt-14 bg-customColor rounded-br-3xl rounded-bl-3xl mx-2 md:mx-8 pb-28 md:pb-72">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white leading-tight w-[400px] md:w-[1120px] mx-auto">
          {title}
        </h1>
        <p className="text-sm md:text-base text-center mt-6 mb-8 text-white/90  md:w-[796px] mx-auto">
          {subtitle}
        </p>
        <div className="text-center">
          <button className="text-base md:text-xl font-bold py-1.5 md:py-3 px-3 md:px-7 bg-white rounded-full text-customColor">
            {btnText}
          </button>
        </div>
      </div>
      <BannerBg></BannerBg>
    </div>
  );
};

export default Banner;
