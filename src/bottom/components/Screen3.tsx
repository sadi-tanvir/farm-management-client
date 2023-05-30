import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomWarningAlert from '../../components/common/CustomWarningAlert'

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowAlert(!showAlert)}
        style={{
          backgroundColor: 'blue',
          margin: 40,
          borderRadius: 10,
          width: 110,
          elevation: 10,
          padding: 10,
        }}>
        <Text style={{ fontSize: 22, color: 'white' }}>Click Me</Text>
      </TouchableOpacity>


      <CustomWarningAlert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleSubmit={() => {
          console.log("Confirm button pressed")
          setShowAlert(false)
        }}
      />
    </View>
  );
}