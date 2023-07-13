import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import { Result } from '../../../types';
import RadioWithLabel from '../RadioWithLabel';

describe('AddressBookCard', () => {
  let props: JSX.IntrinsicAttributes & {
    title: string;
    isActive: boolean;
    onPress: () => void;
  };

  afterEach(cleanup);
  it('should match snapshot', () => {
    const { toJSON } = render(<RadioWithLabel {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
