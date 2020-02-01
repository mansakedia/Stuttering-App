import React from 'react';
import renderer from 'react-test-renderer';

import ExerciseScreen from '../Demo/ExerciseScreen';

test('Renders coorectly', () => {
    const tree = renderer.create('<ExerciseScreen />').toJSON();
    expect(tree).toMatchSnapshot();
});