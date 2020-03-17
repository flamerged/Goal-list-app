import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [visibility, setVisibility] = useState(false);

    const addGoalHandler = (enteredGoal, setEnteredGoal) => {
        if (enteredGoal != ' ') {
            if (enteredGoal && enteredGoal.trim()) {
                setGoals(currentGoals => [
                    ...goals,
                    { key: Math.random().toString(), value: enteredGoal }
                ]);
                setVisibility(false);
                setEnteredGoal('');
            } else {
                setEnteredGoal('');
            }
        } else {
            setEnteredGoal('');
        }
    };

    const deleteGoalHandler = id => {
        setGoals(goals.filter(goal => goal.key !== id));
    };

    return (
        <View style={styles.screen}>
            <Button
                style={styles.button}
                title="Add Goal"
                onPress={() => setVisibility(true)}
            />
            <GoalInput
                addGoalHandler={addGoalHandler}
                visible={visibility}
                setVisibility={setVisibility}
            />
            <FlatList
                data={goals}
                renderItem={itemData => (
                    <GoalItem
                        goal={itemData.item.value}
                        id={itemData.item.key}
                        deleteGoal={deleteGoalHandler}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { paddingTop: 50, flex: 1 }
});
