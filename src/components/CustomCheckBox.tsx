import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface CheckboxProps {
  header: string;
  linkText?: string;
  isChecked: boolean;
  setIsChecked: (item: boolean) => void;
  activeColor?: string; // custom color (default: blue)
}

function CustomCheckbox({
  header,
  linkText,
  isChecked,
  setIsChecked,
  activeColor = '#000', // default blue
}: CheckboxProps) {
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={[
          styles.checkbox,
          { borderColor: activeColor },
          isChecked && { backgroundColor: activeColor },
        ]}
      >
        {isChecked && <Text style={styles.tick}>✓</Text>}
      </TouchableOpacity>

      <Text style={styles.checkboxText}>
        {header}
        {linkText ? (
          <Text style={[styles.checkboxText2, { color: activeColor }]}>
            {' '}
            {linkText}
          </Text>
        ) : null}
      </Text>
    </View>
  );
}

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: 'black',
  },
  tick: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  checkboxText2: {
    fontWeight: 'bold',
  },
});
