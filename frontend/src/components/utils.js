
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
  const randomNumOfCourses = Math.floor(Math.random() * 8) + 1;
  const randomNumOfStudents = Math.floor(Math.random() * 11) + 1;
  console.log("random Num Of Courses: ", randomNumOfCourses);
  console.log("random Num Of Students: ", randomNumOfStudents);

  const randomCoursesCapacities = generateRandomArray(randomNumOfCourses, 11);
  const randomBudgets = generateRandomArray(randomNumOfStudents, 51);
  const randomCoursesToTake = generateRandomArray(randomNumOfStudents, 5);
  console.log("Courses Capacities:", randomCoursesCapacities);
  console.log("Budgets:", randomBudgets);
  console.log("Courses to Take:", randomCoursesToTake);

  const randomRatings = Object.fromEntries(
    Array.from({ length: randomNumOfStudents }, (_, i) => [
      `student${i + 1}`,
      Object.fromEntries(
        Array.from({ length: randomNumOfCourses }, (_, j) => [
          `course${j + 1}`,
          Math.floor(Math.random() * 31),
        ])
      ),
    ])
  );
  console.log("Ratings:", randomRatings);

  const randomEpsilon = parseFloat((Math.random() * 0.1).toFixed(3));
  const randomDelta = parseFloat((Math.random() * 0.5).toFixed(3));
  const eftbOptions = [
    "EFTBStatus.NO_EF_TB",
    "EFTBStatus.EF_TB",
    "EFTBStatus.CONTESTED_EF_TB",
  ];
  const randomEftbStatus =
    eftbOptions[Math.floor(Math.random() * eftbOptions.length)];

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

