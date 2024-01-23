`Create an array of objects and sort them based on a specific property. Utilize the sorted function and a lambda function as the key`
const objects: { name: string; age: number }[] = [
    {
      name: "zaeem",
      age: 20,
    },
    {
      name: "Zain",
      age: 17,
    },
    {
      name: "Hassan",
      age: 18,
    },
  ];
  let sortedOjects = objects.sort((a, b) => a.age - b.age);
  console.log(sortedOjects);