
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {addTaskListAction} from '../actions/taskActions';
import Task from './Task';
import TaskListForm from './TaskListForm';
const TaskList = (props) => {
    const {taskList,addTaskList} = props;
    console.log(taskList,addTaskList);
    
  return (
    
      <View>
          <Text>task list</Text>
          <TaskListForm/>
          <FlatList
            data={taskList}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>{
                return <Task task={item}/>
            }}
          />
      </View>
    
    
  );
};
const mapStateToProps =(state)=>{
    return {
        taskList:state.taskReducer
    }
}
const mapDispatchToProps = null;
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
