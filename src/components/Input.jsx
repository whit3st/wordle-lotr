import { GlobalState } from "../assets/api/GlobalState";
import { writeAnswer } from "../assets/api/Data";
export default function Input() {
    const { setUserInput, userInput, data, currentCharacter, setAnswers, answers } =
        GlobalState();
    const enterHandler = (e) => {
        if (e.key === "Enter" && userInput) {
            writeAnswer(data, userInput, currentCharacter, setAnswers, answers)
            e.target.value = ''
            if (window.outerWidth < 768) {
                e.target.blur()
            }
        }
    };
    const inputHandler = (e) => {
        setUserInput(e.target.value);
    };
    return (
        <input
            onKeyUp={(e) => enterHandler(e)}
            onChange={(e) => inputHandler(e)}
            type="text"
            id="text"
            name="text"
            placeholder="Lotrdle!"
            autoComplete="off"
            className="input input-secondary text-primary-content font-semibold input-sm md:input-md md:text-lg border border-primary-content"
        />
    );
}
