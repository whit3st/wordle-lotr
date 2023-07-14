import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Box from "./Box";
import Name from "./Name";
import { GlobalState } from "../assets/api/GlobalState"; 
export default function BoxContainer({
    sex,
    race,
    affiliation,
    position,
    name
}) {
    const variants = {
        initial: {
            opacity: 0,
            y: -10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                staggerChildren: 0.7,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
        },
    };
    const { data } = GlobalState();
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col gap-3 w-full justify-center items-center border border-primary-content rounded-md p-3"
        >
            <Name name={name} />
            <div className="flex w-full gap-3 justify-between">
                <Box status={sex} >{data.characters[name].sex}</Box>
                <Box status={race} >{data.characters[name].race}</Box>
                <Box status={affiliation} >{data.characters[name].affiliation.split(' ')[0]}</Box>
                <Box status={position} >{data.characters[name].position}</Box>
            </div>
        </motion.div>
    );
}

BoxContainer.propTypes = {
    sex: PropTypes.bool.isRequired,
    race: PropTypes.bool.isRequired,
    affiliation: PropTypes.bool.isRequired,
    position: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};
