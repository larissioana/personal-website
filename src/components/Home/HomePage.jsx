import { useState } from "react";
import profileImg from '../../assets/photo-bianca.jpg';
import {motion} from 'framer-motion';
import {HomeContainer, Button} from './homeStyle';
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop";
import { titleAnim, titleAnim1, pageAnimation, fade, fade1, photoAnim} from "../../animation";

const HomePage = () => {
    const[readMore,setReadMore]=useState(false);
    const info=' I am a fourth year Prae-Doc university assistant in the Observational Extragalactic Astrophysics research group at the University of Vienna, Department of Astrophysics. My main research focus is galaxy formation and evolution, with a special emphasis on galaxies located in high-density environments, such as galaxy clusters. I mainly use 3D spectroscopic observations in conjunction with other multi-wavelength data to study the interplay between galaxy evolution and the environment. I am also involved in teaching and supervising students.';
   
    const toggleOnClickText = () => {
        setReadMore(!readMore);
    };

    return(
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <HomeContainer>
        <div className="home-container">
        <div className="description-container">
        <motion.h1 variants={titleAnim1}>Bianca I.</motion.h1>
        <motion.h1 variants={titleAnim}>Ciocan PhD</motion.h1>
        <motion.p variants={fade} initial='hidden' animate='show'>
         {readMore? info:`${info.substring(0,300)}...`}
        </motion.p>
        <Button variants={fade1} initial='hidden' animate='show'onClick={toggleOnClickText}>
        {readMore? 'Show Less':'Read More'}</Button>
        </div>
        <div className="img-container">
        <motion.img variants={photoAnim} initial='hidden' animate='show' src={profileImg} alt='profile portrait'/>
        </div>
        </div>
        </HomeContainer>
        <Footer/>
        <ScrollTop/>
        </motion.div>
      )
  };
  export default HomePage;