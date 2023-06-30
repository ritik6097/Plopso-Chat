import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import ChatScreen from './src/Chat/ChatScreen';

const App = () => {
  const compDetails = {
    role: 'FrontEnd Role',
    company: 'Amazon',
    description:
      'We are looking for an adept Software Developer. You will develop top-notch software that work across platforms and is scalable.',
  };
  return (
    <GestureHandlerRootView>
      <ChatScreen />
    </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text_header: {
    padding: 10,
    fontSize: 13,
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  info_header: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact_text: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 19,
    textAlign: 'center',
    color: ' rgba(0, 77, 64, 0.5)',
  },
  date_time: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
    color: 'rgba(38, 50, 56, 0.5)',
  },
  inputView: {
    marginTop: 120,
    padding: 10,
  },
  chatInput: {
    borderWidth: 1,
    borderColor: '#46A094',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});

export default App;