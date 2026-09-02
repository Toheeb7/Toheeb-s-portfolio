 
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

            
         
        </section>
    )
}

export default Herosection;