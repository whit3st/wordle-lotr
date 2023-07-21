import CharacterCard from "../components/CharacterCard";
import CharacterTitle from "../components/CharacterTitle";
export default function Characters() {
    const scrollAmount = 304;
    const container = document.querySelector('.swipe');
    function scrollLeft() {
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      }
    
      function scrollRight() {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
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
