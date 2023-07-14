import { GlobalState } from "../assets/api/GlobalState";
import { writeAnswer } from "../assets/api/Data";
export default function Input() {
    const { setUserInput, userInput, data, currentCharacter, setAnswers, answers } =
        GlobalState();
    const enterHandler = (e) => {
        if (e.key === "Enter" && userInput) {
            writeAnswer(data, userInput, currentCharacter, setAnswers, answers)
            e.target.value = ''
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
            className="input input-primary bg-primary input-sm sm:input-md sm:text-lg border border-primary-content"
        />
    );
}
