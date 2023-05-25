import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';


const GoalInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  const goalInputHandler = (value) => setInputValue(value);

  const addGoalHandler = () => {
    props.onAddGoal(inputValue);
    setInputValue('');
    props.endGoal();
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={props.endGoal}
              title="Cancel"
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              title="Add Goal"
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },

  textInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    color: '#120438',
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
