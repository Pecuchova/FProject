import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';


const App = () => {
  const [text, setText] = useState("Hello, World!")
  return (
    <SafeAreaView>
     <Text> Hello World! </Text>
     <Text
        onPress={() => setText("Nový stav.")} >
          {text}
     </Text>
    </SafeAreaView>
  );
};

export default App;






