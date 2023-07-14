import Button from "../components/Button";
import Input from "../components/Input";
import { GlobalState } from "../assets/api/GlobalState";
import BoxContainer from "../components/BoxContainer";
export default function Home() {
    const { answers } = GlobalState();

    return (
        <div className="flex flex-col items-center w-max h-max gap-2">
            <div className="flex flex-col gap-2 items-center my-5 max-w-max sm:flex-row sm:gap-10">
                <Input />
                <Button />
            </div>
            {answers.length > 0 && (
                <div className="grid grid-cols-4 items-center text-center w-full text-lg my-5">
                    <p>Sex</p>
                    <p>Race</p>
                    <p>Affiliation</p>
                    <p>Position</p>
                </div>
            )}

            <div className="flex flex-col w-full gap-2">
                {answers.length > 0 &&
                answers.map((answer) => (
                    <BoxContainer
                        data={answer}
                        key={answer.name}
                        name={answer.name}
                        position={answer.position}
                        affiliation={answer.affiliation}
                        race={answer.race}
                        sex={answer.sex}
                    />
                ))}
                </div>
        </div>
    );
}
