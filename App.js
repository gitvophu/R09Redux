
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
      <View>
          <Text>DEMO TODO LIST: SỬ DỤNG REDUX</Text>
          <TaskList/>
      </View>
    </Provider>
    
  );
};

export default App;
