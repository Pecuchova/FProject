import React, {useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button, StyleSheet} from 'react-native';

const App = () => {
  let array = Array(1000).fill(0);
  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}>
        {array.map((value, index) => (
          <Text key={index}> Hello World {index}! </Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title="Scroll To Top" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 50,  
  },
});

export default App;
