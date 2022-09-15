import { Image, StyleSheet, Text, View } from "react-native";

export default function Comic({ name, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.titleComic}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: 350,
        height: "auto",
        alignItems: "center",
        backgroundColor: "#BC6361",
        borderColor: "darkred",
        justifyContent: "center",
        borderWidth: 3,
        borderRadius: 20,
        padding: 40,
        marginTop: 10,
        marginBottom: 30,
        // marginLeft: 35,
        // marginRight: 35,
        marginHorizontal: 35,
        shadowColor : '#171717' , 
        shadowOffset : {width: 6, height: 10}, 
        shadowOpacity : 0.2 , 
        shadowRadius : 3
    },
    image: {
        width: "100%",
        height: 400,
    },
    titleComic: {
        width: "80%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    }
})
