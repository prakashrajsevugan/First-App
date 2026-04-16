import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Sign In Page
      </Text>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go To Sign Up</Link>
    </View>
  );
}

export default SignIn;