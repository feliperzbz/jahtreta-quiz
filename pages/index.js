import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
// import Input from '../src/components/Input';
// import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [nome, setName] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    router.push({
      pathname: '/quiz',
      query: {
        playerName: nome,
      },
    });
  }
  return (
    <>
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <form onSubmit={handleSubmit}>
            <p>{db.description}</p>
            <input
              type="text"
              name="nomeDoUsuario"
              onChange={(e) => setName(e.target.value)}
              placeholder="Yeah, yeah, yeah "
              value={nome}
            />
            <Widget.ConfirmButton disabled={!nome}>
              {`Jogar ${nome}`}
            </Widget.ConfirmButton>
          </form>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>Quizes da Galera</h1>

          <p>lorem ipsum dolor sit amet...</p>
        </Widget.Content>
      </Widget>
    </>
  );
}
