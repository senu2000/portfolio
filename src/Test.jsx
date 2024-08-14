import {motion} from "framer-motion";
import "./components/navbar/navbar.scss";

const Test = () => {
    return (
        <div className="course">
            <motion.div className="box"
                        initial={{opacity:0.5, scale:0.5}}
                        // animate={{opacity:1, scale:1, x:200, y:200}}
                        transition={{duration:2}}
                        // whileHover={{opacity:1, scale:2}}
                        drag
            >
            </motion.div>
        </div>
    );
};

export default Test;