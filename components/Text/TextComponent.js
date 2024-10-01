import React, {useState, useEffect} from 'react';
import {Text} from "react-native";
import style from './Style';

const TextComponent = props => {
    const [fullName, setFullName] = useState('');
  
    useEffect(() => {
      //It is called right after the component is rendered
      //Perform some setup for example fetching data from API
      console.log('Our component has been mounted');
      return () => {
        console.log('Component is now being destroyed');
      };
    }, []);
  
    useEffect(() => {
      console.log('The value of full name has been changed');
    }, [fullName]);

    return (
        <Text
          style={[style.text, style.text1, {color: 'green'}]}
          onPress={() => setFullName('Janka Pecuchova')}>
          Hello, {props.name}! I know that your full name is {fullName}
        </Text>
      );
    };
    
    /**
     * ---------------------------- Uncomment for Class Based Component -----------------------------
     class TextComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          fullName: props.name + ' Pecuchova',
        };
      }
      componentDidMount() {
        //It is called right after the component is rendered
        //Perform some setup for example fetching data from API
        console.log('Our component has been mounted');
      }
      componentDidUpdate(prevProps, prevState) {
        //Called when state or props of the application is updated
        console.log(
          'The state of the application has been changed',
          prevState,
          this.state,
        );
      }
      componentWillUnmount() {
        console.log('Component is now being destroyed');
      }
      render() {
        return (
          <Text
            style={[style.text, style.text1, {color: 'green'}]}
            onPress={() =>
              this.setState({...this.state, ...{fullName: 'Janka P.'}})
            }>
            Hello, {this.props.name}! I know that your full name is{' '}
            {this.state.fullName}
          </Text>
        );
      }
    }
     */

export default TextComponent;


