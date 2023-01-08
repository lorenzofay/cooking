import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { logIn } from '@actions/session';
import { useAppDispatch } from '@store/hooks/storeHooks';
import { ThemeColors } from '@types';
import useColors from '@hooks/useColors';

export const Login = () => {
  const colors = useColors();
  const styles = getStyles(colors);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const onLogin = () => dispatch(logIn(username, password));

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setUsername}
        placeholder="Username"
        placeholderTextColor={colors.tint}
        style={styles.inputs}
        value={username}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={colors.tint}
        style={styles.inputs}
        value={password}
      />
      <Button title="Log In" onPress={onLogin} />
    </View>
  );
};

const getStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  inputs: {
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.tint,
    height: 80,
    width: '80%',
    color: colors.tint,
  },
});
