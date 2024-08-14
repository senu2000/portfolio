import "./cursor.scss"
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const mouseEvent = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", mouseEvent);

        return () => {
            window.removeEventListener("mousemove", mouseEvent);
        }

    },[])

    return (
        <motion.div className="cursor" animate={{x: position.x, y:position.y}}>

        </motion.div>
    );
};

export default Cursor;