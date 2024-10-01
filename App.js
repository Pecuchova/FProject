import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';


const App = () => {
  const [text, setText] = useState(0);
  useEffect( () => {
    console.log("Text sa zmenil:");
   }, [text]);
  

  useEffect( () => {
    console.log("Komponent bol renderovaný!");
   }, []);

  return (
    <SafeAreaView>
     <Text
        onPress={() => setText( text + 1)} >
          {text}
     </Text>
    </SafeAreaView>
  );
};

export default App;






