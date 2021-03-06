import React, { useContext } from 'react';
import { CodeSample } from '../components';
import { AppContext } from '../context';
import { useParams } from '@reach/router';

const CodeSampleContainer = () => {
  const { codeSampleVisible, toggleSampleCode } = useContext(AppContext);
  const params = useParams();
  const {
    web3URL = '',
    web3Lib = '',
    currentMethod = '',
    formArgs = '',
  } = params;
  const argumentList = formArgs.split('/');
  const hideCodeSample = () => {
    toggleSampleCode();
  };

  return (
    <CodeSample
      url={atob(web3URL)}
      web3Lib={web3Lib}
      args={argumentList}
      currentMethod={currentMethod}
      hideCodeSample={hideCodeSample}
      visible={codeSampleVisible}
    />
  );
};

export { CodeSampleContainer };
