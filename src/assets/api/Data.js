// GET DATA FROM FIREBASE
export const getDataFromFirebase = async (location) => {
    try {
        const response = await fetch(
            "https://lotrdle-default-rtdb.europe-west1.firebasedatabase.app/.json"
        );
        if (!response.ok) {
            throw new Error("Request failed");
        }
        const data = await response.json();
        console.log("Data retrieved successfully. Location:", location);
        return data;

        // Handle error
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// CALCULATE TIME DIFFERENCE
export const timeCalculator = async () => {
    // Get the data from the API
    const data = await getDataFromFirebase("Time Calculation");
    // Get the current timestamp
    const currentTimeStamp = new Date().getTime();

    const previousTimeStamp = data.lastUpdated; // Retrieve the previous timestamp from storage

    // Calculate the difference between the current and previous timestamps in milliseconds
    const timeDifference = currentTimeStamp - previousTimeStamp;

    // Convert the time difference to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    // Check if 24 hours (or more) have passed
    if (hoursDifference >= 24) {
        console.log("24 hours have passed.");
        console.log("Updating data.");
        const data = await updateDataInFirebase();
        return data;
    } else {
        console.log("Less than 24 hours have passed.");
        console.log("Nothing to update.");
        return data;
    }
};

export const randomIndex = async () => {
    // Get the data from the API
    const data = await getDataFromFirebase("Random Index");
    const charactersLength = data.names.length;
    const randomNumber = Math.floor(Math.random() * charactersLength);
    console.log("Random number generated successfully");
    console.log("Previous:", data.index, "Current:", randomNumber);
    return randomNumber;
};

// UPDATE DATA IN FIREBASE
export const updateDataInFirebase = async () => {
    // GET DATA
    const data = await getDataFromFirebase("Update Data In Firebase");
    // GET RANDOM INDEX
    const randomNumber = await randomIndex();
    // ASSIGN RANDOM INDEX TO DATA
    data.index = randomNumber;
    // GET CURRENT TIMESTAMP
    const currentTimeStamp = new Date().getTime();
    // ASSIGN CURRENT TIMESTAMP TO DATA
    data.lastUpdated = currentTimeStamp;
    try {
        const response = await fetch(
            "https://lotrdle-default-rtdb.europe-west1.firebasedatabase.app/.json",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        console.log("Data updated successfully");
        console.log("Data: ", data);
        return data;
    } catch (error) {
        console.error("Error:", error.message);
    }
};

export const checkMatch = (names, userInput) => {
    let matchingNames;
    if (userInput !== null) {
        matchingNames = names.filter((name) =>
            name.toLowerCase() === (userInput.toLowerCase())
        );

    }
    return matchingNames;
};


export const ansverValidate = (data, currentCharacter, matchingNames) => {
    const userChoice = matchingNames in data.characters ? data.characters[matchingNames] : 'No match';
    // Validate name
    const name = userChoice.name;
    // Validate affiliation
    const affiliation = userChoice.affiliation === currentCharacter.affiliation ? true : false;
    // Validate race
    const race = userChoice.race === currentCharacter.race ? true : false;
    // Validate sex
    const sex = userChoice.sex === currentCharacter.sex ? true : false;
    // Validate position
    const position = userChoice.position === currentCharacter.position ? true : false;
    // Return data
    return { name, affiliation, race, sex, position };
  };
  

  export const isObjectEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }


  export const writeAnswer = (data, userInput, currentCharacter, setAnswers, answers) => {
    const match = checkMatch(data.names, userInput);
            if (match.length > 0) {
                const heh = ansverValidate(data, currentCharacter, match);
                const isObjectAlreadyInArray = answers.some((obj) => isObjectEqual(obj, heh));
                if (isObjectAlreadyInArray) {
                    console.log('object already in array');
                } else {
                    setAnswers([heh, ...answers]);
            
                    if (currentCharacter.name === match[0]) {
                        document.querySelector('input').placeholder = 'You Won!';
                        document.querySelector('input').disabled = true;
                        alert(`You won! Today's character is ${match[0]}`);
                    }

                }
            }
  }


  // Animation

  export const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.4,
        },
    },
    exit: {
        opacity: 0,
    },
};