/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export default function Loader() {
  return (
    <LoaderContainer />
  );
}
