 
 import Typewriter from "typewriter-effect"

 function Herosection(){
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

                       <h3><div className="effect">
                    <Typewriter options={{
                        strings:["Full-stack Developer ","Software Engineering student","Video Editor"],
                        autoStart:true,
                        loop:true,
                    }}/>    
                    </div></h3> 
                      
                    <div className="nawa">
                    <p>
                        I build digital experiences
                        with the sole purpose of bringing your imagination to life. Contributing to the development of technology and making life easier</p>
                        </div>
                    
                </div>
                <button className="btn btn-primary">
                    Open to job opportunities
                </button>
                     </div>         
                 
            </div>

            <div className="hero--section--content--box--file">
                        <div className="my--Expertise">
                           <h3>
                            
                            HTML
                             <i class="devicon-html5-plain colored"></i>
                            </h3>
                           
                           <h3>
                           
                            BOOTSTRAP
                             <i class="devicon-bootstrap-plain colored"></i>
                            </h3>
                           
                           <h3>
                            REACT
                            <i class="devicon-react-original colored"></i>
                            </h3>
                           
                           <h3>
                            EXPRESS
                            <i class="devicon-express-original"></i>

                            </h3>
                           
                           <h3>VS.CODE
                            <i class="devicon-vscode-plain colored"></i>
                           </h3>
                        </div>
                          <div className="my--Expertise">
                           
                           <h3>CSS
                            <i class="devicon-css3-plain colored"></i>
                           </h3>
                           
                           <h3>JAVASCRIPT
                              <i class="devicon-javascript-plain colored"></i>
                           </h3>
                           
                           <h3>
                            NODE
                              <i class="devicon-nodejs-plain colored"></i>
                           </h3>
                           
                           <h3>GIT<i class="devicon-git-plain colored"></i>
                           </h3>
                           
                        </div>
            </div>
         
        </section>
    )
}

export default Herosection;