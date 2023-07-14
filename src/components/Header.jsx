import Logo from "./Logo";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-center items-center border-b border-primary-content pb-5 w-full">
            <Logo />
            <nav className="flex ml-auto gap-10 items-center mt-5 justify-center md:justify-end w-full">
                <Link to="/characters" className="text-lg font-semibold tracking-wide">Characters</Link>
                <Link to="/howtoplay" className="text-md font-semibold tracking-wide text-center">How To Play</Link>
            </nav>
            
        </header>
    );
}
