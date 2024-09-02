import { StyleSheet, View, Text } from 'react-native';

export const Custom = () => {
  return (
    <View style={styles.container}>
      <Text>I am a custom component imported from "@nx-with-expo/custom-expo-plugin"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lightblue',
    marginVertical: 16,
    borderRadius: 8,
  },
});
