import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, id, deleteGoal }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => deleteGoal(id)}>
            <View style={styles.listItem}>
                <Text>{goal}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 2,
        backgroundColor: '#ccc',
        borderColor: 'grey',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%'
    }
});

export default GoalItem;
