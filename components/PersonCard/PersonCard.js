import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Style'; // Import štýlov

// Komponent pre kartičku osoby
const PersonCard = ({ name, position, contact }) => {
  const handlePress = () => {
    Alert.alert('Kontakt', `Kontakt na ${name}: ${contact}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
      <Button title="Zobraziť kontakt" onPress={handlePress} />
    </View>
  );
};

// PropTypes na validáciu props
PersonCard.propTypes = {
  name: PropTypes.string.isRequired,    // Povinné meno (string)
  position: PropTypes.string.isRequired, // Povinná pozícia (string)
  contact: PropTypes.string.isRequired,  // Povinný kontakt (string)
};

export default PersonCard;
