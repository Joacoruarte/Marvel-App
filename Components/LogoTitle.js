import React from "react";
import { Image, View } from "react-native";

export default function LogoTitle() {
  return (
    <View>
      <Image
        style={{ width: 100, height: 40 }}
        source={require("../assets/Marvel-Comics-logo.png")}
      />
    </View>
  );
}
