import React from "react";
import {Text} from "react-native";
import Style from "./Style";

const TextComponent = () => {
    return <Text style={[Style.text, Style.text1, {color: "green"}]}> Hello, React Native World! </Text>;
};

export default TextComponent;