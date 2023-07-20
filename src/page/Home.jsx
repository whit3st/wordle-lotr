import { motion } from "framer-motion";
import { variants } from "../assets/api/Data";
import { GlobalState } from "../assets/api/GlobalState";
import YouWonModal from "../components/YouWonModal";
import InputContainer from "../components/InputContainer";
import Classifications from "../components/Classifications";
import Results from "../components/Results";
export default function Home() {
    const { won } = GlobalState();

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col items-center w-max h-max gap-2"
        >
            <InputContainer />
            <Classifications />
            <Results />
            {!won ? '' : <YouWonModal />}
        </motion.div>
    );
}
