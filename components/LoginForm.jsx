import { useEffect } from "react";
import { Text, TextInput, Pressable, ScrollView } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { globalStyles } from "../styles/globalStyles";

WebBrowser.maybeCompleteAuthSession();

const LoginForm = () => {
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_CLIENT_ID,
      redirectUri: process.env.EXPO_PUBLIC_REDIRECT_URL,
      responseType: AuthSession.ResponseType.Code,
      scopes: ["email"],
    },
    {
      authorizationEndpoint: "https://auth.hackclub.com/oauth/authorize",
    }
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log("OAuth Code:", code);

    }
  }, [response]);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={globalStyles.welcomeText}>Welcome Back</Text>
      <Text style={globalStyles.subtitle}>Sign in to your account</Text>



      <Pressable
        style={globalStyles.button}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Text style={globalStyles.buttonText}>Sign In With Hackclub.</Text>
      </Pressable>

      <Text style={globalStyles.terms}>
        By signing in, you agree to our Terms & Conditions.
      </Text>
    </ScrollView>
  );
};

export default LoginForm;