/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {Text, Pressable, StyleSheet, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

function App(): React.JSX.Element {
  const [count, setCount] = React.useState(0);
  const [pressCount, setPressCount] = React.useState(0);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleCloseButton = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Pressable
        style={{padding: 16}}
        onPointerDown={() => setCount(n => n + 1)}
        onPressIn={() => setPressCount(n => n + 1)}>
        <Text>Press me</Text>
      </Pressable>
      <Text style={{marginBottom: 16}}>
        pointer: {count} -- press: {pressCount}
      </Text>

      <Button
        title="Open Sheet"
        onPress={() => bottomSheetRef.current?.expand()}
      />

      <BottomSheet ref={bottomSheetRef} enablePanDownToClose>
        <Button title="close" onPress={handleCloseButton} />
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    height: 400,
    padding: 36,
    alignItems: 'center',
  },
});

export default App;
