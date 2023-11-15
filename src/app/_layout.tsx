import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
      <StatusBar style='light' />
    </ThemeProvider>
  )
}
