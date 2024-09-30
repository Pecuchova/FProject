import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';


const App = () => {
  const [imageSource, setImageSource] = useState({uri:"http://example.com"});
  return (
    <SafeAreaView>
      <Image 
      source={require("./assets/images/cake.png")} 
      style={{width: "100%", height: "100%", backgroundColor: "red"}} 
      resizeMode={"repeat"}
      onError = {() => {
        console.log("Error has been occured while loading an image");
        setImageSource(require("./assets/images/cake.png"))
      }}
      />
      <Image 
      source={{ 
        uri: 'https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp'
        }} 
        style={{width: 100, height: 100}} 
        />
    </SafeAreaView>
  );
};

export default App;






