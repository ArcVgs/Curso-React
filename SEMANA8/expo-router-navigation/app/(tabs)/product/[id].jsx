import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import React from 'react'

const ProductDetail = () => {
    const {id} = useLocalSearchParams();
    
  return (
    <View style={styles.container}>
      <Text>Detalle del producto con ID: {id}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    }
})