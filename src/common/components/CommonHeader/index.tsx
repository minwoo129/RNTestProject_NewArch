import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AreaGridProps,
  checkAreaVisibleArgs,
  CommonHeaderBackBtnProps,
  CommonHeaderDirComponentsProps,
  CommonHeaderIconImgBtnProps,
  CommonHeaderLogoProps,
  CommonHeaderProps,
  CommonHeaderTitleProps,
} from './types';
import {IC_BACK} from 'Icons';

const checkAreaVisible = (args: checkAreaVisibleArgs): boolean => {
  const {left, center, right, dir} = args;
  const _left = left ? true : false;
  const _center = center ? true : false;
  const _right = right ? true : false;

  if (dir === 'left') {
    if (_left) return true;
    return _center && _right;
  }
  if (dir === 'center') {
    return _center;
  }
  if (dir === 'right') {
    if (_right) return true;
    return _center && _left;
  }
  return false;
};

const CommonHeader = ({
  headerStyles,
  left,
  center,
  right,
}: CommonHeaderProps) => {
  const visibleLeft = checkAreaVisible({left, center, right, dir: 'left'});
  const visibleCenter = checkAreaVisible({left, center, right, dir: 'center'});
  const visibleRight = checkAreaVisible({left, center, right, dir: 'right'});
  return (
    <SafeAreaView style={[styles.container, headerStyles]}>
      <AreaGrid visible={visibleLeft}>{left}</AreaGrid>
      <AreaGrid visible={visibleCenter}>{center}</AreaGrid>
      <AreaGrid visible={visibleRight}>{right}</AreaGrid>
    </SafeAreaView>
  );
};

const AreaGrid: FC<AreaGridProps> = ({visible, customStyle, children}) => {
  if (!visible) return null;
  return <View style={[styles.areaGrid, customStyle]}>{children}</View>;
};

CommonHeader.LeftComponents = ({
  customStyle,
  children,
}: CommonHeaderDirComponentsProps) => {
  return (
    <View
      style={[
        styles.dirComponentsDefStyle,
        customStyle,
        {justifyContent: 'flex-start', paddingHorizontal: 16},
      ]}>
      {children}
    </View>
  );
};

CommonHeader.CenterComponents = ({
  customStyle,
  children,
}: CommonHeaderDirComponentsProps) => {
  return (
    <View
      style={[
        styles.dirComponentsDefStyle,
        customStyle,
        {justifyContent: 'center'},
      ]}>
      {children}
    </View>
  );
};

CommonHeader.RightComponents = ({
  customStyle,
  children,
}: CommonHeaderDirComponentsProps) => {
  return (
    <View
      style={[
        styles.dirComponentsDefStyle,
        customStyle,
        {justifyContent: 'flex-end', paddingHorizontal: 16},
      ]}>
      {children}
    </View>
  );
};

CommonHeader.BackBtn = ({onPress}: CommonHeaderBackBtnProps) => {
  return <CommonHeader.IconImgBtn source={IC_BACK} onPress={onPress} />;
};

CommonHeader.IconImgBtn = ({
  source,
  onPress,
  visible = true,
  imageProps,
  touchAreaProps,
}: CommonHeaderIconImgBtnProps) => {
  if (!visible) return null;
  return (
    <TouchableOpacity {...touchAreaProps} onPress={onPress}>
      <Image {...imageProps} source={source} />
    </TouchableOpacity>
  );
};

CommonHeader.Logo = ({...imageProps}: CommonHeaderLogoProps) => {
  return <Image {...imageProps} />;
};

CommonHeader.Title = ({
  title,
  customStyle,
  textProps,
}: CommonHeaderTitleProps) => {
  return (
    <Text {...textProps} style={[customStyle]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  areaGrid: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dirComponentsDefStyle: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CommonHeader;
