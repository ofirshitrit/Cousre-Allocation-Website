import DeltaField from "./Tabu Search/DeltaField";

export const handleRandomAceei = ({
  setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  setEpsilon,
  setDelta,
  setEftbStatus,
  setIsRandom,
}) => {
  const randomNumOfCourses = getRandomNumOfCourses();
  const randomNumOfStudents = getRandomNumOfStudents();

  const randomCoursesCapacities =
    getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);

  const randomRatings = getRandomRatings(
    randomNumOfStudents,
    randomNumOfCourses
  );

  const [randomEpsilon, randomDelta, randomEftbStatus] =
    getRandomAceeiParemeters();

  setNumOfCourses(randomNumOfCourses);
  setCoursesCapacities(randomCoursesCapacities);
  setNumOfStudents(randomNumOfStudents);
  setBudgets(randomBudgets);
  setCoursesToTake(randomCoursesToTake);
  setRatings(randomRatings);
  setEpsilon(randomEpsilon);
  setDelta(randomDelta);
  setEftbStatus(randomEftbStatus);

  setIsRandom(true);
};

export const handleRandomFindManipulation = ({
  setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  setEpsilon,
  setDelta,
  setEftbStatus,
  setEta,
  setBeta,
  setChoosenStudent,
  setCretiriaForManipulation,
  setIsRandom,
}) => {
  const randomNumOfCourses = getRandomNumOfCourses();
  const randomNumOfStudents = getRandomNumOfStudents();

  const randomCoursesCapacities =
    getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);

  const randomRatings = getRandomRatings(
    randomNumOfStudents,
    randomNumOfCourses
  );

  const [randomEpsilon, randomDelta, randomEftbStatus] =
    getRandomAceeiParemeters();

  const [randomEta, randomBeta, randomChoosenStudent, randomCretiria] =
    getRandomFindManipulationParameters(randomNumOfStudents);



  setNumOfCourses(randomNumOfCourses);
  setCoursesCapacities(randomCoursesCapacities);
  setNumOfStudents(randomNumOfStudents);
  setBudgets(randomBudgets);
  setCoursesToTake(randomCoursesToTake);
  setRatings(randomRatings);
  setEpsilon(randomEpsilon);
  setDelta(randomDelta);
  setEftbStatus(randomEftbStatus);
  setEta(randomEta);
  setBeta(randomBeta);
  setChoosenStudent(randomChoosenStudent);
  setCretiriaForManipulation(randomCretiria);

  setIsRandom(true);
};

export const handleRandomTabuSearch = ({
  setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  setBeta,
  setDeltas,
  setDeltaComponents,
  deltas, 
  handleDeltaChange, 
  deltaComponents,
  setIsRandom,
}) => {
  const randomNumOfCourses = getRandomNumOfCourses();
  const randomNumOfStudents = getRandomNumOfStudents();


  const randomCoursesCapacities =
    getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);


  const randomRatings = getRandomRatings(
    randomNumOfStudents,
    randomNumOfCourses
  );

  const [randomBeta, randomDeltas, randomDeltaComponents] = getRandomTabuSeachParameters(deltas, handleDeltaChange, deltaComponents, setDeltas, setDeltaComponents);

  setNumOfCourses(randomNumOfCourses);
  setCoursesCapacities(randomCoursesCapacities);
  setNumOfStudents(randomNumOfStudents);
  setBudgets(randomBudgets);
  setCoursesToTake(randomCoursesToTake);
  setRatings(randomRatings);
  setBeta(randomBeta);
  setDeltas(randomDeltas);
  setDeltaComponents(randomDeltaComponents)
  setIsRandom(true);
};

