import 'react-native';
import React from 'react';
import CustomTextInput from '../../../app/components/CustomTextInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('CustomTextInput renders correctly', () => {
  const customTextInputComponent = renderer
    .create(<CustomTextInput />)
    .toJSON();
  expect(customTextInputComponent).toMatchSnapshot();
});
