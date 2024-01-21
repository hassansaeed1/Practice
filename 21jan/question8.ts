//Q8
interface bookinfo {
    bookname: string;
    author: string;
    topic: string;
  }
  var bookdetail: bookinfo = {
    bookname: "matilda",
    author: "roald dahl",
    topic: "The power of knowledge courage, and justice",
  };
  console.log(
    `Book name is ${bookdetail.bookname} and his author name is ${bookdetail.author} and the topic of ${bookdetail.bookname} is ${bookdetail.topic}`
  );
  
  