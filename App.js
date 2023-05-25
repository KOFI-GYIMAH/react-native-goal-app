import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { GoalInput, GoalItem } from './components';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => setModalIsVisible(true);

  const endAddGoalHandler = () => setModalIsVisible(false);

  const addGoalHandler = (inputValue) =>
    setGoals(() => [
      { text: inputValue, id: Math.random().toString() },
      ...goals,
    ]);

  const removeGoalHandler = (id) => {
    setGoals((current) => {
      return current.filter((el) => el.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <View style={styles.appTitle}>
          <Text style={{ fontWeight: '900', fontSize: 20, color: '#fff' }}>
            MyTask App
          </Text>
        </View>

        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        {modalIsVisible && (
          <GoalInput
            endGoal={endAddGoalHandler}
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(obj) => {
              return (
                <GoalItem
                  id={obj.item.id}
                  onDeleteItem={removeGoalHandler}
                  text={obj.item.text}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // * 100vh
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  appTitle: {
    alignSelf: 'center',
    marginBottom: 20,
  },

  goalsContainer: {
    flex: 7,
  },
});
