let questions = [];

const ADD_QUESTIONS = (q) => {
  q.forEach((question) => {
    questions.push(question);
    console.log(question.qa);
  });
  // console.log(questions, "question on game load");
};

const getQ = () => {
  return questions;
};

const getQuestionFor = (type) => {
  const allQA = questions.filter((elem) => elem.type === type)[0].qa;
  // console.log(allQA, "allqa");
  return allQA;
};

const sortAnswers = (single) => {
  let allAnswers = [{ answer: single.correct_answer, isTrue: true }];
  single.length !== 0 &&
    single.incorrect_answers.forEach((element) => {
      allAnswers.push({ answer: element, isTrue: false });
    });
  const randomAnswers = allAnswers.sort(() => Math.random() - 0.5);

  return randomAnswers;
};

const singleQA = (category, diff) => {
  const arr = getQuestionFor(category);
  console.log(arr, "arr");

  const arrForDiff = arr.filter((question) => question.difficulty === diff);
  console.log(arrForDiff, "arr2");

  const single = arrForDiff[Math.floor(Math.random() * arrForDiff.length)];
  console.log(single, "single");
  const randomAnswers = sortAnswers(single);
  console.log(randomAnswers, "random");
  return { single, randomAnswers };
};

module.exports = {
  ADD_QUESTIONS,
  singleQA,
};
