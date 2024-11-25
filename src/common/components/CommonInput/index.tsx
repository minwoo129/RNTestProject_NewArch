import React, {ComponentProps, FC} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  CommonInput1RowProps,
  CommonInput2RowProps,
  CommonInputCancelBtnProps,
  CommonInputGridProps,
  CommonInputProps,
  CommonInputTitleProps,
  CommonInputValidationProps,
} from './types';
import {IC_TEXT_CANCEL} from 'Icons';

const CommonInput = ({gridStyle, top, content, bottom}: CommonInputProps) => {
  return (
    <CommonInput.Grid gridStyle={gridStyle}>
      {top}
      {content}
      {bottom}
    </CommonInput.Grid>
  );
};

CommonInput.Grid = ({gridStyle, children}: CommonInputGridProps) => {
  return <View style={[styles.gridContainer, gridStyle]}>{children}</View>;
};

CommonInput.Title = ({
  title,
  additionalStyle,
  titleTxtProps,
}: CommonInputTitleProps) => {
  return (
    <Text
      {...titleTxtProps}
      style={[titleStyles.titleDefaultStyle, additionalStyle]}>
      {title}
    </Text>
  );
};

CommonInput.CommonInput1Row = ({
  inputGridAdditionalStyle,
  value,
  onChangeText,
  textInputProps,
  textInputAdditionalStyle,
  inputGridLeft,
}: CommonInput1RowProps) => {
  let cancelBtnVisible = value !== '';

  if (textInputProps) {
    const {editable} = textInputProps;
    cancelBtnVisible = value !== '' && (editable ?? true);
  }

  return (
    <View style={[input1RowStyles.gridDefaultStyle, inputGridAdditionalStyle]}>
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChangeText}
        style={[input1RowStyles.inputDefaultStyle, textInputAdditionalStyle]}
      />
      {inputGridLeft}
    </View>
  );
};

CommonInput.CommonInput2Row = ({
  inputGridAdditionalStyle,
  left,
  right,
}: CommonInput2RowProps) => {
  return (
    <View
      style={[
        input2RowStyles.gridBasicStyle,
        input2RowStyles.gridDefaultStyle,
        inputGridAdditionalStyle,
      ]}>
      {left}
      {right}
    </View>
  );
};

CommonInput.CancelBtn = ({visible, onPress}: CommonInputCancelBtnProps) => {
  if (!visible) return null;

  return (
    <TouchableOpacity onPress={onPress} style={cancelBtnStyles.cancelBtn}>
      <Image source={IC_TEXT_CANCEL} />
    </TouchableOpacity>
  );
};

CommonInput.Validation = ({
  validation,
  additionalStyle,
  textProps,
}: CommonInputValidationProps) => {
  if (!validation) return null;
  return (
    <Text
      {...textProps}
      style={[validationStyles.validationTxt, additionalStyle]}>
      {validation}
    </Text>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width: '100%',
  },
  elementGrid: {
    width: '100%',
  },
});
const titleStyles = StyleSheet.create({
  titleDefaultStyle: {
    //fontFamily: Font.PretendardRegular,
    fontSize: 16,
    //color: GuideColor.gray700,
    letterSpacing: -0.4,
    includeFontPadding: false,
    padding: 0,
  },
});

const input1RowStyles = StyleSheet.create({
  gridBasicStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridDefaultStyle: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    //borderColor: AppColor.TextInput.borderColor.disabled,
    borderRadius: 6,
  },
  inputDefaultStyle: {
    flex: 1,
    //fontFamily: Font.PretendardRegular,
    fontSize: 18,
    //color: AppColor.TextInput.text,
    letterSpacing: -0.45,
    includeFontPadding: false,
    padding: 0,
  },
});
const input2RowStyles = StyleSheet.create({
  gridBasicStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridDefaultStyle: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    //borderColor: AppColor.TextInput.borderColor.disabled,
    borderRadius: 6,
  },
  inputDefaultStyle: {
    flex: 1,
    //fontFamily: Font.PretendardRegular,
    fontSize: 18,
    //color: AppColor.TextInput.text,
    letterSpacing: -0.45,
    includeFontPadding: false,
    padding: 0,
  },
});

const cancelBtnStyles = StyleSheet.create({
  cancelBtn: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});

const validationStyles = StyleSheet.create({
  validationTxt: {
    //fontFamily: Font.PretendardRegular,
    fontSize: 15,
    color: '#ff453a',
    letterSpacing: -0.38,
    includeFontPadding: false,
    padding: 0,
  },
});

export default CommonInput;
