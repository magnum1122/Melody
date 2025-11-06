import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View className='flex-1 justify-center items-center bg-ui_950'>
        <ActivityIndicator size={'large'} color={"#C11007"}/>
    </View>
  )
}

export default Loading