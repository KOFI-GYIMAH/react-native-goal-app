import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 15,
    padding: 5,
    paddingBottom: 7,
    backgroundColor: '#5e0acc',
    borderRadius: 5,
  },

  goalText: {
    color: '#fff',
  },

  pressedItem: {
    opacity: 0
  }
});

export default GoalItem;
