import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';
const {HomeStyle} = Style;
function HomePages() {
  const data = [
    {
      id: 1,
      nama: 'Yosef Satrio Aji',
      nim: '21120119130097',
      kelompok: '31',
    },
    {
      id: 2,
      nama: 'Helmi Bagus W.',
      nim: '21120119120009',
      kelompok: '31',
    },
    {
      id: 3,
      nama: 'Roselin Yosefa',
      nim: '21120119140142',
      kelompok: '31',
    },
    {
      id: 4,
      nama: 'Nathanael Zorens Y. I.',
      nim: '21120119120021',
      kelompok: '31',
    },
  ];
  const ListItemNama = dataPassing => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }>
        <View>
          <View style={
          dataPassing.dataNama.id % 2 === 1
            ? HomeStyle.itemListGarisGanjil
            : HomeStyle.itemListGarisGenap
        } />
        </View>
        <View style={HomeStyle.itemListContent}>
          <Text style={HomeStyle.itemListTXT}>
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text style={HomeStyle.itemListTXT}>
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          PRAKTIKUM MDP MODUL 4 KELOMPOK 31
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
      />
    </View>
  );
}
export default HomePages;
