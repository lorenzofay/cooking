import { View } from 'react-native';

interface ProfileNumbersProps {
  followers: number;
  following: number;
  posts: number;
}

const ProfileNumbers = ({ followers, following, posts }: ProfileNumbersProps) => {
  return (
    <View>
      <View>{posts}</View>
      <View>{followers}</View>
      <View>{following}</View>
    </View>
  );
};

export default ProfileNumbers;