export const handleSubmit = async (parameters) => {
  const [e,formData,setResults, setDisplayResults,setLoading, manipulationStatusObj ] = parameters

  const { setManipulationStatus } = manipulationStatusObj || {};
    
    
  e.preventDefault();

  const data = Object.fromEntries(Object.entries(formData));
  
  setLoading(true);

  try {
    // Send data to Flask backend
    const response = await fetch("http://127.0.0.1:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      if (formData["algoName"] === "Find Manipulation") {
        setManipulationStatus(jsonResponse.results.status)
      } else {
        setResults(jsonResponse.results);
      }
      setDisplayResults(true);
    } else {
      console.error("Failed to submit form.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }finally {
    setLoading(false);
  }
};

const maxNumOfCourses = 11;
const maxNumOfStudents = 8;
const maxCapacity = 7;
const maxBudget = 51;
const maxNumCoursesToTake = 5;
const maxRating = 31;
const maxEpsilon = 0.1;
const maxDelta = 0.5;
const maxBeta = 16;
const maxEta = 16;

const getRandomNumOfCourses = () => {
  return Math.floor(Math.random() * maxNumOfCourses) + 1;
};

const getRandomNumOfStudents = () => {
  return Math.floor(Math.random() * maxNumOfStudents) + 1;
};

const getRandomCoursesCapacities = (numOfCourses) => {
  return Object.fromEntries(
    Array.from({ length: numOfCourses }, (_, i) => [
      `c${i + 1}`,
      Math.floor(Math.random() * maxCapacity) + 1,
    ])
  );
};

const getRandomBudgets = (numOfStudents) => {
  return Object.fromEntries(
    Array.from({ length: numOfStudents }, (_, i) => [
      `s${i + 1}`,
      Math.floor(Math.random() * maxBudget) + 1,
    ])
  );
};
const getRandomCoursesToTake = (numOfStudents) => {
  return Object.fromEntries(
    Array.from({ length: numOfStudents }, (_, i) => [
      `s${i + 1}`,
      Math.floor(Math.random() * maxNumCoursesToTake) + 1,
    ])
  );
};
const getRandomRatings = (numOfStudents, numOfCourses) => {
  return Object.fromEntries(
    Array.from({ length: numOfStudents }, (_, i) => [
      `s${i + 1}`,
      Object.fromEntries(
        Array.from({ length: numOfCourses }, (_, j) => [
          `c${j + 1}`,
          Math.floor(Math.random() * maxRating) + 1,
        ])
      ),
    ])
  );
};
const getRandomAceeiParemeters = () => {
  const randomEpsilon = parseFloat((Math.random() * maxEpsilon).toFixed(3));
  const randomDelta = parseFloat((Math.random() * maxDelta).toFixed(3));
  const eftbOptions = [
    "EFTBStatus.NO_EF_TB",
    "EFTBStatus.EF_TB",
    "EFTBStatus.CONTESTED_EF_TB",
  ];
  const randomEftbStatus =
    eftbOptions[Math.floor(Math.random() * eftbOptions.length)];

  return [randomEpsilon, randomDelta, randomEftbStatus];
};

const getRandomTabuSeachParameters = (deltas, handleDeltaChange, deltaComponents, setDeltas, setDeltaComponents) => {
  const randomBeta = Math.floor(Math.random() * maxBeta) + 1;
  const numOfDelats = Math.floor(Math.random() * 3) + 1;
  const randomDeltas = [];
  const randomDeltaComponents =[]
  for (let i = 0; i < numOfDelats; i++) {
    const delta = parseFloat((Math.random() * maxDelta + 0.1).toFixed(3));
    randomDeltas.push(delta);
  }

  for (let i = 1; i < numOfDelats; i++) {
    randomDeltaComponents.push(
      <DeltaField 
        key={i}
        id={i + 1}
        deltas={randomDeltas}
        handleDeltaChange={handleDeltaChange}
        index={i}
        setDeltas={setDeltas}
        deltaComponents={randomDeltaComponents}
        setDeltaComponents={setDeltaComponents}
      />)
  }

  

  return [randomBeta, randomDeltas, randomDeltaComponents];
};

const getRandomFindManipulationParameters = (numOfStudents) => {
  const randomEta = Math.floor(Math.random() * maxEta) + 1;
  const randomBeta = Math.floor(Math.random() * maxBeta) + 1;

  const randomIndex = Math.floor(Math.random() * numOfStudents) + 1;
  const randomChoosenStudent = `s${randomIndex}`;

  const cretiriaOptions = [
    "criteria_for_profitable_manipulation.randomness",
    "criteria_for_profitable_manipulation.population",
  ];
  const randomCretiria =
    cretiriaOptions[Math.floor(Math.random() * cretiriaOptions.length)];

  return [randomEta, randomBeta, randomChoosenStudent, randomCretiria];
};
