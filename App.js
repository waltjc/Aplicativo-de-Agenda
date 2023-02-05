import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Home from './src/pages/Home';
import Details from './src/pages/Details';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={Home} name='Home' options={{headerShown: false}}/>
        <Stack.Screen component={Login} name='Login' options={{headerShown: false}}/>
        <Stack.Screen component={Register} name='Register' options={{headerShown: false}}/>

        <Stack.Screen component={Task} name='Task' options={{headerShown: false}}/>
        <Stack.Screen component={NewTask} name='NewTask' options={{headerShown: false}}/>
        <Stack.Screen component={Details} name='Details' options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
