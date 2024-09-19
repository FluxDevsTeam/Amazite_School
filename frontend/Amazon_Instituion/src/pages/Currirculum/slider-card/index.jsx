import arrowRight from "../../../assets/curriulum-images/Vector (13).png";

const SliderCard = ({ src, link, title }) => {
  return (
    <div>
      <div className="box-1">
        <div className="con-img">
          <img src={src} alt="" />
        </div>
        <h6>{title}</h6>

        <button className="btn">
          <a href={link} target="_blank">
            Register <img src={arrowRight} alt="" className="arrow" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
