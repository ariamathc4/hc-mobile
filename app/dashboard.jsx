import { View, Text } from "react-native";

export default function Dashboard({ user }) {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Welcome, {user.first_name}!
      </Text>

      <Text>{user.primary_email}</Text>
      <Text>ID: {user.id}</Text>
      <Text>Status: {user.verification_status}</Text>
      <Text>Slack: {user.slack_id}</Text>
    </View>
  );
}