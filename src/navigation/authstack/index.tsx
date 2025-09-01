import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TAuthStack } from '../types/types';
import Splash from '../../screens/auth/splash/Splash';
import Login from '../../screens/auth/login/login';
import Splash1 from '../../screens/auth/splash/Splash1';
import WalkScreen from '../../screens/walkThorough/walkThorough';
import LoginNo from '../../screens/auth/login/Loginno';
import ForgetPass from '../../screens/auth/Forget/ForgetPass';
import ForgetPassChange from '../../screens/auth/ChangeVerfifcation/Forget';
import Congratulations from '../../screens/auth/Congratulations/Congratulations';
import Password from '../../screens/auth/ChangePassword/Password';
import Home from '../../screens/home/home';
import Profile from '../../screens/profile/profile';
import TabNavigator from '../bottomTabBar';
import Special from '../../screens/ChildScreens/Special';
const Stack = createNativeStackNavigator<TAuthStack>();

const screens = [
  {
    key: 'Splash',
    name: 'Splash',
    component: Splash,
  },
  {
    key: 'Login',
    name: 'Login',
    component: Login,
  },
  {
    key: 'LoginNo',
    name: 'LoginNo',
    component: LoginNo,
  },
  {
    key: 'ChangePassword',
    name: 'ChangePassword',
    component: Password,
  },
  {
    key: 'ForgetScr',
    name: 'ForgetScr',
    component: ForgetPass,
  },
  {
    key: 'ForgetPassChange',
    name: 'ForgetPassChange',
    component: ForgetPassChange,
  },
  
  {
    key: 'WalkScreen',
    name: 'WalkScreen',
    component: WalkScreen,
  },
  {
    key: 'Splash1',
    name: 'Splash1',
    component: Splash1,
  },
  {
    key: 'Congratulations',
    name: 'Congratulations',
    component: Congratulations,
  },
  
  {
    key: 'TabNavigator',
    name: 'TabNavigator',
    component: TabNavigator,
  },
  
];
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {screens.map(s => (
        <Stack.Screen key={s.key} name={s.name} component={s?.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
