import data from "../../data/index.json"

export default function Testimonials (){
    console.log(data)
    return(
        <section className="testimonial--section" id="testimonial">
                <div className="portfolio--container-box">
                    <div className="portfolio--container">
                        <p className="sub--title">
                            Clients Feedback
                        </p>
                        <h2 className="sections--heading">
                            Customer Feedback

                        </h2>
                    

                    </div>

                </div>
           <div className="portfolio--section--container">
    {data.testimonial.map((item, index) => (
        <div key={index} className="testimonial--section--card">

            <div className="testimonial--section--card--review">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                ))}
            </div>

            <p className="text--md">{item.description}</p>

            <div className="testimonial--section--card--author--detail">
                <img src={item.src} alt="Avatar" />

                <div>
                    <p className="text--md--testimonial--author--name">
                        {item.author_name}
                    </p>

                    <p className="text--md--testimonial--author--designation">
                        {item.author_designation}
                    </p>
                </div>
            </div>

        </div>
    ))}
</div>
               
        </section>
    )
}