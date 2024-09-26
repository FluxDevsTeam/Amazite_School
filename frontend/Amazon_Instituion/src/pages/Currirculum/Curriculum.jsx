import "./curriculum.css";
import kindergarten from "../../assets/curriulum-images/kindergarten.png";
import image12 from "../../assets/curriulum-images/image 12.png";
import image1 from "../../assets/curriulum-images/image1.png";
import image2 from "../../assets/curriulum-images/image2.png";
import image from "../../assets/curriulum-images/image.png";
import image3 from "../../assets/curriulum-images/image3.png";
import image4 from "../../assets/curriulum-images/image4.png";
import image5 from "../../assets/curriulum-images/image5.png";
import image6 from "../../assets/curriulum-images/image6.png";
import image7 from "../../assets/curriulum-images/image-7.png";
import image8 from "../../assets/curriulum-images/image8.png";
import image9 from "../../assets/curriulum-images/image9.png";
import image10 from "../../assets/curriulum-images/image10.png";
import image11 from "../../assets/curriulum-images/image11.png";
import image13 from "../../assets/curriulum-images/image13.png";
import image14 from "../../assets/curriulum-images/image14.png";
import arrowRight from "../../assets/curriulum-images/Vector (13).png";
import next_btn from "../../assets/curriulum-images/next-btn.png";

const Curriculum = () => {
  return (
    <div className="container">
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

      <div className="container-1">
        <div className="horizontal-line"></div>
        <h2>Course Overview</h2>

        <div className="container-courses">
          <h2>Kindergarten Courses</h2>
          <div className="courses">
            <div className="box-1">
              <div className="con-img">
                <img src={image12} alt="" />
              </div>

              <h6>Basic Mathematics</h6>
              <button className="btn">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image1} alt="" />
              </div>
              <h6>Identification of Shapes and Objects</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image2} alt="" />
              </div>
              <h6>English: Phonics and word recognition</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <img src={next_btn} alt="" className="next" />
          </div>

          <h2>Grade 1 Courses</h2>
          <div className="courses">
            <div className="box-1">
              <div className="con-img">
                <img src={image} alt="" />
              </div>

              <h6>Mathematics: Addition, Subtraction, e.t.c</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image3} alt="" />
              </div>
              <h6>English Language: Vocabulary Building.</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image4} alt="" />
              </div>
              <h6>Social studies</h6>
              <button className="btn">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <img src={next_btn} alt="" className="next" />
          </div>

          <h2>Grade 2 Courses</h2>
          <div className="courses">
            <div className="box-1">
              <div className="con-img">
                <img src={image5} alt="" />
              </div>

              <h6>Mathematics</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image6} alt="" />
              </div>
              <h6>Critical Thinking</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image7} alt="" />
              </div>
              <h6>English Language</h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <img src={next_btn} alt="" className="next" />
          </div>

          <h2>Grade 3 Courses</h2>
          <div className="courses">
            <div className="box-1">
              <div className="con-img">
                <img src={image8} alt="" />
              </div>

              <h6>
                Mathematics: Understanding fractions and their representation
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image9} alt="" />
              </div>
              <h6>
                Science: Conversational fluency and writing longer texts in
                French.
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image10} alt="" />
              </div>
              <h6>
                French: Conversational fluency and writing longer texts in
                French.
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <img src={next_btn} alt="" className="next" />
          </div>

          <h2>Grade 1 Courses</h2>
          <div className="courses">
            <div className="box-1">
              <div className="con-img">
                <img src={image11} alt="" />
              </div>

              <h6>
                English Language: Reading comprehension, Writing essays with a
                clear structure{" "}
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image13} alt="" />
              </div>
              <h6>
                French: Understanding French grammar.Exploring French-speaking
                culture
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <div className="box-1">
              <div className="con-img">
                <img src={image14} alt="" />
              </div>
              <h6>
                Social Studies: In-depth study of U.S. history, significant
                events and movements e.t.c
              </h6>
              <button className="btn btn-1">
                Register <img src={arrowRight} alt="" className="arrow" />
              </button>
            </div>

            <img src={next_btn} alt="" className="next" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Curriculum;
