import { Container, Content, Text } from 'native-base';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import {
  AppBackground,
  CustomButton,
  CustomHeader,
  CustomSlider
} from '../../components';
import { AppConstants, Strings } from '../../constants';
import { Colors, Icons } from '../../theme';
import styles from './styles/DetailScreenStyles';

const DetailScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.welcome);
  const [slider, setSlider] = useState(0);
  const onVariationPress = (type) => {
    Alert.alert(`You pressed variation ${type}`);
  };
  const renderButtons = () => {
    return (
      <>
        <Text style={styles.btnContainerTitle}>{Strings.variationTitle}</Text>
        <CustomButton
          title={Strings.btnV1}
          style={[styles.btnVariation, { backgroundColor: Colors.transparent }]}
          onPress={() => onVariationPress(1)}
        />
        <CustomButton
          title={Strings.btnV2}
          style={[
            styles.btnVariation,
            { backgroundColor: Colors.btnOrangeNeutral }
          ]}
          onPress={() => onVariationPress(2)}
        />
        <CustomButton
          title={Strings.btnV3}
          style={[styles.btnVariation, { backgroundColor: Colors.btnOrange }]}
          onPress={() => onVariationPress(3)}
        />
      </>
    );
  };

  return (
    <Container>
      <AppBackground>
        <CustomHeader
          right
          left
          title={user}
          leftIcon={Icons.back}
          leftOnPress={() => navigation.goBack()}
        />
        <Content contentContainerStyle={styles.container}>
          {renderButtons()}
          <CustomSlider
            thumbIcon={Icons.diamond}
            title={Strings.txtSlider}
            sliderValue={slider}
            onSliderValueChange={(value) => {
              setSlider(value);
              if (value === 1) {
                Alert.alert(
                  AppConstants.applicationName,
                  Strings.sliderCongratulations
                );
              }
            }}
          />
        </Content>
      </AppBackground>
    </Container>
  );
};

DetailScreen.propTypes = {
  navigation: PropTypes.object
};
export default DetailScreen;
