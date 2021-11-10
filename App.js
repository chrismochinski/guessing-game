import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Welcome to this sweet lasagna button!</Text>
      <Button
        title="Lasagna"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
    <Separator />

    {/* <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      /> */}

    <Separator />

    <View>
      <Text style={styles.title}>
        Here's another one...this one is pink. Weeeee!
      </Text>
      <Button
        title="Press me"
        color="red"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>Disabled button.</Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Which button, left or right? One is right, one is wrong!
      </Text>
      <View style={styles.fixToText}>
        <Button title="Left button" onPress={() => Alert.alert("Correct!!!")} />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Should have pressed left!")}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
