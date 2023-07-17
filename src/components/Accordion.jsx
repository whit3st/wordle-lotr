/* eslint-disable react/prop-types */
import { useState } from "react";
import Name from "./Name";
export default function Accordion({ character }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col w-full">
            <div
                className="text-2xl md:text-3xl font-semibold text-center py-2 bg-secondary rounded-t-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {character.name}
            </div>
            {isOpen && (
                <div className="flex font-semibold md:text-lg flex-col gap-2 bg-secondary rounded-b-md transition-all p-5">
                    <li>{character.affiliation}</li>
                    <li>{character.sex}</li>
                    <li>{character.race}</li>
                    <li>{character.position}</li>
                    <Name name="Traits" />
                    {character.traits.map((trait) => (
                        <li key={trait}>{trait}</li>
                    ))}
                </div>
            )}
        </div>
    );
}

