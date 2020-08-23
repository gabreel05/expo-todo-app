import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState('');

  const addTodo = () => {
    if (todoInputValue.length > 0) {
      const singleTodo = {
        id: todo.length + 1,
        task: todoInputValue,
      };
      setTodo([...todo, singleTodo]);
      setTodoInputValue('');
    }
  };

  const deleteTodo = (deleteId) => {
    const newTodo = todo.filter((item) => item.id !== deleteId);
    setTodo(newTodo);
  };

  return (
    <View style={styles.heading}>
      <Text style={styles.title}>Simple Todo App</Text>
      <TextInput
        style={styles.addTodoInput}
        onChangeText={(text) => setTodoInputValue(text)}
        value={todoInputValue}
        placeholder="Add task"
      />
      <Button title="Add" color="#4374c1" onPress={() => addTodo()} />
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <View style={styles.todoList}>
            <Text style={styles.todoListItem}>{item.task}</Text>
            <Button
              title="Delete"
              color="#fc6064"
              onPress={() => deleteTodo(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fbfe',
  },

  heading: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#010535',
    textAlign: 'center',
  },

  title: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 25,
  },

  todoContainer: {
    marginTop: 30,
    padding: 30,
  },

  addTodoInput: {
    height: 40,
    padding: 5,
    color: '#000',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },

  todoList: {
    backgroundColor: '#010535',
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 5,
  },

  todoListItem: {
    color: '#fff',
    fontSize: 25,
  },
});
