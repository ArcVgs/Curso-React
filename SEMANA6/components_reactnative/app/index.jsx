import { Button, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// * components
    // * View: Es el componente más basico para el diseño de la ui. Es comparable a un div en HTML y actúa como un componente contenedor que puede agrupar otros componentes secundarios.
   
    // * Text: Se utiliza para mostrar texto en la pantalla. Es similar a un elemento p o span en HTML. Se puede utilizar para mostrar texto estático o dinámico en cualquier lugar de la aplicación.
 
    // * Image: Se utiliza para mostrar imágenes en la aplicación. Es comparable a una etiqueta img en HTML y permite mostrar imágenes locales o remotas.
   
   
    // * TextInput: Es un componente que permite a los usuarios ingresar texto. Es similar a un campo de entrada en HTML y se utiliza para capturar datos del usuario, como nombres, correos electrónicos, etc.
   
    // * Button: Es un componente que permite a los usuarios interactuar con la aplicación mediante botones. Es comparable a un botón en HTML y se utiliza para realizar acciones específicas, como enviar formularios o navegar a otras pantallas.
   
    // * TouchableOpacity: Es similar al componente Button, pero permite una mayor personalización en el estilo y la interacción. Se utiliza para crear botones personalizados que responden a toques del usuario.
   
    // * Presable: Es similar al componente Button, pero ofrece más flexibilidad en la personalización de la interacción. Permite manejar eventos de toque y gestos de manera más avanzada.
   
    // * StyleSheet:Es un componente que permite definir estilos para los componentes de la aplicación. Es comparable a una hoja de estilos CSS en HTML y se utiliza para aplicar estilos como colores, fuentes, márgenes, etc.
   
    // * ScrollView:
    // * FlatList:
    // * SectionList:

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style= {styles.text}>Bienvenido a React Native</Text>
      <Text numberOfLines={2}>Dolore do exercitation ut cillum proident occaecat tempor proident duis aute minim. Occaecat duis labore labore eu ut occaecat et esse id sunt excepteur esse consequat aliquip. Tempor ut id non velit ullamco. Labore occaecat in id voluptate occaecat laborum mollit eu dolor commodo dolore nostrud pariatur laboris.</Text>
    
    <Image source={require('../assets/images/react-logo.png')}/>
    <Image source={{uri:'https://image.idntimes.com/post/20210322/3531-9b3ad9f379c33a673cb97fe2c1b99836-8d0fc660757c1aa0cc0b06f75e43a653.jpg'}} style={{width: 200, height:200}}/>
    <TextInput placeholder="Ingresa tu nombre"/>
    <Button title="Press me"/>
    <TouchableOpacity onPress={()=> alert('Button Pressed')}>
      <Text>Click Me</Text>
    </TouchableOpacity>
    <Pressable onPress={()=>alert('El pressable ha sido presionado')}>
      <Text>Pressable</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
  },
   
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});