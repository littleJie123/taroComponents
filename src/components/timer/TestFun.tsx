import React  from 'react'
import { View } from '@tarojs/components'

export default function(props:{str:string}){
  return <View style={{color:'red'}}>product test fun:{props.str}</View>
}