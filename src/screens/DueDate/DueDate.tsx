import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {IDueDateScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Button from '../../components/Button/Button';

const DueDate: IDueDateScreenProps = ({navigation, route}) => {
  const [loading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const username = route.params.name ? route.params.name : '';

  const handleContinue = useCallback(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('WorkoutPlan');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const _dueDate = useCallback(() => {
    if (!date) {
      return 'Select Due Date';
    }
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;
    return formattedDate;
  }, [date]);

  return (
    <Screen>
      <ScrollView>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/due-date.jpg')}
        />

        <Text style={styles.title}>{`When is your baby due, ${username}`}</Text>

        <View>
          <Pressable
            style={styles.dueDateContainer}
            onPress={() => setOpen(true)}>
            <Text style={{color: colors.paleTeal}}>{_dueDate()}</Text>
          </Pressable>
        </View>

        <DatePicker
          modal
          open={open}
          date={date ? date : new Date()}
          mode="date"
          androidVariant="nativeAndroid"
          title={'Select Due Date'}
          locale="de_DE"
          minimumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            //
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            onPress={handleContinue}
            loading={loading}
            disabled={!date}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default DueDate;

const styles = StyleSheet.create({
  firstImage: {
    height: 550,
    width: '100%',
  },
  title: {
    color: colors.greyishBrown,
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  termsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  terms: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginVertical: 40,
  },
  dueDateContainer: {
    alignSelf: 'center',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyishBrown,
    borderRadius: 7,
  },
});
