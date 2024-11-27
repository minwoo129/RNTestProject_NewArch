import React, {ComponentProps} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface CommonModalProps {
  visible: boolean;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
  animationType?: PopupAnimationType;
  modalProps?: Omit<
    ComponentProps<typeof Modal>,
    'visible' | 'onRequestClose' | 'transparent' | 'animationType'
  >;
  body?: React.ReactNode;
}

export interface CommonModalFullScreenBodyProps {
  popupBackgroundColor?: string;
  customStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export interface CommonModalCenterHalfBodyProps {
  onPressBackground?: () => void;
  backgroundCustomStyle?: StyleProp<ViewStyle>;
  keyboardAvoidingViewProps?: Omit<
    ComponentProps<typeof KeyboardAvoidingView>,
    'style'
  >;
  pressableCustomStyle?: StyleProp<ViewStyle>;
  pressableProps?: Omit<ComponentProps<typeof Pressable>, 'style' | 'onPress'>;
  popupCustomStyle?: StyleProp<ViewStyle>;
  dimAreaBackgroundColor?: string;
  children?: React.ReactNode;
}

// ================================================================================
export type PopupAnimationType = 'none' | 'slide' | 'fade';

export type PaddingBehavior = 'height' | 'padding' | 'position';
