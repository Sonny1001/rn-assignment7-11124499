import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Store() {
  return (
    <SafeAreaView>
        <View style={{flex: 1,padding: 16}}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Store</Text>
        </View>
        </View>
    </SafeAreaView>
  );
}

export default Store;