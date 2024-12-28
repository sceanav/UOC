import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Page1" />
      <Stack.Screen name="Page2" />
    </Stack>
  );
};

export default _layout;
