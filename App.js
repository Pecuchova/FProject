import React from 'react';
import {SafeAreaView} from 'react-native';
import TextComponent from './components/Text/TextComponent';


  // Render the App component
  const App = () => {
    return (
      <SafeAreaView>
        <TextComponent name={'Janka'} />
      </SafeAreaView>
    );
  };

// Export the App component as the default export of the module.
export default App;