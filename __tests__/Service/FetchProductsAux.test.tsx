import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { userEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import {
  fetchItensByCategory,
  fetchCategories,
  fetchItensByTitle,
} from '../../src/service/FetchProductsAux';
import {
  Product,
  Category,
  ProductByTitle,
} from '../../src/types/interface/Product';
import axios from 'axios';

describe('FetchProducts', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('when API return list of itens by category', async () => {
    const itens = await fetchItensByCategory('1');

    expect(itens).toBeTruthy();
  });
  it('when API return list of itens by category', async () => {
    const itens = await fetchCategories();

    expect(itens).toBeTruthy();
  });
  it('when API return list of itens by category', async () => {
    const itens = await fetchItensByTitle('1');

    expect(itens).toBeTruthy();
  });
});
