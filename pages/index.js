import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export default function Home() {
  return (
  <>
    <Head> 
      <title>Quiz</title>
      <meta name="title" content="Quiz" />
      <meta
        name="description"
        content="Ainda não sei." />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://jahtreta-quiz.feliperzbz.vercel.app/"
      />
      <meta property="og:title" content="Quiz" />
      <meta
        property="og:description"
        content="Quiz desenvolvido durante a imersão react da aluara."
      />
      <meta property="og:image" content={db.bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={db.bg} />
      <meta property="twitter:title" content="DQuiz" />
      <meta
        property="twitter:description"
        content="Quiz desenvolvido durante a imersão react da aluara."
      />
      <meta property="twitter:image" content={db.bg} />
    </Head>
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/feliperzbz/jahtreta-quiz" />
    </QuizBackground>
  </>   
    
  );
}