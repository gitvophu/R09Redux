import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import {deleteTaskListAction,toggleTaskStatusAction} from '../actions/taskActions';
const Task = (props)=>{
    const {task,deleteTask,toggleTaskStatus} = props;

    console.log('rerendered task');
    return <ListItem style={styles.container}>
        <TouchableOpacity 
            onPress={()=>{
                toggleTaskStatus(task.id);
            }}
        >
        {
            task.status==1
            ?<Icon name="checkbox" style={{ color: "green" }} /> 
            :<Icon name="checkbox" style={{ color: "gray" }} /> 
        }
        </TouchableOpacity>
        
        
        <Text style={styles.title}>{task.title}</Text>
        <TouchableOpacity 
            onPress={()=>{deleteTask(task.id)}}
        >
            <Icon name="close" style={{ color: "red" }} />    
        </TouchableOpacity>
        
    </ListItem>
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    iconTrash:{
        
    },
    title:{
        flex:1
    }
})
const mapStateToProps =(state)=>{
    return {
        taskList:state.taskReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        deleteTask:(id)=>{
            dispatch(deleteTaskListAction(id));
        },
        toggleTaskStatus:(id)=>{
            dispatch(toggleTaskStatusAction(id));
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Task) ;