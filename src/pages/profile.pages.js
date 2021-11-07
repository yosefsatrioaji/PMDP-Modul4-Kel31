import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
const {ProfileStyle} = Style;
function ProfilePages() {
  const urlGithub = [
    'yosefsatrioaji',
    'NathanaelZorens',
    'Vanillatte68',
    'helmibagus',
  ];
  const [data, setData] = React.useState('');
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get('https://api.github.com/users/' + urlGithub[count])
        .then(res => setData(res.data))
        .catch(e => Alert.alert('Gagal!', e));
      return request;
    }
    fetchData();
  }, [count]);
  let nextCount = 0;
  const next = () => {
    // let nextCount = count + 1;
    if (count < urlGithub.length-1) {
        nextCount = count + 1;
    } else {
        nextCount = 0;
    }
    setCount(nextCount);
  };
  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url,
          }}
          style={ProfileStyle.headerImage}
        />
        <Text style={ProfileStyle.headerTXT}>{data.login}</Text>
        <Text style={ProfileStyle.headerTXTDesc}>
          {data.public_repos} Repository | {data.followers} Followers |{' '}
          {data.following} Following
        </Text>
      </View>
      <TouchableOpacity
        style={ProfileStyle.bodyTouchable}
        onPress={() => next()}>
        <Text style={ProfileStyle.bodyTXT}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ProfilePages;
