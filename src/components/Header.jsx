import Logo from "./Logo";

export default function Header() {
    return (
        <header className="flex justify-center border-b border-primary-content pb-5 w-full">
            <Logo />
        </header>
    );
}
