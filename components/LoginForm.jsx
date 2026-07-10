import { Text, TextInput, Pressable, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const LoginForm = () => {
  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.welcomeText}>Welcome Back</Text>
      <Text style={globalStyles.subtitle}>Sign in to your account</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Email Address"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        textContentType="password"
      />

      <Pressable style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </Pressable>

      <Text style={globalStyles.terms}>
        By signing in, you agree to our Terms & Conditions.
      </Text>
    </ScrollView>
  );
};

export default LoginForm;
