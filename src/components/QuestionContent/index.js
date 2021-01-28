/* eslint-disable linebreak-style */
import styled from 'styled-components';

const QuestionContent = styled.form`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.primary};
      button {
        align-self: center;
      }
      input {
        display: none;
      }
      & + label {
        margin-top: 8px;
      }
      & + button {
        margin-top: 20px;
      }
      &.alternative {
          padding: 14px;
        }
      &.selected {
        background-color: ${({ theme }) => theme.colors.primaryDark}
      }
      &.selected-right {
        background-color: ${({ theme }) => theme.colors.success}
      }
      &.selected-wrong {
        background-color: ${({ theme }) => theme.colors.wrong}
      }
    }
`;

QuestionContent.ResultButton = styled.button`
  align-self: center;
  color: white;
  width: 30px;
  height: 30px;
  margin: unset auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ answerRight, theme }) => (answerRight ? theme.colors.success : theme.colors.wrong)}
`;
export default QuestionContent;
