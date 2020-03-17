import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

const GoalInput = ({ addGoalHandler, visible, setVisibility }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalOnputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.addGoal}>
                    <TextInput
                        placeholder="Your goals"
                        style={styles.input}
                        onChangeText={goalOnputHandler}
                        value={enteredGoal}
                    />

                    <View style={styles.addButton}>
                        <View style={styles.button}>
                            <Button
                                title="Cancel"
                                color="red"
                                onPress={() => setVisibility(false)}
                            />
                        </View>

                        <View style={styles.button}>
                            <Button
                                title="Add"
                                onPress={() => {
                                    addGoalHandler(enteredGoal, setEnteredGoal);
                                    console.log('add button pressed');
                                }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    addButton: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addGoal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '50%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 0.3
    },
    input: {
        borderColor: 'grey',
        borderWidth: 0.5,
        padding: 5,
        width: '70%',
        marginBottom: 10,
        color: 'black'
    },
    button: {
        padding: 5,
        width: '40%'
    }
});

export default GoalInput;
