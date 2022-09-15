import React from "react";
import { Text, View , ActivityIndicator, FlatList } from 'react-native'
import Comic from "./Comic";

export default function Comics({ comics , loading }) {
  return (
    <View>
      {loading
        ? <ActivityIndicator size="large" color="#EC1D24" />
        : (
          <FlatList
            style={{ marginTop: 20 }}
            data={comics}
            horizontal
            renderItem={({ item }) => 
            <Comic 
              key={item.id}
              name={item.title} 
              image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`} 
            />
            }
          >
          </FlatList>
        )}
    </View>
  );
}
