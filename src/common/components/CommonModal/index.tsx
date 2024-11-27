import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {
  CommonModalCenterHalfBodyProps,
  CommonModalFullScreenBodyProps,
  CommonModalProps,
} from './types';
import {
  DIM_AREA_BACKGROUND_COLOR,
  POPUP_BACKGROUND_COLOR,
} from './defaultDatas';

const CommonModal = ({
  visible,
  onRequestClose,
  animationType = 'none',
  modalProps,
  body,
}: CommonModalProps) => {
  return (
    <Modal
      animationType={animationType}
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
      {...modalProps}>
      {body}
    </Modal>
  );
};

CommonModal.FullScreenBody = ({
  popupBackgroundColor = POPUP_BACKGROUND_COLOR,
  customStyle,
  children,
}: CommonModalFullScreenBodyProps) => {
  return (
    <SafeAreaView
      style={[
        fullScreenStyles.container,
        customStyle,
        {backgroundColor: popupBackgroundColor},
      ]}>
      {children}
    </SafeAreaView>
  );
};

CommonModal.CenterHalfBody = ({
  onPressBackground,
  backgroundCustomStyle,
  keyboardAvoidingViewProps,
  pressableCustomStyle,
  pressableProps,
  popupCustomStyle,
  dimAreaBackgroundColor = DIM_AREA_BACKGROUND_COLOR,
  children,
}: CommonModalCenterHalfBodyProps) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: dimAreaBackgroundColor},
        backgroundCustomStyle,
      ]}>
      <KeyboardAvoidingView style={{flex: 1}} {...keyboardAvoidingViewProps}>
        <Pressable
          style={[styles.pressableArea, pressableCustomStyle]}
          onPress={onPressBackground}
          {...pressableProps}
        />
        <View style={popupCustomStyle} pointerEvents="box-none">
          {children}
        </View>
        <Pressable
          style={[styles.pressableArea, pressableCustomStyle]}
          onPress={onPressBackground}
          {...pressableProps}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const fullScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommonModal;
