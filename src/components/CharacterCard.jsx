import { GlobalState } from "../assets/api/GlobalState";

const CharacterCard = () => {
    const { data } = GlobalState();
    const characters = Object.values(data.characters);

    return (
        <div className="swipe flex gap-1 overflow-x-auto max-w-[900px] py-5 px-1">
            {characters.map((character) => (
                <div key={character.name} className="flex flex-col font-semibold bg-white bg-opacity-50 gap-2 px-5 py-3 rounded-md min-w-[300px] max-w-[300px]">
                    <h1 className="text-3xl font-semibold">{character.name}</h1>
                    <h1>{character.sex}</h1>
                    <h1>{character.race}</h1>
                    <h1>{character.affiliation}</h1>
                    <h1>{character.position}</h1>                    
                </div>
            ))}
        </div>
    );
};

export default CharacterCard;
