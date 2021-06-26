import React from "react";
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  StyleSheet,
} from "react-native";
import colors from "../consts/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 14,
    marginHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight,
  },
});

export const ConvertInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
