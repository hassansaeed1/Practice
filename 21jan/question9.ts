//Q9

interface personinfo {
    name: string;
    age: number;
    address: string;
  }
  var persontype: personinfo = {
    name: "Hassan Sheikh",
    age: 18,
    address: "main sabzar road lahore",
  };
  console.log(
    `The person name is ${persontype.name} and his age ${persontype.age} and his address is ${persontype.address}`
  );
  