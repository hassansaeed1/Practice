
type score = {
    buyername: string;
    price: number;
    issale: boolean;
  };
  
  let score1: score = {
    buyername: "Hassan sheikh",
    price: 330000,
    issale: true,
  };
  console.log(
    `All info own name: ${score1.buyername}  done in: ${score1.price} is sale : ${score1.issale}`
  );
  