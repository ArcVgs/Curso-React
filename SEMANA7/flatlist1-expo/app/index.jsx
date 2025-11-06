import { useEffect, useState } from "react";
import { FlatList, Image, Text, View,StyleSheet } from "react-native";

export default function Index() {
  //useState: Es uriliazdo para manejar el estado de los productos, inicialmente es un array vacio
  const [products, setProducts]= useState([])
  //useeffect: Se utiliza para cargar los productos cuando el componente se monta. La funcion setProducts simula la carga de datos y actualiza el estado de un array de productos.
  useEffect(()=>{
    getProducts();
  },[]);

  const getProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  }

  const renderItem = ({item})=> {
    <View>
      <Image source={{uri: item.image}} style={{width: 100, height:100}}/>
      <Text style={style.productTitle}>{item.title}</Text>
      <Text style={style.productTitle}>{item.price}</Text>
    </View>
  }

  return (
    <View
      style={style.container}>
        <Text>Product List</Text>
        <FlatList 
        data= {products}
        renderItem={renderItem}//Definimos como se renderiza cada elemento de la lista
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
}

const style = StyleSheet.create({
container: {
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: '#33ac98ff'
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20
},
itemContainer: {
  padding:10,
  alignContent: 'center',
  borderRadius:8,
  width:'80%',
  marginBottom:10,
  backgroundColor: '#33ac98ff'
},
})
