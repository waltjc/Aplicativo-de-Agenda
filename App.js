import 'react-native-gesture-handler';

import Login from './auth/Login';
import Register from './auth/Register';

import Home from './components/Home';
import NoteAdd from './components/NodeAdd';
import Header from './components/Header';
import Detail from './components/Detail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen component={Login} name='Login' options={{headerShown: false}}/>
        <Stack.Screen component={Register} name='Register' options={{headerShown: false}}/>

        <Stack.Screen component={Home} name='Home' options={{
          headerTitle: () => <Header name="Adicionar Nota"/>,
          headerStyle: {
            backgroundColor:'#67b05b',
            height:120,
          }
        }}/>
        <Stack.Screen component={NoteAdd} name='NoteAdd' options={{
           headerTitle: () => <Header name="Adicionar Nota"/>,
          headerStyle: {
            backgroundColor:'#67b05b',
            height:120,
          }
        }}/>
        <Stack.Screen component={Detail} name='Detail' options={{
          headerTitle: () => <Header name="Adicionar Nota"/>,
          headerStyle: {
            backgroundColor:'#67b05b',
            height:120,
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
