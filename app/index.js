import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HTML from 'react-native-render-html';
import { useColorScheme } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

const Stack = createNativeStackNavigator();

const baseUrl = 'https://rejang-pedia.mfathinhalim.repl.co/phone';

import {
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  View,
} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>rejangpedia</Text>
    </View>
  );
};

const getRandomIndex = () => {
  // Mocking data for demonstration purposes
  const data = [
    {
      id: 1,
      title: 'Sample Article',
      imageUrl: 'https://ik.imagekit.io/9hpbqscxd/RejangPedia/sample-image.jpg',
    },
  ];
  return Math.floor(Math.random() * data.length);
};

const ArticleCard = ({ title, imageUrl, id, content, navigationn, dataTitle, data }) => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    bab: {
      fontSize: 24,
      marginLeft: 25,
    },
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? 'white' : '#F7FCFE',
    },
    babContent: {
      fontSize: 28,
    },
    babTitle: {
      fontSize: 30,
    },
    title: {
      fontSize: 40,
    },
    containerDetail: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F7FCFE',
    },
    scrollView: {
      marginHorizontal: 20,
    },
    cardContainer: {
      marginBottom: 16,
      marginRight: 16,
    },
    card: {
      width: width - 100,
      borderRadius: 12,
      overflow: 'hidden',
    },
    cardImage: {
      height: 220,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    cardTitle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardButtonContainer: {
      flex: 1,
      marginTop: 10,
      width: '60%',
    },
    cardButton: {
      backgroundColor: '#0d7502ff',
      borderRadius: 12,
      padding: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    detailsImage: {
      borderRadius: 12,
      width: '100%',
      height: '4%',
    },
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'F7F7F7',
      borderWidth: 1,
      padding: 10,
      borderRadius: 12,
    },
    slogan: {
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      padding: 16,
    },
    logo: {
      fontSize: 20,
    },
  });
  return (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigationn.navigate('Details', { data: { title, imageUrl, id, content } })}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <View style={styles.overlay} />
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardButtonContainer}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigationn.navigate('Details', { data: data })}>
        <Text style={styles.buttonText}> {">"} Baco {dataTitle} ...</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
};

