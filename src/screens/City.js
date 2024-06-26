import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import IconText from "../components/IconText";

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseText,
    imageLayout,
    rowLayout,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>Helsinki</Text>
        <Text style={[countryName, cityText]}>Finland</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={riseText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"18:28:15pm"}
            bodyTextStyles={riseText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 20,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },

  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseText: {
    fontSize: 20,
    color: "white",
  },

  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
