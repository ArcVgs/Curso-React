import { Ionicons, MaterialIcons } from '@expo/vector-icons';
 
import { Tabs } from "expo-router";
 
export default function RootLayout() {
  return(
  <Tabs
  screenOptions={({route}) => ({
    headerShown: false,
    tabBarIcon: ({color, size}) => {
        let iconName: keyof typeof Ionicons.glyphMap='home-outline';  
        if(route.name === 'index'){
          iconName = 'home-outline';
        } else if (route.name === 'profile'){
          iconName = 'person-outline';
        } else {
          iconName = 'settings-outline';
        }
 
        return <Ionicons name={iconName} size={size} color={color} />;
      },
  })}
  >
 
    <Tabs.Screen name="index"  options={{ title: 'Inicio' }}/>
    <Tabs.Screen name="profile" options={{ title: 'Perfil' }}/>
    <Tabs.Screen name="product" options={{ title: 'Productos' }}/>
    {/* esto configura la navegación tipo Tabs en el grupo (tabs) como contenido principal */}
  </Tabs>
  );
  // <Stack/> navegación tipo pila
  // <Tabs/> Navegación con pestañas
  // <Drawer/> Navegación tipo menú lateral
  // <Link /> Navegación declarativa
  // router.push() Navegación programática
  // useLocalSearchParams() lee parámetros de ruta.
}