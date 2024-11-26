// const generateRandomArray = (length, max) =>
//   Array.from({ length }, () => Math.floor(Math.random() * max) + 1);


export const handleRandomClick = ({
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
  const randomBudgets = getRandomBudgets(randomNumOfStudents);
  const randomCoursesToTake = getRandomCoursesToTake(randomNumOfStudents);


  console.log("Courses Capacities:", randomCoursesCapacities);
  console.log("Budgets:", randomBudgets);
  console.log("Courses to Take:", randomCoursesToTake);

  const randomRatings = getRandomRatings(randomNumOfCourses, randomNumOfCourses);
  console.log("Ratings:", randomRatings);

  const [randomEpsilon, randomDelta, randomEftbStatus] =
    getRandomAceeiParemeters();

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

const maxNumOfCourses = 11;
const maxNumOfStudents = 8;
const maxCapacity = 7;
const maxBudget = 51;
const maxNumCoursesToTake = 5;
const maxRating = 31;
const maxEpsilon = 0.1;
const maxDelta = 0.5;

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
