import { MdArrowOutward } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Herosection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <div className="hero--section--title--color">
              <div className="bello">Hi, I'm</div> Bello Toheeb.
            </div>
          </h1>
          <div className="bio-ideas">
            <h3>
              <div className="effect">
                <Typewriter
                  options={{
                    strings: [
                      "Full-stack Developer ",
                      "Software Engineer",
                      "Video Editor",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h3>

            <div className="nawa">
              <p>
                I build digital experiences with the sole purpose of bringing
                your imagination to life. Contributing to the development of
                technology and making life easier
              </p>
            </div>
          </div>
          <div className="btn--group">
            <button className="btn-g btn-view">
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Myportfolio"
              >
                view projects <MdArrowOutward />
              </Link>
            </button>
            <button className="btn-g btn-start">
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
              >
                start a project <MdArrowOutward />
              </Link>
            </button>
          </div>
        </div>

        <div className="float-card float-card-1">
          <ul>
            <li>const [shipping,setshipping]=useState(true)</li>
            <li>6.32452°N 3.534637°E--lagos,</li>
            <li>designed in the browser.built for the world</li>
          </ul>
        </div>

        <div className="float-card float-card-2">
          <ul>
            <li>i turn your ideas into creative impact,</li>
            <li>role fullstack engineer</li>
            <li>code is just typed thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
