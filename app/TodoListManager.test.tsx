import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListManager from './index';

describe('TodoListManager', () => {
  it('renders initial input and add button', () => {
    const { getByPlaceholderText, getByTestId } = render(<TodoListManager />);
    
    expect(getByPlaceholderText('Enter Todo')).toBeTruthy();
    expect(getByTestId('add-todo-button')).toBeTruthy();
  });

  it('adds a new todo to the list', () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<TodoListManager />);
    
    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');
    
    fireEvent.changeText(input, 'Test Todo');
    fireEvent.press(addButton);
    
    expect(getByText('Test Todo')).toBeTruthy();
  });

  it('removes a todo from the list', () => {
    const { getByTestId, getByPlaceholderText, queryByText } = render(<TodoListManager />);
    
    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');
    
    fireEvent.changeText(input, 'Test Todo');
    fireEvent.press(addButton);
    
    const removeButton = getByTestId(/remove-todo-button-\d+/);
    
    fireEvent.press(removeButton);
    expect(queryByText('Test Todo')).toBeNull();
  });
});
