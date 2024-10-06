// import {motion} from "framer-motion";
//
// const variants = {
//     open:{
//         transition:{
//             staggerChildren: 0.1,
//         }
//     },
//     closed:{
//         transition:{
//             staggerChildren: 0.05,
//             staggerDirection: -1,
//         }
//     }
// }
//
// const itemVariants = {
//     open:{
//         y: 0,
//         opacity: 1,
//     },
//     closed:{
//         y: 50,
//         opacity: 0,
//     }
// }
//
// const Links = () => {
//
//     const items = ["Homepage", "Services", "Portfolio", "Contact", "Download CV"];
//
//     return (
//         <motion.div className="links" variants={variants}>
//             {
//                 items.map(item => (
//                     <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.7}}>
//                         {item}
//                     </motion.a>
//                 ))
//             }
//         </motion.div>
//     );
// };
//
// export default Links;


import {motion} from "framer-motion";

const variants = {
    open:{
        transition:{
            staggerChildren: 0.1,
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open:{
        y: 0,
        opacity: 1,
    },
    closed:{
        y: 50,
        opacity: 0,
    }
}

const Links = () => {

    const items = ["Homepage", "Services", "Portfolio", "Contact", "Download CV"];
    const isDownloadLink = (item) => item === "Download CV";

    return (
        <motion.div className="links" variants={variants}>
            {
                items.map(item => (
                    <motion.a
                        href={isDownloadLink(item) ? `${import.meta.env.BASE_URL}cv.pdf` : `#${item}`}
                        key={item}
                        variants={itemVariants}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.7}}
                        download={isDownloadLink(item) ? "cv.pdf" : undefined}  // Use the download attribute for CV
                    >
                        {item}
                    </motion.a>
                ))
            }
        </motion.div>
    );
};

export default Links;