const OtherCard = ({ title, imageUrl, id }) => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    bab: {
      fontSize: 24,
      marginLeft: 25,
    },
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? 'white' : '#F7FCFE',
    },
    babContent: {
      fontSize: 28,
    },
    babTitle: {
      fontSize: 30,
    },
    title: {
      fontSize: 40,
    },
    containerDetail: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F7FCFE',
    },
    scrollView: {
      marginHorizontal: 20,
    },
    cardContainer: {
      marginBottom: 16,
      marginRight: 16,
    },
    card: {
      width: width - 100,
      borderRadius: 12,
      overflow: 'hidden',
    },
    cardImage: {
      height: 220,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    cardTitle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardButtonContainer: {
      flex: 1,
      marginTop: 10,
      width: '60%',
    },
    cardButton: {
      backgroundColor: '#0d7502ff',
      borderRadius: 12,
      padding: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    detailsImage: {
      borderRadius: 12,
      width: '100%',
      height: '4%',
    },
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'F7F7F7',
      borderWidth: 1,
      padding: 10,
      borderRadius: 12,
    },
    slogan: {
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      padding: 16,
    },
    logo: {
      fontSize: 20,
    },
  });
  return (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => console.log(`Navigate to details screen for article ${id}`)}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <View style={styles.overlay} />
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
};
const OtherMoreCard = ({ title, imageUrl, id }) => {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    bab: {
      fontSize: 24,
      marginLeft: 25,
    },
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? 'white' : '#F7FCFE',
    },
    babContent: {
      fontSize: 28,
    },
    babTitle: {
      fontSize: 30,
    },
    title: {
      fontSize: 40,
    },
    containerDetail: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F7FCFE',
    },
    scrollView: {
      marginHorizontal: 20,
    },
    cardContainer: {
      marginBottom: 16,
      marginRight: 16,
    },
    card: {
      width: width - 100,
      borderRadius: 12,
      overflow: 'hidden',
    },
    cardImage: {
      height: 220,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    cardTitle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardButtonContainer: {
      flex: 1,
      marginTop: 10,
      width: '60%',
    },
    cardButton: {
      backgroundColor: '#0d7502ff',
      borderRadius: 12,
      padding: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    detailsImage: {
      borderRadius: 12,
      width: '100%',
      height: '4%',
    },
    input: {
      height: 40,
      margin: 12,
      backgroundColor: 'F7F7F7',
      borderWidth: 1,
      padding: 10,
      borderRadius: 12,
    },
    slogan: {
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      padding: 16,
    },
    logo: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => console.log(`Navigate to details screen for article ${id}`)}>
          <Image source={{ uri: imageUrl }} style={styles.cardImage} />
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const App = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [dataPilihan, setDataPilihan] = useState([]);
  const op = getRandomIndex();
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    bab: {
      fontSize: 24,
      marginLeft: 25,
    },
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#121212' : "#F7FCFE"
    },
    babContent: {
      fontSize: 28,
    },
    babTitle: {
      fontSize: 30,
    },
    title:{
      fontSize:40
    },
    containerDetail: {
      flex: 1,
      padding: 10,
      backgroundColor: "#F7FCFE"
    },
    scrollView: {
      marginHorizontal: 20,
    },
    cardContainer: {
      marginBottom: 16,
      marginRight: 16, // Add margin between cards
    },
    card: {
      width: width - 100, // Adjusted width to fit screen, minus margin
      borderRadius: 12,
      overflow: 'hidden',
    },
    cardImage: {
      height: 220,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    cardTitle: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardButtonContainer: {
      flex: 1,
      marginTop: 10,
      width: '60%', // Ensure the button takes the full width
    },
    cardButton: {
      backgroundColor: '#0d7502ff',
      borderRadius: 12,
      padding: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    detailsImage: {
      borderRadius: 12,
      width: '100%',
      height: '4%',
  
    },
    input: {
      height: 40,
      margin: 12,
      backgroundColor: "F7F7F7",
      borderWidth: 1,
      padding: 10,
      borderRadius: 12,
    },
    slogan: {
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      padding: 16,
    },
    logo: {
      fontSize: 20,
    },
  });

  useEffect(() => {
    axios.get(`${baseUrl}/`).then((response) => {
      if (response.data !== undefined) {
        setData(response.data.data);
        setDataPilihan(response.data.dataPilihan);
      } else {
        setData([
          {
            imageUrl: "https://ik.imagekit.io/9hpbqscxd/RejangPedia/image-954971f0-70a4-11ee-acd8-7d4adb250123.jpg"
          }
        ]);
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  var rand = Math.floor(Math.random() * data.length);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require('../logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.slogan}>Punyo Kito Galo</Text>
        <TextInput
          style={styles.input}
          placeholder="Mau Cari Apa Sanak?"
        />
        <ScrollView style={styles.scrollView} horizontal>
          <ArticleCard
            title="Tengok Galo Artikel"
            imageUrl={data[rand]?.Image}
            id={1}
            content={data[rand]?.Content}
            dataTitle={data[rand]?.Title.substring(0, 10)}
            data={data[rand]}
            navigationn={navigation}
          />
          <OtherCard
            title="Kamus Bahasa Rejang"
            imageUrl={"https://images.alphacoders.com/132/1326370.png"}
            id={2}
          />
          <OtherCard
            title="Media Sosial"
            imageUrl={"https://img.freepik.com/free-vector/person-addicted-social-media-illustration-concept_52683-32210.jpg"}
            id={3}
          />
        </ScrollView>
        <Text style={styles.bab}>Artikel Pilihan</Text>
        <ScrollView style={styles.scrollView} horizontal>
          <OtherMoreCard
            title={dataPilihan[0]?.Title}
            imageUrl={dataPilihan[0]?.Image}
            id={1}
            content={data[rand]?.Title.substring(0, 10)}
          />
          <OtherMoreCard
            title={dataPilihan[1]?.Title}
            imageUrl={dataPilihan[1]?.Image}
            id={1}
            content={data[rand]?.Title.substring(0, 10)}
          />
        </ScrollView>
        {/* Add more ArticsleCard components or other content here */}
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailsScreen = ({ route }) => {
  const colorScheme = useColorScheme();
  console.log(colorScheme)
 
  const { data } = route.params;

  return (
    <ScrollView style={styles.containerDetail}>
      <Text style={styles.title}>{data.Title}</Text>
      {data.Image && (
      <Image
        source={{ uri: data.Image }}
        style={styles.detailsImage}
        resizeMode="cover"
      />)}
      {data.Link && (
  <YoutubePlayer
    height={200}
    play={true}
    baseUrlOverride={data.Link}
    style={{
      borderRadius: 12,
      marginTop: 20,
    }}
  />
)}

      

      {data.Content.map((bab, index) => (
        <View key={index}>
          <Text style={styles.babTitle}>{bab.babTitle}</Text>
          <HTML source={{ html: bab.babContent }} style={styles.babContent}
           contentWidth={"100%"} // Set your content width here
                tagsStyles={tagsStyles}

 />
        </View>
      ))}
      <View style={styles.cardButtonContainer}>
      <TouchableOpacity
        style={{marginBottom: 20, backgroundColor: "gray", padding: 12, width:"50", borderRadius: 23}}
        onPress={() => navigationn.navigate('Details', { data: data })}>
        <Text style={{color: "white"}}>Edit Artikel</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bab: {
    fontSize: 24,
    marginLeft: 25,
  },
  babContent: {
    fontSize: 28,
  },
  babTitle: {
    fontSize: 30,
  },
  title:{
    fontSize:40
  },
  containerDetail: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7FCFE"
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardContainer: {
    marginBottom: 16,
    marginRight: 16, // Add margin between cards
  },
  card: {
    width: width - 100, // Adjusted width to fit screen, minus margin
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    height: 220,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  cardTitle: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardButtonContainer: {
    flex: 1,
    marginTop: 10,
    width: '60%', // Ensure the button takes the full width
  },
  cardButton: {
    backgroundColor: '#0d7502ff',
    borderRadius: 12,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  detailsImage: {
    borderRadius: 12,
    width: '100%',
    height: 300,

  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: "F7F7F7",
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
  },
  slogan: {
    textAlign: 'center',
  },
  header: {
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    fontSize: 20,
  },
});
const MyStack = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{ title: 'rejangpedia' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const { width } = Dimensions.get('window');

export default MyStack;
