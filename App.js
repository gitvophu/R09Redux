
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import taskReducer from './src/reducers/taskReducer';
import TaskList from './src/component/TaskList';
import { Container, Header,Body,Title, Content, Form, Item, Input, Label, Button as ButtonNB } from 'native-base';

const reducers = combineReducers({
  taskReducer
})
const store = createStore(reducers);

store.subscribe(()=>{
  console.log(store.getState())  ;
});

const App = () => {
  return (
    <Provider store={store}>
      <Container>
      <Header >
        <Body>
            <Title>DEMO TODO LIST: SỬ DỤNG REDUX</Title>
          </Body>
      </Header>
      
        <View>
            <TaskList/>
        </View>
      </Container>
    </Provider>
    
  );
};

export default App;
