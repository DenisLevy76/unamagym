import { Barbell, GoogleLogo } from 'phosphor-react-native'
import { View, Text, ImageBackground } from 'react-native'

import { Button } from '../../components/Button'

import imgBg from '../../assets/Background.png'
import { router } from 'expo-router'

export const SignIn: React.FC = () => {
  return (
    <ImageBackground
      className='flex-1 items-center justify-center shadow-inner bg-black'
      source={imgBg}
    >
      <View className='px-8'>
        <View className='pt-4 items-center justify-center'>
          <View className='flex-row items-center gap-4'>
            <Barbell
              color='#00B37E'
              size={40}
            />
            <Text className='text-white text-3xl font-bold'>Unama Gym</Text>
          </View>
          <Text className='text-white text-base'>
            Treine sua mente e o seu corpo
          </Text>
        </View>
        <View className='mt-12'>
          <Text className='text-white font-bold mb-2 text-xl'>Entrar</Text>
          <Text className='text-zinc-300 mb-8'>
            Clique no botão abaixo para entrar com sua conta Google.
          </Text>
          <Button onPress={() => router.push('/home')}>
            <GoogleLogo
              color='white'
              size={24}
            />
            <Text className='text-white font-bold text-base'>Google</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  )
}
