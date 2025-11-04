import { useEffect, useState } from "react";
import { FlatList, Image, Text, View,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  //useState: Es uriliazdo para manejar el estado de los productos, inicialmente es un array vacio
  const [products, setProducts]= useState([]);
  //useeffect: Se utiliza para cargar los productos cuando el componente se monta. La funcion setProducts simula la carga de datos y actualiza el estado de un array de productos.
  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  }

  const renderItem = ({item})=> (
    <View  style = {style.itemContainer}>
      <Image source={{uri: item.image}} style={{width: 100, height:100, borderRadius:8}}/>
      <Text style={style.productTitle}>{item.title}</Text>
      <Text style={style.productPrice}>{item.price}</Text>
    </View>
  )

  return (
    <SafeAreaView style = {style.safeArea}>
    <View
      style={style.container}>
        <Text>Product List</Text>
        <FlatList 
        data= {products}
        renderItem={renderItem}//Definimos como se renderiza cada elemento de la lista
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}/>
    </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,    
    backgroundColor: 'purple',
  },
container: {
  flex: 1,
  paddingHorizontal:50,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#33ac98ff'
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  marginTop: 80,
},
itemContainer: {
  padding:10,
  alignContent: 'center',
  borderRadius:8,
  width:'80%',
  marginBottom:10,
  backgroundColor: '#33ac98ff'
},

productTitle: {
  fontWeight:'500',
  textAlign: 'center',
},

productPrice: {
  fontWeight: 'bold',
  fontSize: 18,
  color: 'red',
  textAlign: 'center'
}

})