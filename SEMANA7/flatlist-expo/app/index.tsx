import { Header } from "@react-navigation/elements";
import { Component } from "react";
import { FlatList, View } from "react-native";
//*Flat list es un componente optimizado para renderizar listas largas de datos que puedan cambiar con el tiempo. A diferencia del ScrollView, el FlatLisr solo renderiza los elementos que estan actualmente visibles en la pantalla.
export default function Index() {
  return (
  //Propiedades importantes del FlatList
  <FlatList 
  //Datos a renderizar
  data={{arrayDatos}}

  //Funcion para renderizar cada item
  renderItem={({item})=><Component item={item}/>}

  //Funcion para extraer un key unico
  keyExtractor={(item)=>item.id}

  //Separador entre items
  ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'green'}}/>}

  //header de la lista
  ListHeaderComponent={<Header />}

  //Footer de la lista
  ListFooterComponent={<Footer/>}

  //Mensaje ciando la lista esta vacia
  ListEmptyComponent={<EmptyMessage/>}

  //Numero inicial de items a renderizar
  initialNumToRender={10}

  //Pull to Refresh
  refreshing={isRefreshing}
  onRefresh={()=> handleRefres()}

  //Estilo de contenedor
  contentContainerStyle={StyleSheet.container}

  //Carga de más items al llegar al final
  onEndReached={()=> cargarMasItems()}
  onEndReachedThreshold={0.5}

  //Columnas(tipo grid)
  numColumns={2}

  //invertir direccion del scroll
  inverted={false}

  //Deshabilitar el Scrool
  scrollEnabled={true}

  />
  );
}
