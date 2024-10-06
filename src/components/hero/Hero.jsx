import "./hero.scss";
import {motion} from "framer-motion";

const textVarians = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition: {
            duration: 3,
            repeat: Infinity,
            type: "spring",
        }
    }
}

const sliderVarians = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 100,
        }
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVarians} initial="initial" animate="animate">
                    <motion.h2 variants={textVarians}>SENURA ADITHYA</motion.h2>
                    <motion.h1 variants={textVarians}>Full Stack Developer and <br/> UI Designer</motion.h1>
                    <motion.div className="buttons" variants={textVarians}>
                        <a href="#Portfolio"><motion.button variants={textVarians}>See My Latest Works</motion.button></a>
                        <a href="#Contact"><motion.button variants={textVarians}>Contact Me</motion.button></a>
                    </motion.div>
                    <motion.img src="" alt="" variants={textVarians} animate="scrollButton"/>
                    {/*{`${import.meta.env.BASE_URL}scroll.png`}*/}
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVarians} initial="initial" animate="animate">
                Designing the future | Developing the present.
            </motion.div>
            <div className="imageContainer">
                <img src={`${import.meta.env.BASE_URL}dp.png`} alt=""/>
            </div>
        </div>
    );
};

export default Hero;