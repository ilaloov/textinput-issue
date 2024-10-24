import {Button, Modal, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline
        onContentSizeChange={e => console.log(e.nativeEvent.contentSize.height)}
      />
      <Button onPress={() => setModal(true)} title="Show modal" />
      <Modal visible={modal}>
        <TextInput
          multiline
          onContentSizeChange={e =>
            console.log(e.nativeEvent.contentSize.height)
          }
        />
        <Button onPress={() => setModal(false)} title="Hide modal" />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});
