import { GlobalState } from "../assets/api/GlobalState";
import BoxContainer from "../components/BoxContainer";

const Results = () => {
    const { answers } = GlobalState();
  return (
    <div className="flex flex-col w-full gap-2 max-h-[500px] overflow-auto no-scrollbar">
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
  )
}

export default Results
