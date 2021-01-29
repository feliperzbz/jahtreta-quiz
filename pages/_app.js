/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: unset;
  }

  button {
    border: none;
    cursor: pointer;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{db.title}</title>
          <meta name="title" content={db.title} />
          <meta name="description" content={db.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={db.vercelUrl} />
          <meta property="og:title" content="Quiz - The Beatles" />
          <meta property="og:description" content={db.description} />
          <meta property="og:image" content={db.bg} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={db.bg} />
          <meta property="twitter:title" content={db.title} />
          <meta property="twitter:description" content={db.description} />
          <meta property="twitter:image" content={db.bg} />

          <link rel="icon" href="https://image.shutterstock.com/image-illustration/november-192017-editorial-illustration-beatles-260nw-770125474.jpg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <GitHubCorner projectUrl={db.gitUrl} />
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo />
            <Component {...pageProps} />
            {' '}
            <Footer />
          </QuizContainer>
        </QuizBackground>
      </ThemeProvider>
    </>
  );
}
