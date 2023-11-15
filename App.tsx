import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SignIn } from './src/screens/SignIn'

export default function App() {
  return (
    <View className='flex-1'>
      <SignIn />
      <StatusBar style='light' />
    </View>
  )
}
