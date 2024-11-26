
const generateRandomArray = (length, max) =>
  Array.from({ length }, () => Math.floor(Math.random() * max) + 1);


const handleRandomClick = ({
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

  console.log("random Num Of Courses: ", randomNumOfCourses);
  console.log("random Num Of Students: ", randomNumOfStudents);

  const randomCoursesCapacities = getRandomCoursesCapacities(randomNumOfCourses);
  const randomBudgets = getRandomBudgets(randomNumOfCourses);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfCourses);

  console.log("Courses Capacities:", randomCoursesCapacities);
  console.log("Budgets:", randomBudgets);
  console.log("Courses to Take:", randomCoursesToTake);

  const randomRatings = getRandomRatings(randomNumOfCourses);
  console.log("Ratings:", randomRatings);

  const [randomEpsilon, randomDelta, randomEftbStatus] = getRandomAceeiParemeters()
  
  console.log("random Epsilon:", randomEpsilon);
  console.log("random Delta:", randomDelta);
  console.log("randomEftbStatus:", randomEftbStatus);

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

export default handleRandomClick;


maxNumOfCourses = 11
maxNumOfStudents = 8
maxCapacity = 7
maxBudget = 51
maxNumCoursesToTake = 5
maxRating = 31
maxEpsilon = 0.1
maxDelta = 0.5

const getRandomNumOfCourses = () => {
  return Math.floor(Math.random() * maxNumOfCourses) + 1;
}

const getRandomNumOfStudents = () => {
    return Math.floor(Math.random() * maxNumOfStudents) + 1;
}

const getRandomCoursesCapacities = (numOfCourses) => {
  return generateRandomArray(numOfCourses, maxCapacity);
}
const getRandomBudgets = (numOfStudents) => {
  generateRandomArray(numOfStudents, maxBudget);
}
const getRandomCoursesToTake = (numOfStudents) => {
  generateRandomArray(numOfStudents, maxNumCoursesToTake);
}
const getRandomRatings = (numOfStudents) => {
  return (Object.fromEntries(
    Array.from({ length: numOfStudents }, (_, i) => [
      `student${i + 1}`,
      Object.fromEntries(
        Array.from({ length: numOfStudents }, (_, j) => [
          `course${j + 1}`,
          Math.floor(Math.random() * maxRating),
        ])
      ),
    ])
  ));
}
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

    return [randomEpsilon, randomDelta, randomEftbStatus]
}

