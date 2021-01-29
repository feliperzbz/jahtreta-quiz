/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from 'react';
/* eslint-disable react/prop-types */
import Link from 'next/link';

import Widget from '../Widget';

export default function QuizResult({
  playerName,
  rights,
  total,
}) {
  const currentPlayer = useRef(null);

  useEffect(() => {
    if (currentPlayer.current) {
      currentPlayer.current.scrollIntoView();
    }
  }, [currentPlayer]);

  return (
    <Widget>
      <Widget.Header>
        Resulados
      </Widget.Header>
      <Widget.Content>
        {`Parabéns ${playerName} seu resultado foi ${rights} de ${total}`}
      </Widget.Content>
      <Link href="/">
        Refazer o Quiz
      </Link>
    </Widget>
  );
}
