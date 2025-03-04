import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListManager from './index';

describe('TodoListManager', () => {
  it('renders initial input and add button', () => {
    const { getByPlaceholderText, getByTestId } = render(<TodoListManager />);
    
    expect(getByPlaceholderText('Enter Todo')).toBeTruthy();
    expect(getByTestId('add-todo-button')).toBeTruthy();
  });

});
