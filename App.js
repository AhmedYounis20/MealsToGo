import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView , Platform,StatusBar } from 'react-native';
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchView}>
          <Text>Search</Text>
        </View>
        <View style={styles.listView}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS ==="android" ? StatusBar.currentHeight:0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listView: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  searchView: {
    padding: 16,
    backgroundColor: "green"
  }
});
