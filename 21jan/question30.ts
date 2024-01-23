`Create a simple program that simulates a basic quiz using arrays and loops. Utilize arrays to
 store questions and answers, and loops for user interaction.`;

 class Question {
    constructor(public prompt: string, public answer: string) {}
  }
  
  const questions: Question[] = [
    new Question("What is 2 + 2?", "4"),
    new Question("Who is the capital of France?", "Paris"),
  ];