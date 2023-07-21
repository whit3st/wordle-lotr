import { GlobalState } from "../assets/api/GlobalState";

const CharacterTitle = () => {
    const { data } = GlobalState();
    const characters = Object.values(data.characters);

    return (
        <h1 className="text-2xl mb-5 font-bold">
            All {characters.length} Characters
        </h1>
    );
};

export default CharacterTitle;
