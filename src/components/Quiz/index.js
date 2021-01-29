/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
/* eslint-disable react/prop-types */
import db from '../../../db.json';

import Widget from '../Widget';
import QuestionWidget from '../QuestionWidget';
import Loader from '../Loader';

export default function Quiz({
  setFinished,
  rightQuestions, setRightQuestions,
}) {
  const { questions } = db;
  const totalQuestions = questions.length;
  const [loading, setLoading] = useState(true);
  const [nextTimeout, setNextTimeout] = useState(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1 * 1000);
  }, [index]);

  function checkAnswer(alternative) {
    const question = questions[index];
    return alternative === question.alternatives[question.answer];
  }

  function handleNextQuestion() {
    if (index !== totalQuestions - 1) {
      setIndex(index + 1);
      setSelected(null);
      setAnswered(false);
      setIsAnswerRight(false);
      setLoading(true);
    } else {
      setFinished(true);
    }
  }

  function handleClickNext() {
    clearTimeout(nextTimeout);
    handleNextQuestion();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isAnswerCorrect = checkAnswer(selected);
    if (isAnswerCorrect) setRightQuestions(rightQuestions + 1);
    setAnswered(true);
    setIsAnswerRight(isAnswerCorrect);
    setNextTimeout(setTimeout(handleNextQuestion, 2000));
  }

  return (
    <Widget>
      <Widget.Header>
        <Link href="/">Recomeçar </Link>
        <p>
          {`Pergunta ${index + 1} de ${totalQuestions}`}
        </p>
      </Widget.Header>
      {loading && <img alt={questions[index].title} src={db.placeholder} />}
      <img
        alt={questions[index].title}
        src={questions[index].image}
        style={{ display: loading ? 'none' : 'block' }}
      />
      <Widget.Content>
        {!loading ? (
          <QuestionWidget
            question={questions[index]}
            answered={answered}
            isAnswerRight={isAnswerRight}
            selected={selected}
            setSelected={setSelected}
            onSubmit={handleSubmit}
            onClickNext={handleClickNext}
          />
        ) : <Loader />}
      </Widget.Content>
    </Widget>
  );
}
