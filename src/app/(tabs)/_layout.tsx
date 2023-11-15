import { Tabs } from 'expo-router'
import { ClockCounterClockwise, House, User } from 'phosphor-react-native'

const TabRoutesLayout: React.FC = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='home'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <House
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='history/index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <ClockCounterClockwise
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <User
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabRoutesLayout
