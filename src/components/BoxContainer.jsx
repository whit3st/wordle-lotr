import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { variants } from "../assets/api/Data";
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
    
    const { data } = GlobalState();
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col w-full justify-center items-center border border-primary-content rounded-md gap-5 py-5 bg-white bg-opacity-10"
        >
            <Name name={name} />
            <div className="grid grid-cols-2 md:grid-cols-4 w-full justify-between gap-5">
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
