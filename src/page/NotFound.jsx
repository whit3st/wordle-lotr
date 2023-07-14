import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="flex flex-col h-full gap-10">
            <h1 className="text-5xl mt-[100px] text-center font-bold">
                Let&apos;s go back to Rivendell.
            </h1>
            <Link to="/" className="self-end text-2xl border px-5 py-2 border-primary-content hover:-translate-x-2 hover:invert bg-white font-semibold transition-all">← Rivendell</Link>
        </div>
    );
}
