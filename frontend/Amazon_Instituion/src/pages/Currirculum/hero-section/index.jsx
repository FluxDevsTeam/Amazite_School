import kindergarten from "../../../assets/curriulum-images/kindergarten.png";

const Hero = () => {
  return (
    <div>
      {" "}
      <h1 className="heading">Welcome to Our Elementary School Curriculum!</h1>
      <div className="row">
        <div className="row-1">
          <img src={kindergarten} alt="" />
        </div>
        <div className="row-2">
          <h1> At Amazite Int’ Academy</h1>
          <p>
            Our curriculum for Kindergarten through Grade 5 covers a diverse
            range of subjects to help students build a solid foundation and
            prepare for future academic success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
