import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle ===0){
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });

  }
  
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  };

  return (
    <View style={styles.screen}> 
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <View>
        <FlatList 
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => <GoalItem 
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title={itemData.item.value} />
          } />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    marginTop: 40
  },
});
