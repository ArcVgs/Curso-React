import { ScrollView, Text, View, Image, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
    <ScrollView 
    pagingEnabled
    contentContainerStyle = {{
      flexGrow:1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#21618bff',
      padding:50,
    }}
    showsVerticalScrollIndicator={false}
    >

    <Text>Scroll View Example</Text>
    <Text style = {styles.text}>Image1</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2022/04/21/06/44/louvre-7146800_960_720.jpg'}}
    style= {styles.image}
    />

    <Text style = {styles.text}>Image2</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2016/11/29/07/48/louvre-1868203_960_720.jpg'}}
    style= {styles.image}
    />

    <Text style = {styles.text}>Image3</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2019/07/18/18/41/france-4347020_960_720.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image4</Text>
    <Image 
    source ={{uri : 'https://media.istockphoto.com/id/2231515661/photo/eiffel-tower-by-the-seine-with-boats-and-seagulls-sunset-view-of-paris.jpg?s=1024x1024&w=is&k=20&c=ltD6AC4yMUyQ93n9YOPsQ8sEyZ-27LjSn0kNeO7m0Xc='}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image5</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2025/10/12/07/32/measuring-cups-9889151_960_720.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image6</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2021/03/25/17/42/teapot-6123746_1280.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image7</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2016/11/29/13/07/beverage-1869722_960_720.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image8</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2016/11/29/13/04/tea-1869716_1280.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image9</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2022/06/29/08/26/pour-7291236_1280.jpg'}}
    style= {styles.image}
    />
    <Text style = {styles.text}>Image10</Text>
    <Image 
    source ={{uri : 'https://cdn.pixabay.com/photo/2016/11/29/13/04/tea-1869716_1280.jpg'}}
    style= {styles.image}
    />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:10
  },
  image:{ 
  width:300,
  height: 200,
  marginBottom: 20
  }
})