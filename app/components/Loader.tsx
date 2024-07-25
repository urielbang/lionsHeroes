import { useAppContext } from 'app/context/AppContext';
import { View, Image } from 'react-native';

export const Loader = () => {
  const { colors } = useAppContext();

  return (
    <View style={{ backgroundColor: colors.background, height: '100%' }}>
      <View style={{ marginTop: 250 }}>
        <Image
          source={require('assets/images/LETSTOPLoader.gif')}
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </View>
  );
};
