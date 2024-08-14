// import "./services.scss";
// import {motion, useInView} from "framer-motion";
// import FrontendFlow from "../FlowComponents/FrontendFlow.jsx";
// import BackendFlow from "../FlowComponents/BackendFlow.jsx";
// import UiFlow from "../FlowComponents/UIFlow.jsx";
// import {useRef} from "react";
//
// const variant = {
//     initial:{
//         x: -500,
//         y: 0,
//         opacity: 0,
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition:{
//             duration: 1,
//             staggerChildren: 0.1,
//         }
//     }
// }
//
// const Services = () => {
//
//     const ref = useRef();
//     const isInView = useInView(ref, {margin : "-100px"})
//
//     return (
//         <motion.div className="services" variants={variant} initial="initial" animate={isInView && "animate"} ref={ref}>
//             <motion.div className="textContainer" variants={variant}>
//                 <hr/>
//                 <div className="text">
//                     <div className="text1">
//                         We are
//                     </div>
//                     <div className="text2">
//                         <span>designing the future</span>
//                         <span>Developing the present</span>
//                     </div>
//                 </div>
//                 <hr/>
//             </motion.div>
//             <motion.div className="titleContainer" variants={variant}>
//                 <div className="title">
//                     <h1>All you need in <b>one place</b></h1>
//                 </div>
//                 <div className="title">
//                     <h1>Let's <b>transform your feelings into reality</b> through the following</h1>
//                 </div>
//             </motion.div>
//             <motion.div className="listContainer" variants={variant}>
//                 <motion.div className="box">
//                     <FrontendFlow/>
//                 </motion.div>
//                 <motion.div className="box">
//                     <BackendFlow/>
//                 </motion.div>
//                 <motion.div className="box">
//                     <UiFlow/>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// };
//
// export default Services;




import "./services.scss";
import {motion, useInView} from "framer-motion";
import FrontendFlow from "../FlowComponents/FrontendFlow.jsx";
import BackendFlow from "../FlowComponents/BackendFlow.jsx";
import UiFlow from "../FlowComponents/UIFlow.jsx";
import {useRef} from "react";

const variant = {
    initial:{
        x: -200,
        y: 0,
        opacity: 0,
    },
    animate:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

    return (
        <motion.div className="services" variants={variant} initial="initial" animate={isInView ? "animate" : "initial"} ref={ref}>
            <motion.div className="textContainer" variants={variant}>
                <hr/>
                <div className="text">
                    <div className="text1">
                        We are
                    </div>
                    <div className="text2">
                        <span>designing the future</span>
                        <span>Developing the present</span>
                    </div>
                </div>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variant}>
                <div className="title">
                    <h1>All you need in <b>one place</b></h1>
                </div>
                <div className="title">
                    <h1>Let's <b>transform your feelings into reality</b> through the following</h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variant}>
                <motion.div className="box">
                    <FrontendFlow/>
                </motion.div>
                <motion.div className="box">
                    <BackendFlow/>
                </motion.div>
                <motion.div className="box">
                    <UiFlow/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
