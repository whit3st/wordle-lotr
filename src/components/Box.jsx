import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { variants } from "../assets/api/Data";
export default function Box({ status, children }) {
    
    return (
        <motion.div
            variants={variants}
            className={
                "flex flex-col items-center justify-center font-semibold text-xs w-[130px] text-center px-1 tracking-wide break-words h-[60px] shadow-sm rounded-md " +
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
