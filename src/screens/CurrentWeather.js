import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highlowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
  } = styles;
  console.log(weatherData);
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={"High:9"}
          messageTwo={"Low:2"}
          containerStyles={highlowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={"Its sunny"}
        messageTwo={"Its a perfect weather"}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highlow: {
    fontSize: 20,
    color: "black",
  },
  highlowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
