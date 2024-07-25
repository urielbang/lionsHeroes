import React from 'react';
import { useNavigation } from 'app/hooks/useNavigation';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from 'app/context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomText from './CustomText';

export const Header = ({
  text,
  goBackCallback,
  shouldShowBackButton = true,
}: {
  text: string;
  goBackCallback?: () => void;
  shouldShowBackButton?: boolean;
}) => {
  const { colors } = useAppContext();
  const { navigation } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingTop: 36,
      paddingBottom: 10,
      paddingHorizontal: 20,
    },
    headline: {
      color: colors.text,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    arrow: {},
  });

  return (
    <View style={styles.container}>
      {shouldShowBackButton && (
        <TouchableOpacity onPress={goBackCallback ?? navigation.goBack} style={styles.arrow}>
          <Icon name="angle-left" size={30} color={colors.text} />
        </TouchableOpacity>
      )}
      <CustomText allowFontScaling={false} style={styles.headline}>
        {text}
      </CustomText>
    </View>
  );
};
