import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { RowItem } from "../components/RowItem";
import { RowSeparator } from "../components/RowSeparator";
import { Entypo } from "@expo/vector-icons";
import colors from "../consts/colors";

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, smth went wrong!", "Please trye again later!");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => alert("Option clicked!")}
        />

        <RowSeparator />

        <RowItem
          text="RN Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openURL("https://google.com")}
        />

        <RowSeparator />

        <RowItem
          text="RN by Examples"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openURL("https://google.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
