import { create } from "zustand";


export const GlobalState = create((set) => ({
    data: null,
    setData: (newData) => set({ data: newData }),
    currentCharacter: null,
    setCurrentCharacter: (newCharacter) => set({ currentCharacter: newCharacter }),
    userInput: null,
    setUserInput: (newInput) => set({ userInput: newInput }),
    matchingNames: null,
    setMatchingNames: (newNames) => set({ matchingNames: newNames }),
    answers: [],
    setAnswers: (newAnswers) => set({ answers: newAnswers }),
}));