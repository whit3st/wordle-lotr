import { Link } from "react-router-dom";
export default function HowToPlay() {
    return (
        <div className="flex flex-col justify-center items-center text-center mt-10 gap-5 h-full">
            <h1 className="text-2xl font-semibold max-w-[500px]">
                You can start playing by writing one of the{" "}
                <Link
                    className="text-secondary mix-blend-difference"
                    to={"/characters"}
                >
                    character
                </Link>{" "}
                names in the box!
            </h1>
            <img src="/howto1.png" alt="" className="relative" />
            <h1 className="text-2xl font-semibold max-w-[500px]">You need you write names until you find the correct one!</h1>
            <h1 className="text-2xl font-semibold max-w-[500px]">Have fun!</h1>
        </div>
    );
}
