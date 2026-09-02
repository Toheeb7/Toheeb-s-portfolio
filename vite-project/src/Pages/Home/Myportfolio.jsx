import { Link } from 'react-router-dom'
import data from '../../data/index.json'
import { MdArrowOutward } from "react-icons/md";

export default function Myportfolio(){
    return (
        <section className='portfolio--section' id='Myportfolio'>
            <div className='portfolio--container--box'>
                <div className='portfolio--container'>
                    <p className='sub--title'>
                        Recent Works

                    </p>
                    <h1 className='section--heading'>
                        Selected Projects

                    </h1>

                </div>
                

            </div>
            <div className='portfolio--section--container'>
                
                 {
                        data?.portfolio?.map(
                            (item, index) => (
                            <div key={index} className='portfolio--section--card'>
                                <div className='portfolio--section--img'>
                                    <img src={item.src} alt="Placeholder" />

                                </div>
                                <div className='portfolio--section--card--content'>
                                    <div>
                                        <h3 className='portfolio--section--title'>
                                        {item.title}
                                        </h3>
                                        <p className='text--md'>
                                            {item.description}

                                        </p>
                                    </div>
                                   <button className='btn--star' >
                                    <Link to={"https://e-commerce-page-9kkq.vercel.app/"} className='btn--link'>Live preview
                                    <span className='arrow'><MdArrowOutward /></span></Link>
                                   </button>

                                </div>

                            </div>
                        )
                        )
                    }
                


            </div>

        </section>
)
}