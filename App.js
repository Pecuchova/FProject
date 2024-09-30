import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import TextComponent from './components/Text/TextComponent';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "blue", height: 100}}> 
        <Text>Header</Text>
      </View>
      <View style={{ backgroundColor: "grey"}}>
      <TextComponent />
      <TextComponent />
      <TextComponent />
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;