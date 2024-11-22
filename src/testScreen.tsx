import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CommonHeader from './CommonHeader';

interface testScreenProps {}

const testScreen: FC<testScreenProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        left={
          <CommonHeader.LeftComponents>
            <CommonHeader.BackBtn />
            <CommonHeader.Title title="test" customStyle={{marginLeft: 12}} />
          </CommonHeader.LeftComponents>
        }
      />
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(testScreen);
