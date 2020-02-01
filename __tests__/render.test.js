import React from 'react';
import renderer from 'react-test-renderer';

import VerifyIDScreen from '../Demo/VerifyIDScreen';

test('Renders coorectly', () => {
    const tree = renderer.create('<VerifyIDScreen />').toJSON();
    expect(tree).toMatchSnapshot();
});