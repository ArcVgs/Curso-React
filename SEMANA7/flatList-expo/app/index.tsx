import { Component } from "react";
import { FlatList, Text, View } from "react-native";
//Es un componente optimizado para renderizar listas  largas de datos que pueden cambiar  con el tiempo.A diferncia del scrolview, el flat list solo renderiza los elementos que estan visibles en la pantalla.
export default function Index() {
  return (
//Propiedades importantes del flatList
<FlatList
//Datos a renderizar
data={{arrayDatos}}

//Funcion para renderizar cada item
renderItem={({item})=><Component item={item}/>}

//Funcion para extraer un key unico
keyExtractor={(item)=>item.id}

//Separador entre items
ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'green'}}/>}

//Header de la lista
ListHeaderComponent={<Header/>}

//Footer de la lista 
ListFooterComponent={<Footer />}

//Mensaje cuando la lista esta vacia
List ListEmptyComponent={<EmptyMessage />}

//Numero Inicial de items a renderizar 
initialNumToRender={10}

//Pull to refresh
refreshing={isRefreshing}
onRefresh={()=> handleRefresh()}

//Estilod de contenedor
contentContainerStyle={StyleSheet.container}

//Carga de mas Items al final 
onEndReached={()=> cargarMasItems()}
onEndReachedThreshold={0.5}

//Columnas {tipo grid}
numColumns={2}

//invertir direccion de scroll
inverted={false}

//Deshabilitar el scroll
scrollEnabled = {true}

/>
  );
}
