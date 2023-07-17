import { GlobalState } from "../assets/api/GlobalState";
import Accordion from "../components/Accordion";
export default function Characters() {
    const { data } = GlobalState();
    const characters = Object.values(data.characters);
    return (
        <div className="grid grid-cols-1 gap-3 my-10 w-full">
            <h1 className="text-2xl mb-5 font-bold">All {characters.length} Characters</h1>
            {characters.map((character) => (
                <Accordion key={character.name} character={character} />
            ))}

            
        </div>
    );
}
