import { useEffect } from "react";
import { GlobalState } from "../assets/api/GlobalState";
import { checkMatch } from "../assets/api/Data";
export default function YouWonModal() {
    const { data, userInput } = GlobalState();
    const match = checkMatch(data.names, userInput);
    useEffect(() => {
        document.getElementById("modal").classList.add('opacity-100')
        setTimeout(() => {
            document.getElementById("modal").classList.remove('opacity-100')
        }, 4500);
    })
    




    return (
        <div
            id="modal"
            className="flex flex-col gap-8 font-semibold text-center items-center opacity-0 absolute top-[50%] left-[50%] duration-700 translate-x-[-50%] translate-y-[-50%] transition-all bg-white bg-opacity-80 px-5 md:px-10 py-3 md:py-5 rounded-lg "
        >
            <h1 className="text-2xl md:text-5xl">Congratulations!</h1>
            <h2 className="text-xl md:text-4xl">You Won!</h2>
            <h3 className="text-lg md:text-2xl">Today&apos;s character is {match[0]}.</h3>
        </div>
    );
}
