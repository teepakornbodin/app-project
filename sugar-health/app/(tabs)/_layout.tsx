import CustomTabBar from '@/components/customBar';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      // tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: true
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'home': 'home-outline'}
                size={26}
              />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'calendar-clear': 'calendar-clear-outline'}
                size={26}
              />
          )
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View className='w-[56px] h-[56px] bg-red-300'>
              <Ionicons
                name={focused ? 'camera': 'camera-outline'}
                size={26}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'notifications': 'notifications-outline'}
                size={26}
              />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'person': 'person-outline'}
                size={26}
              />
          )
        }}
      />
    </Tabs>
  );
}
