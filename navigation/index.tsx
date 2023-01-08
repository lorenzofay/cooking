import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '@components/Modal/ModalScreen';
import { RootStackParamList } from '@types';
import LinkingConfiguration from './LinkingConfiguration';
import { Login } from '@components/Login/Login';
import { RootState } from '@store/store';
import { useAppSelector } from '@store/hooks/storeHooks';
import DrawerNavigator from './DrawerNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.session);
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
