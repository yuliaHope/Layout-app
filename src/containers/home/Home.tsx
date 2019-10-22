import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateText } from '../../actions/text';
import { Form } from '../../components/Form';

export const Home = () => {
  const dispatch = useDispatch();
  const saveText = useCallback((text: string) => dispatch(updateText(text)), [
    dispatch,
  ]);
  
  let history = useHistory();
  const saveTextAndGoToLayout = useCallback(
    (text: string) => {
      saveText(text);
      history.push('/layout');
    },
    [history]
  );

  return (
    <Form
      btnText="Layout"
      processText={saveTextAndGoToLayout}
      placeholder="Type a text..."
      autofocus
    />
  );
};
