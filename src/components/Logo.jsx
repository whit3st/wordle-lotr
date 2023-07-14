import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/"><img src="/logo.svg" alt="logo" width={139} height={65} /></Link>
    )
}
