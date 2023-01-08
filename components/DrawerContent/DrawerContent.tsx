import { Image, StyleSheet, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import useColors from '@hooks/useColors';
import { ThemeColors } from '@types';
import ProfileNumbers from './ProfileNumbers';

const DrawerContent = (props: any) => {
  const colors = useColors();
  const styles = getStyles(colors);

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.userDataContainer}>
        <View style={styles.profileDataContainer}>
          <Image source={require('@images/profile.png')} style={styles.image} />
        </View>
        <View style={styles.profileDataContainer}>
            <ProfileNumbers following={1} followers={1} posts={1} />
        </View>
      </View>
      <View style={styles.navigationListContainer}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => console.log('HOLAAAAA')} />
      </View>
    </DrawerContentScrollView>
  );
};

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: colors.primary,
    },
    image: {
      borderRadius: 80,
      height: 160,
      width: 160,
    },
    navigationListContainer: {},
    profileDataContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userDataContainer: {
      paddingVertical: 80,
      paddingHorizontal: 40,
    },
  });

export default DrawerContent;
