import { BrowserRouter, Routes, Route } from "react-router-dom";
import { timeCalculator } from "./assets/api/Data";
import { useEffect, useState } from "react";
import { GlobalState } from "./assets/api/GlobalState";
import Loader from "./components/Loader";
import Home from "./page/Home";
import Header from "./components/Header";


function App() {
    const [loader, setLoader] = useState(false);
    const { setCurrentCharacter, setData } = GlobalState();
    useEffect(() => {
        async function getData() {
            // Get the data from the API
            const data = await timeCalculator();
            // Store data in global state
            setData(data);
            const index = data.index;
            const current = data.names[index]
            const currentCha = current in data.characters ? data.characters[current] : 'No match';
            setCurrentCharacter(currentCha);

            setTimeout(() => {
                setLoader(true)
            }, 2000);
        }
        getData();
    }, []);

    return (
        <BrowserRouter>
            <main className="flex flex-col max-w-[1000px] mx-auto p-5 font-middleEarth items-center text-primary-content">
                <Header />
                <Routes>
                    <Route path="/" element={loader ? <Home /> : <Loader />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
