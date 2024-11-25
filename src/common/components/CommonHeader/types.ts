import {ComponentProps} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface CommonHeaderProps {
  headerStyles?: StyleProp<ViewStyle>;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export interface AreaGridProps {
  visible: boolean;
  customStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export interface CommonHeaderDirComponentsProps {
  customStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export interface CommonHeaderBackBtnProps {
  onPress?: () => void;
}

export interface CommonHeaderIconImgBtnProps {
  source: ImageSourcePropType;
  onPress?: () => void;
  visible?: boolean;
  touchAreaProps?: Omit<ComponentProps<typeof TouchableOpacity>, 'onPress'>;
  imageProps?: Omit<ComponentProps<typeof Image>, 'source'>;
}

export interface CommonHeaderLogoProps extends ComponentProps<typeof Image> {}

export interface CommonHeaderTitleProps {
  title: string;
  customStyle?: StyleProp<ViewStyle>;
  textProps?: Omit<ComponentProps<typeof Text>, 'style' | 'children'>;
}

// =================================================================================================
export type checkAreaVisibleArgs = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  dir: 'left' | 'center' | 'right';
};
