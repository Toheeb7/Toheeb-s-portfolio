import data from "../../data/index.json";

export default function MySkills() {
  return (
    <div id="myskills" className="hero--section--content--box--file">
      <div className="message">
        <h1>My Expertise</h1>
      </div>

      <div className="my--Expertise">
        <h5>
          HTML
          <i class="devicon-html5-plain colored"></i>
        </h5>
        <h5>
          CSS
          <i class="devicon-css3-plain colored"></i>
        </h5>

        <h5>
          BOOTSTRAP
          <i class="devicon-bootstrap-plain colored"></i>
        </h5>

        <h5>
          JAVASCRIPT
          <i class="devicon-javascript-plain colored"></i>
        </h5>

        <h5>
          REACT
          <i class="devicon-react-original colored"></i>
        </h5>
        <h5>
          NODE
          <i class="devicon-nodejs-plain colored"></i>
        </h5>
        <h5>
          EXPRESS
          <i class="devicon-express-original"></i>
        </h5>
      </div>
    </div>
  );
}
