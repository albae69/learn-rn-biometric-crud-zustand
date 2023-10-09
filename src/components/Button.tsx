import React from 'react';
import {Text, TextProps, TouchableOpacity, ViewStyle} from 'react-native';
import {Pencil, X, Trash} from 'lucide-react-native';

interface Props {
  title: string;
  isLoading: boolean;
  titleStyle: TextProps;
  buttonStyle: ViewStyle;
  type: 'Button' | 'ButtonIcon' | 'Icon';
  icon: 'close' | 'edit' | 'delete';
  onPress: () => void;
  onIconPress: () => void;
}

const getIcon = (icon: string, color?: string, size?: number) => {
  switch (icon) {
    case 'close':
      return <X size={size || 24} color={color || 'black'} />;
    case 'delete':
      return <Trash size={size || 24} color={color || 'black'} />;
    default:
      return <Pencil size={size || 24} color={color || 'black'} />;
  }
};

const Button = ({
  title = 'title',
  titleStyle,
  buttonStyle,
  type = 'Button',
  icon = 'close',
  onIconPress,
  ...props
}: Partial<Props>) => {
  if (type === 'Icon') {
    return (
      <TouchableOpacity onPress={onIconPress}>{getIcon(icon)}</TouchableOpacity>
    );
  }

  if (type === 'ButtonIcon') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-primary rounded-[10px] h-[40px] flex flex-row justify-center  items-center"
        style={buttonStyle}
        onPress={onIconPress}>
        {getIcon(icon, 'white', 18)}
        <Text {...titleStyle} className="text-white text-base font-medium ml-2">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="p-3 bg-primary rounded-[10px] w-full items-center justify-center"
      {...props}>
      <Text {...titleStyle} className="text-white text-base font-medium">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
