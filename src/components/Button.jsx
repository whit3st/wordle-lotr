import { writeAnswer } from "../assets/api/Data";
import { GlobalState } from "../assets/api/GlobalState";
export default function Button() {
    const { data, userInput, currentCharacter, setAnswers, answers } =
        GlobalState();

    const clickHandler = () => {
        if (userInput) {
            writeAnswer(data, userInput, currentCharacter, setAnswers, answers)
        }
    };
    return (
        <button
            id="button"
            aria-label="button"
            onClick={(e) => clickHandler(e)}
            className="btn btn-secondary btn-sm text-xs md:btn-md border border-primary-content"
        >
            Lotrdle!
        </button>
    );
}
