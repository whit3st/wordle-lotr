import { motion } from "framer-motion";
import { variants } from "../assets/api/Data";
import Button from "../components/Button";
import Input from "../components/Input";
import { GlobalState } from "../assets/api/GlobalState";
import BoxContainer from "../components/BoxContainer";
export default function Home() {
    const { answers } = GlobalState();

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col items-center w-max h-max gap-2"
        >
            <div className="flex flex-col gap-2 items-center my-5 max-w-max sm:flex-row md:gap-10">
                <Input />
                <Button />
            </div>
            {answers.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center text-center w-full text-lg my-5 font-semibold tracking-wide">
                    <p>Sex</p>
                    <p>Race</p>
                    <p>Affiliation</p>
                    <p>Position</p>
                </div>
            )}

            <div className="flex flex-col w-full gap-2 max-h-[500px] overflow-auto no-scrollbar">
                {answers.length > 0 &&
                    answers.map((answer) => (
                        <BoxContainer
                            data={answer}
                            key={answer.name}
                            name={answer.name}
                            position={answer.position}
                            affiliation={answer.affiliation}
                            race={answer.race}
                            sex={answer.sex}
                        />
                    ))}
            </div>
        </motion.div>
    );
}
