import React from 'react';
import {View,Text} from 'react-native';
const Task = (props)=>{
    const {task} = props;
    return <View>
        <Text>{task.title} </Text>
    </View>
}
export default Task;