import { useEffect, useRef } from "react"; 
import CharacterCard from "../components/CharacterCard";
import CharacterTitle from "../components/CharacterTitle";
export default function Characters() {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.querySelector('.swipe');
  }, []);
    const scrollAmount = 305;
    function scrollLeft() {
      containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      }
    
      function scrollRight() {
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    return (
        <div className="flex flex-col gap-3 my-10 w-full px-5">
            <CharacterTitle />
            <div className="flex w-full justify-between items-center">
                <button className="btn btn-secondary btn-sm text-xs md:btn-md border border-primary-content hidden lg:block" onClick={scrollLeft}>
                    <img src="/arrow-left.svg" alt="left arrow" width={30} />
                </button>
                <CharacterCard />
                <button className="btn btn-secondary btn-sm text-xs md:btn-md border border-primary-content hidden lg:block" onClick={scrollRight}>
                    <img src="/arrow-right.svg" alt="right arrow" width={30} />
                </button>
            </div>
        </div>
    );
}
