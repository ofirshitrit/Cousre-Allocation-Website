
export const handleRandomAceei = ({
  setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  setEpsilon,
  setDelate,
  setEftbStatus,
  setIsRandom,
}) => {
  const randomNumOfCourses = getRandomNumOfCourses();
  const randomNumOfStudents = getRandomNumOfStudents();

  const randomCoursesCapacities = getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);

  const randomRatings = getRandomRatings(randomNumOfStudents, randomNumOfCourses);

  const [randomEpsilon, randomDelta, randomEftbStatus] =
    getRandomAceeiParemeters();


  setNumOfCourses(randomNumOfCourses);
  setCoursesCapacities(randomCoursesCapacities);
  setNumOfStudents(randomNumOfStudents);
  setBudgets(randomBudgets);
  setCoursesToTake(randomCoursesToTake);
  setRatings(randomRatings);
  setEpsilon(randomEpsilon);
  setDelate(randomDelta);
  setEftbStatus(randomEftbStatus);

  setIsRandom(true);
};


export const handleRandomFindManipulation = () =>{
  console.log('====================================');
  console.log("handleRandomFindManipulation");
  console.log('====================================');

}

export const handleRandomTabuSearch = ({setNumOfCourses,
  setCoursesCapacities,
  setNumOfStudents,
  setBudgets,
  setCoursesToTake,
  setRatings,
  setBeta,
  setDeltas,
  setIsRandom,
}) =>{

  const randomNumOfCourses = getRandomNumOfCourses();
  const randomNumOfStudents = getRandomNumOfStudents();

  console.log("random Num Of Courses: ", randomNumOfCourses);
  console.log("random Num Of Students: ", randomNumOfStudents);

  const randomCoursesCapacities = getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);


  console.log("Courses Capacities:", randomCoursesCapacities);
  console.log("Budgets:", randomBudgets);
  console.log("Courses to Take:", randomCoursesToTake);

  const randomRatings = getRandomRatings(randomNumOfStudents, randomNumOfCourses);
  console.log("Ratings:", randomRatings);

  const [randomBeta, randomDeltas] = getRandomTabuSeachParameters()
  console.log("Beta:", randomBeta);
  console.log("Deltas:", randomDeltas);

  
  setNumOfCourses(randomNumOfCourses);
  setCoursesCapacities(randomCoursesCapacities);
  setNumOfStudents(randomNumOfStudents);
  setBudgets(randomBudgets);
  setCoursesToTake(randomCoursesToTake);
  setRatings(randomRatings);
  setBeta(randomBeta);
  setDeltas(randomDeltas);

  setIsRandom(true);

}



export const handleSubmit = async (e, formData, setResults, setDisplayResults) => {
  console.log("in handleSubmit");

  e.preventDefault();

  const data = Object.fromEntries(Object.entries(formData));

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
      setResults(jsonResponse.results);
      setDisplayResults(true);
    } else {
      console.error("Failed to submit form.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
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
          Math.floor(Math.random() * maxRating) + 1 ,
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


const getRandomTabuSeachParameters = () => {
  const randomBeta = Math.floor(Math.random() * maxBeta) + 1;
  const numOfDelats = Math.floor(Math.random() * 3) + 1
  const randomDeltas = []
  for (let i = 0; i < numOfDelats; i++) {
    const delta = (Math.random() * maxDelta) + 0.1; 
    randomDeltas.push(delta);
  }

  return [randomBeta, randomDeltas]
}