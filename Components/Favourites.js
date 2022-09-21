import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import CharacterCard from "./CharacterCard";
import * as SecureStore from "expo-secure-store";

export default function Favourites({ navigation }) {
  const [favourites, setFavourites] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const getFavourites = async () => {
      setLoading(true);
      let characters = await SecureStore.getItemAsync("favourites");
      setLoading(false);
      setFavourites(JSON.parse(characters));
    };
    getFavourites();
  }, []);

  return (
    <>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <>
          {favourites.length === 0 ? (
            <View style={{ flex: 1, alignItems: "center" , justifyContent: "center" , marginBottom: 60 }}>
              <Text style={{ fontSize: 16}}>You don't have any favorites added to your list</Text>
            </View>
          ) : (
            <FlatList
              data={favourites}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <>
                  <CharacterCard
                    favourites={true}
                    image={item.image}
                    name={item.name}
                    id={item.id}
                    navigation={navigation}
                  />
                </>
              )}
            />
          )}
        </>
      )}
    </>
  );
}
