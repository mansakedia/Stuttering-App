import React from 'react';
import renderer from 'react-test-renderer';

import SocialScreen from '../Demo/SocialScreen';

test('Renders coorectly', () => {
    const tree = renderer.create('<SocialScreen />').toJSON();
    expect(tree).toMatchSnapshot();
});