import { useEffect, useRef } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterTitle from "../components/CharacterTitle";
import SwiperButton from "../components/SwiperButton";
import CharactersContainer from "../components/CharactersContainer";
export default function Characters() {
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current = document.querySelector(".swipe");
    }, []);
    const scrollAmount = 305;
    function scrollLeft() {
        containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft - scrollAmount,
            behavior: "smooth",
        });
    }

    function scrollRight() {
        containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft + scrollAmount,
            behavior: "smooth",
        });
    }
    return (
        <CharactersContainer>
            <CharacterTitle />
            <div className="flex w-full justify-between items-center">
                <SwiperButton to="left" onClick={scrollLeft} />
                <CharacterCard />
                <SwiperButton to="right" onClick={scrollRight} />
            </div>
        </CharactersContainer>
    );
}
