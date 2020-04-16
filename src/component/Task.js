import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, List, ListItem, Icon } from 'native-base';
const Task = (props)=>{
    const {task} = props;
    
    return <ListItem style={styles.container}>
        <TouchableOpacity 
            onPress={()=>{
                
            }}
        >
        {
            task.status==1
            ?<Icon name="checkbox" style={{ color: "green" }} /> 
            :<Icon name="checkbox" style={{ color: "gray" }} /> 
        }
        </TouchableOpacity>
        
        
        <Text style={styles.title}>{task.title}</Text>
        <Icon name="close" style={{ color: "red" }} />
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
export default Task;