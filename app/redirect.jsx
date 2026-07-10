import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Redirect() {
  const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text>OAuth callback received.</Text>
      <Text selectable>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
}
