import 'react-native-gesture-handler';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Header from './src/pages/Header';
import Details from './src/pages/Details';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen component={Login} name='Login' options={{headerShown: false}}/>
        <Stack.Screen component={Register} name='Register' options={{headerShown: false}}/>

        <Stack.Screen component={Task} name='Task' options={{
          headerTitle: () => <Header name="Tarefas"/>,
          headerStyle: {
            backgroundColor:'#636AF2',
            height:89,
          },
          headerLeft: null
        }}/>
        <Stack.Screen component={NewTask} name='NewTask' options={{
           headerTitle: () => <Header name="Adicionar Nota"/>,
          headerStyle: {
            backgroundColor:'#636AF2',
            height:100,
          }
        }}/>
        <Stack.Screen component={Details} name='Details' options={{
          headerTitle: () => <Header name="Adicionar Nota"/>,
          headerStyle: {
            backgroundColor:'#636AF2',
            height:100,
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
