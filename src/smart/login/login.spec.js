import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {sum} from '../../utils';
configure({ adapter: new Adapter() });


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
