import React, { useState } from 'react';
import { View, Text, Button, Platform, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDatePicker = ({ date, setDate }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date || new Date();
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const displayDate=date ? date.toDateString() : new Date().toDateString();

  return (
    <View>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <Text>{displayDate}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
