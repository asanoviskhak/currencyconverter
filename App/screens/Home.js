import React, { useState, useEffect, useContext } from "react";
import { format } from "date-fns";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../consts/colors";
import { ConvertInput } from "../components/ConvertInput";
import { Button } from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConversionContext } from "../utils/ConversionContext";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
  const {
    baseCurrency,
    targetCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext);

  let currentDate = date;
  const conversionRate = rates ? rates[targetCurrency] : 81.01;

  const [value, setValue] = useState("100");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBg}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logoMain}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Currency converter</Text>
          {isLoading ? (
            <ActivityIndicator color={colors.white} size={32} />
          ) : (
            <>
              <ConvertInput
                text={baseCurrency}
                value={value}
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Base Currency",
                    isBaseCurrency: true,
                  })
                }
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
              />

              <ConvertInput
                text={targetCurrency}
                value={
                  value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                }
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Target Currency",
                    isBaseCurrency: false,
                  })
                }
                editable={false}
              />
              <Text style={styles.subtitle}>
                {`1 ${baseCurrency} = ${conversionRate} ${targetCurrency} as of ${
                  date && format(new Date(date), "do MMMM, yyyy")
                }`}
              </Text>

              <Button text="Swap Currencies" onPress={swapCurrencies} />
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.12,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBg: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logoMain: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 26,
    marginVertical: 20,
    textAlign: "center",
  },
  subtitle: {
    color: colors.white,
    marginVertical: 5,
    fontSize: 12,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    marginTop: 10,
  },
});
