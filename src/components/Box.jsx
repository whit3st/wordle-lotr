import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function Box({ status, children }) {
    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.4,
            },
        },
        exit: {
            opacity: 0,
        },
    };
    return (
        <motion.div
            variants={variants}
            className={
                "flex items-center justify-center font-semibold tracking-wide px-3 w-[120px] h-[60px] shadow-sm rounded-md " +
                (status
                    ? "bg-success bg-opacity-100"
                    : "bg-error bg-opacity-100")
            }
        >
            {children}
        </motion.div>
    );
}

Box.propTypes = {
    status: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
};
