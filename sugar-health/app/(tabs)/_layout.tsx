import CustomTabBar from '@/components/customBar';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <View>
              <Ionicons
                name={focused ? 'home': 'home-outline'}
                size={26}
              />
            </View>
          )
        }}
      />
    </Tabs>
  );
}
