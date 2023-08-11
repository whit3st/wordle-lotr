import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className="flex flex-col h-full gap-10">
            <h1 className="text-5xl mt-[100px] text-center font-bold">
                There is nothing, <br />
                Let&apos;s go back to Rivendell.
            </h1>
            <Link to="/" className="btn btn-secondary btn-sm text-xs md:btn-md border border-primary-content w-max self-end hover:-translate-x-2  font-semibold transition-all">← Rivendell</Link>
        </div>
    );
}
