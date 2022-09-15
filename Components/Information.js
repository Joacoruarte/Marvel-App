import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Information({ data, loading }) {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#EC1D24"
        />
      ) : (
        <>
          <Image
            style={styles.image}
            source={{ uri: `${data.thumbnail?.path}.${data.thumbnail?.extension}`}}
          />
          <Text style={styles.titleCharacter}>{data.name}</Text>
          <Text style={data.description?.length ? styles.description : styles.notDescription}>{data.description?.length ? data.description : "This Character Dont't Have Description"}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "80%",
    height: 400,
    marginTop: 30,
  },
  titleCharacter: {
    width: "80%",
    textAlign: "center",
    marginTop: 20,
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    color: "#FDFDFD",
    width: "80%",
    textAlign: "justify",
    marginTop: 20,
  },
  notDescription: {
    color: "#FDFDFD",
    width: "80%",
    textAlign: "center",
    marginTop: 20,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
