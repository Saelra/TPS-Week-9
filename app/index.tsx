import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

interface Todo {
  key: string;
  value: string;
}

const TodoListManager = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { key: Date.now().toString(), value: todo }]);
      setTodo("");
    }
  };

  const removeTodo = (key: string) => {
    setTodos(todos.filter((item) => item.key !== key));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
        testID="input-todo"
      />
      <Button title="Add Todo" onPress={addTodo} testID="add-todo-button" />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View>
            <Text>{item.value}</Text>
            <Button
              title="Remove"
              onPress={() => removeTodo(item.key)}
              testID={`remove-todo-button-${item.key}`}
            />
          </View>
        )}
      />
    </View>
  );
};

export default TodoListManager;