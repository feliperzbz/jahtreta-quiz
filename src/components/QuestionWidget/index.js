/* eslint-disable linebreak-style */
import React from 'react';
/* eslint-disable react/prop-types */
import Widget from '../Widget';
// eslint-disable-next-line import/extensions
import QuestionContent from '../QuestionContent';

export default function QuestionWidget({
  question,
  answered,
  isAnswerRight,
  selected, setSelected,
  onSubmit, onClickNext,
}) {
  function getAlternativeClass(alternative) {
    if (!answered) { return alternative === selected ? 'selected' : ''; }

    if (isAnswerRight) { return alternative === selected ? 'selected-right' : ''; }

    if (alternative === selected) { return 'selected-wrong'; }
    if (alternative === question.alternatives[question.answer]) { return 'selected-right'; }

    return null;
  }

  return (
    <>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      <QuestionContent onSubmit={onSubmit}>
        {question.alternatives.map((alternative, altIndex) => (
          <label
            htmlFor={`question__${altIndex}`}
            key={alternative}
            className={`alternative ${getAlternativeClass(alternative)}`}
          >
            {alternative}
            <input
              type="radio"
              name="selected-question"
              id={`question__${altIndex}`}
              onInput={(e) => e.target.checked && setSelected(alternative)}
            />
          </label>
        ))}
        {!answered && (
          <Widget.ConfirmButton
            type="submit"
            disabled={!selected}
          >
            CONFIRMAR
          </Widget.ConfirmButton>
        )}
        {answered && (
          <QuestionContent.ResultButton
            onClick={onClickNext}
            answerRight={isAnswerRight}
          >
            &gt;
          </QuestionContent.ResultButton>
        )}
      </QuestionContent>
    </>
  );
}
