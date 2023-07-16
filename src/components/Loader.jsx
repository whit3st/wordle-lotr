export default function Loader() {
    return (
      <div className="flex flex-col items-center relative">
        <img src="/loader.webp" width={250} height={250} alt="loader" className="mt-10 animate-spin-slow" />
        <h1 className="text-lg font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] ">Loading...</h1>
      </div>
    ) 
}
