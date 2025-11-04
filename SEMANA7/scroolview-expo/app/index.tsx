import { RefreshControl, ScrollView, Text } from "react-native";
//*Scroolview:Es un componente que permite desplazar contenido cuando este exceda al tamaño de la pantalla, ademas permite el desplazamiento vertical y horizonta.

export default function Index() {
  return (
<ScrollView
//Estilo del contenedor
contentContainerStyle={{
  padding: 50,
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: '#32ABF6'
}}

//Mostrar/ocultr barra del scroll
showsHorizontalScrollIndicator = {false}
showsVerticalScrollIndicator={false}

//Scroll Horizontal
horizontal={true}

//Rebote al final del scroll(Ios)
bounces={true}

//Color del indicador del refresh
refreshControl={
  <RefreshControl 
  refreshing={false}
  onRefresh={()=>{}}
  tintColor={'#765a18'}
  />
  }

  //Padding al hacer un scroll
  contentInset={{top: 20, left: 0, bottom:20,right:0}}
  
  //Evento cuando termina el scroll
  onScrollEndDrag={()=>{
    console.log("Scroll terminado")
  }}

  //Estilo de paginacion
  pagingEnabled={true}
>
  <Text>Contenido del scroolView</Text>
</ScrollView>
  );
}
