import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export default function ExploreScreen() {
  const theme = useTheme();

  return <View style={[styles.container, { backgroundColor: theme.background }]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
