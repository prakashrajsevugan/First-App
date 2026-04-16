import { Link } from "expo-router";
import { Text, View } from "react-native";
import SignIn from "./sign-in";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Sign Up Page
      </Text>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go To Sign In</Link>
    </View>
  );
}

export default SignUp;