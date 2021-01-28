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

// const LoaderSpinner = styled.div`
//   margin-bottom: 15px;
//   border: 10px solid ${({ theme }) => theme.colors.primaryDark}; 
//   border-top: 10px solid ${({ theme }) => theme.colors.primary}; 
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   animation: spin 2s linear infinite;
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

export default function Loader() {
  return (
    <LoaderContainer />
  );
}
