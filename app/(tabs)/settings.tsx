import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View >
      <Text >
        Sign In Page
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
    </View>
  );
}  

export default SignIn;