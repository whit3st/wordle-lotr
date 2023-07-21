import { BrowserRouter, Routes, Route } from "react-router-dom";
import { timeCalculator } from "./assets/api/Data";
import { useEffect, useState } from "react";
import { GlobalState } from "./assets/api/GlobalState";
import Loader from "./components/Loader";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Characters from "./page/Characters";
import { AnimatePresence } from "framer-motion";
import HowToPlay from "./page/HowToPlay";
import NotFound from "./page/NotFound";

function App() {
    const [loader, setLoader] = useState(false);
    const { setCurrentCharacter, setData, data } = GlobalState();
    useEffect(() => {
        async function getData() {
            // Get the data from the API
            const data = await timeCalculator();
            // Store data in global state
            setData(data);
            const index = data.index;
            const current = data.names[index];
            const currentCha =
                current in data.characters
                    ? data.characters[current]
                    : "No match";
            setCurrentCharacter(currentCha);

            setTimeout(() => {
                setLoader(true);
            }, 2000);
        }
        getData();
    }, []);

    return (
        <AnimatePresence>
            <BrowserRouter>
                <main className="flex flex-col bg-lotrdle bg-center bg-fixed bg-no-repeat mx-auto py-5 font-middleEarth items-center text-primary-content min-h-[100svh] px-0 sm:px-[5vw] md:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={loader ? <Home /> : <Loader />}
                        />
                        <Route
                            path="/characters"
                            element={data && <Characters />}
                        />
                        <Route
                            path="/howtoplay"
                            element={data && <HowToPlay />}
                        />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </main>
            </BrowserRouter>
        </AnimatePresence>
    );
}

export default App;
