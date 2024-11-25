import {ComponentProps, ReactNode} from 'react';
import {
  KeyboardType,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface CommonInputGridProps extends CommonInputGridExtendProps {
  children: ReactNode;
}

interface CommonInputGridExtendProps {
  gridStyle?: StyleProp<ViewStyle>;
}

export interface CommonInputProps extends CommonInputGridExtendProps {
  top?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
}

export interface CommonInputTitleProps {
  title: string;
  additionalStyle?: StyleProp<TextStyle>;
  titleTxtProps?: Omit<ComponentProps<typeof Text>, 'style' | 'children'>;
}

export interface CommonInput1RowProps {
  inputGridAdditionalStyle?: StyleProp<ViewStyle>;
  value: string;
  onChangeText?: (text: string) => void;
  textInputProps?: Omit<
    ComponentProps<typeof TextInput>,
    'style' | 'value' | 'onChangeText'
  >;
  textInputAdditionalStyle?: StyleProp<TextStyle>;
  inputGridLeft?: ReactNode;
}

export interface CommonInput2RowProps {
  inputGridAdditionalStyle?: StyleProp<ViewStyle>;
  left?: ReactNode;
  right?: ReactNode;
}

type CustomTextInputProps = {
  applyDefaultStyle?: boolean;
} & ComponentProps<typeof TextInput>;

export interface CommonInputCancelBtnProps {
  visible: boolean;
  onPress: () => void;
}

export interface CommonInputValidationProps {
  validation?: string;
  additionalStyle?: StyleProp<TextStyle>;
  textProps?: Omit<ComponentProps<typeof Text>, 'style'>;
}
