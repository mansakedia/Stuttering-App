import React from 'react';
import renderer from 'react-test-renderer';

import SignInScreen from '../Demo/SignInScreen';

test('Renders coorectly', () => {
    const tree = renderer.create('<SignInScreen />').toJSON();
    expect(tree).toMatchSnapshot();
});