import React from "react";
import {Text} from "react-native";
import Style from "./Style";

const TextComponent = () => {
    const handleTextClick = () => {
        alert("The text has been clicked!")
    }
    return (
        <Text style={[Style.text, Style.text1, {color: "green"}]} onPress={() => handleTextClick()}>
         Hello, React Native World! 
         </Text>
    );
};


export default TextComponent;