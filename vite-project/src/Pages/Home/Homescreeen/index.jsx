import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Herosection from "../Herosection";
import Myportfolio from "../Myportfolio";
import MySkills from "../Myskill";
import Testimonials from "../Testiomonial";

export default function Home(){
    return(
        <>
         <Herosection/>
         <MySkills/>
         <AboutMe/>
         <Myportfolio/>
         <Testimonials/>
         <ContactMe/>
        </>
       
        
    )
}