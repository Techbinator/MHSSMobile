import React from 'react';
import renderer from 'react-test-renderer';

import HeaderDrawerButton from '../index';

describe('Components : HeaderDrawerButton', () => {
  it('renders correctly', () => {
    const props = {
      navigation: { dispatch: jest.fn() },
    };
    const tree = renderer.create(<HeaderDrawerButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /**
  it('toogles drawer when button is clicked', () => {
    const props = {
      navigation: { dispatch: jest.fn() },
    };
    const testRenderer = renderer.create(<HeaderDrawerButton {...props} />);
    const instance = testRenderer.root;
    const button = instance.findByType(Button);

    button.props.onPress();
    button.props.onPress();

    expect(props.navigation.dispatch.mock.calls).toEqual([
      ['toggleDrawer'],
      ['toggleDrawer'],
    ]);
  });
 */
});
