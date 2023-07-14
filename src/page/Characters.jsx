import { GlobalState } from "../assets/api/GlobalState";
import { motion } from "framer-motion";
import { variants } from "../assets/api/Data";
import Name from "../components/Name";
export default function Characters() {
    const { data } = GlobalState();
    const characters = Object.values(data.characters);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex flex-col"
        >
            <h1 className="text-4xl self-start my-5 font-bold">Characters</h1>
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-3 mt-5 w-full">
                {characters.map((character) => (
                    <div
                        key={character.name}
                        className="flex w-full flex-col gap-1 rounded-lg px-3 py-2 bg-white bg-opacity-30"
                    >
                        <Name name={character.name} />
                        <li>{character.affiliation.split(" ")[0]}</li>
                        <li>{character.sex}</li>
                        <li>{character.race}</li>
                        <li>{character.position}</li>
                        <h2 className="text-xl font-semibold">Traits</h2>
                        {character.traits.map((trait) => (
                            <li key={trait}>{trait}</li>
                        ))}
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
