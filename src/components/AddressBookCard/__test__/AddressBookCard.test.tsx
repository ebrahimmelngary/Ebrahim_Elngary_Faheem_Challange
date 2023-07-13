import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import AddressBookCard from '../AddressBookCard';
import { Result } from '../../../types';

describe('AddressBookCard', () => {
  let props: JSX.IntrinsicAttributes & { item: Result };

  afterEach(cleanup);
  it('should match snapshot', () => {
    const { toJSON } = render(<AddressBookCard {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
