 function Herosection(){
    return (
        <section id="Herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey i'm Bello Toheeb</p>
                    <h1 className="hero--section--title"> 
                        <span className="hero--section--title--color">
                            Full stack
                        </span> <br />
                            Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab inventore, eius labore atque quaer <br />
                          Quam deserunt eveniet ullam?
                    </p>

                </div>
                <button className="btn btn-primary">
                    Get in Touch
                </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/avatar-image-1.png" alt="hero section" />
            </div>
        </section>
    )
}

export default Herosection;