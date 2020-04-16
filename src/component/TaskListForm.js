import React, {useState} from 'react';
import {View,Text,Button, TextInput,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTaskListAction} from '../actions/taskActions';
const TaskListForm = (props)=>{
    const {addTaskList} = props;
    const [task, setTask] = useState({title:"",status:0})
    const onAddTask = ()=>{
        addTaskList(task);
    }
    return <View style={styles.container}>
        <TextInput style={styles.input} value={task.title} 
            onChangeText={(newText)=>{setTask({...task,title:newText})}}
        />
        <View style={styles.btnAdd}>
            <Button title="Add" onPress={()=>{onAddTask()}}/>
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'gray',
        flex:5
    },
    btnAdd:{
        flex:1,
        alignSelf:'stretch'
    },
    container:{
        flexDirection:'row'
    }
})

const mapStateToProps = null;
const mapDispatchToProps =(dispatch)=>{
    return {
        addTaskList:(task)=>{
            dispatch(addTaskListAction(task));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskListForm);