
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {addTaskListAction} from '../actions/taskActions';
import Task from './Task';
import TaskListForm from './TaskListForm';
import { Container, Header, Content, Form, Item, Input, Label, Button, List, ListItem } from 'native-base';


const TaskList = (props) => {
    const {taskList,addTaskList} = props;
    console.log(taskList,addTaskList);
    let tasks = [];
    taskList.forEach((item,index) => {
      tasks.push(
        <Task task={item} key={index}/>
      );

    });
  return (
    
      <ScrollView style={styles.container}>
          <TaskListForm/>
          <List>
            {tasks}

          </List>
          
            
          
      </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container:{
    padding:10
  }
})

const mapStateToProps =(state)=>{
    return {
        taskList:state.taskReducer
    }
}
const mapDispatchToProps = null;
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
