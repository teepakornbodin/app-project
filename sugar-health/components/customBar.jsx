import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Custom = ({ state, descriptors, navigation }) => {

  const icon = ({
    index: (props)=> <Ionicons name='home' {...props}/>,
    calendar: (props)=> <Ionicons name='calendar-clear' {...props}/>
  })

  return (
    <View className='flex-row px-2 bottom-4 py-6 justify-between items-center border-t'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className='justify-center items-center'
          >
            {
              icon[route.name] && icon[route.name] ({
                color: '#000000',
                size: 26,
              })
            }
            <Text className={isFocused ? 'text-black text-[10px]' : 'text-gray-500 text-[10px]'}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default Custom