import React, {useState} from 'react'
import {View, TextInput,Button,StyleSheet,Modal} from 'react-native'


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
      }

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      };
    return(
        <Modal visible={props.visible} animationType="fade">
        <View style={styles.viewContainer}>
        <TextInput placeholder="Coarse Goals"
          style={styles.inputContainer}  
          onChangeText={goalInputHandler}
          value = {enteredGoal}/>
          <View style={styles.buttonContainer}>
        <Button title="CANCEL" color="red" onPress ={props.onCancel}/>
        <Button title="ADD" 
        style={styles.button}
        onPress = {addGoalHandler}/>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputContainer: {
        padding: 10,
        width:'80%',
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 10
      },
      button: {
        width: 100
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
      }
});

export default GoalInput;