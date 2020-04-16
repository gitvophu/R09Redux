import React, {useState, Component} from 'react';
import {View,Text, TextInput,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTaskListAction} from '../actions/taskActions';

import { Container, Header, Content, Form, Item, Input, Label, Button, List, ListItem,Icon } from 'native-base';

const TaskListForm = (props)=>{
    const {addTaskList} = props;
    const [task, setTask] = useState({title:"",status:0})
    const onAddTask = ()=>{
        addTaskList(task);
    }
    
    return (
            <View>
                <Item regular >
                    <Input placeholder='Nhập công việc' 
                        value={task.title} 
                        onChangeText={(newText)=>{setTask({...task,title:newText})}} 
                    />
                    <Button success style={{justifyContent:'center'}} 
                        onPress={()=>{onAddTask()}}
                    >
                        <Icon name="add" /> 
                    </Button>
                </Item>
                
                
                
            </View>
      );
    
}

const styles = StyleSheet.create({
    buttonNB:{
        // backgroundColor:'red'
        // alignSelf:'stretch'
    },
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