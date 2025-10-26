import { RefreshControl, ScrollView, Text, View } from "react-native";
//Scrollview: Es un componente que permite  desplazar contenido cuando  este exceda el tamaño de la pantalla, ademas permite el desplazamiento vertical y horizontal.
export default function Index() {
  return (
    <ScrollView
    contentContainerStyle = {{
      padding: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#32ABF6'
    }}
    //Mostrar Ocutar barra scroll
    showsHorizontalScrollIndicator = {false}
    showsVerticalScrollIndicator={false}

      //Scroll Horizontal
      horizontal= {true}

      //Rebote final de scroll 
      bounces = {true}
    
      //Color del indicador Refresh
      refreshControl={
        <RefreshControl refreshing = {false}
        onRefresh={()=>{}}
        tintColor='#765A18'
        />
      }

      //Padding al hacer un scroll
      contentInset={{top: 20, left:0, bottom:20, right:0}}

      //Evento  cuando termina un scroll
      onScrollEndDrag={()=>{
        console.log("Scroll Terminado");
      }}

      //Estilo de paginacion
      pagingEnabled={true}

    >
    <Text> Contenido de Scoll View</Text>
    </ScrollView>
  );
}
