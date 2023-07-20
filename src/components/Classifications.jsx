import { GlobalState } from "../assets/api/GlobalState";

const Classifications = () => {
    const { answers } = GlobalState();
    return (
        <div>
            {answers.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center text-center w-full text-lg my-5 font-semibold tracking-wide">
                    <p>Sex</p>
                    <p>Race</p>
                    <p>Affiliation</p>
                    <p>Position</p>
                </div>
            )}
        </div>
    );
};

export default Classifications;
