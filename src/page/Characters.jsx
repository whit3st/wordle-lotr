import { GlobalState } from "../assets/api/GlobalState";
import Name from "../components/Name";
export default function Characters() {
    const { data } = GlobalState();
    const characters = Object.values(data.characters);
    return (
        <div className="grid grid-cols-1 gap-3 mt-10">
            <h1 className="text-2xl mb-5 font-bold">All {characters.length} Characters</h1>
            {characters.map((character) => (
                <div
                    key={character.name}
                    className="collapse collapse-arrow bg-base-200 bg-opacity-40"
                >
                    <input
                        type="checkbox"
                        name="my-accordion-2"
                    />
                    <div className="collapse-title text-xl font-medium">
                        <Name name={character.name} />
                    </div>
                    <div className="collapse-content flex flex-col gap-2">
                        <li>{character.affiliation}</li>
                        <li>{character.sex}</li>
                        <li>{character.race}</li>
                        <li>{character.position}</li>
                        <Name name="Traits" />
                        {character.traits.map((trait) => (
                            <li key={trait}>{trait}</li>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
