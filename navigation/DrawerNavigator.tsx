import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';
import { RootTabParamList, RootTabScreenProps } from '@types';
import Feed from '@components/Feed/Feed';
import Profile from '@components/Profile/Profile';
import DrawerContent from '@components/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator<RootTabParamList>();

const DrawerNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={DrawerContent}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.navigate('Modal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome
              name="info-circle"
              size={25}
              color={Colors[colorScheme].text}
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Modal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome
              name="info-circle"
              size={25}
              color={Colors[colorScheme].text}
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        drawerStyle: { width: '85%' },
      })}>
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={({ navigation }: RootTabScreenProps<'Feed'>) => ({
          title: 'Feed',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
