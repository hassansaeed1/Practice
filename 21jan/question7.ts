//Q7
interface bookinfoo {
    title: string;
    author: string;
  }
  let booktype: bookinfoo = {
    title: "matilda",
    author: "Roald dahl",
  };
  console.log(
    `The book title is ${booktype.title} and his author name is ${booktype.author}`
  );
  