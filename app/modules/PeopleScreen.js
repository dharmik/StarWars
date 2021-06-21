import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomHeader, Loader, ReachabilityView } from '../components';
import { Strings } from '../constants';
import { Colors, Icons } from '../theme';
import NavigationService from '../navigation/NavigationService';
import styles from './styles/PeopleStyles';

const PeopleItem = ({ item }) => {
  const peopleContainer = StyleSheet.compose(
    styles.peopleContainer,
    styles.shadow
  );
  const onPeoplePress = () =>
    NavigationService.navigate(
      { name: Strings.root, screen: Strings.peopleDetail },
      item
    );

  return (
    <Pressable style={peopleContainer} onPress={onPeoplePress}>
      <View style={styles.subContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text
          style={styles.nameText}
        >{`${Strings.birthYear}: ${item.birth_year}`}</Text>
      </View>
      <Image style={styles.arrowNext} source={Icons.next} />
    </Pressable>
  );
};

const SearchInput = () => {
  const searchContainer = StyleSheet.compose(
    styles.searchContainer,
    styles.shadow
  );
  const { people } = useDispatch();
  const onChangeTextCall = useCallback(
    async (text) => {
      try {
        text === '' && (await people.getPeoples());
        text.length > 1 &&
          (await people.searchPeoples(text.replace(' ', '%20')));
      } catch (error) {
        console.info(error);
      }
    },
    [people]
  );

  return (
    <View style={searchContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={Strings.searchPeople}
        placeholderTextColor={Colors.lightGray}
        returnKeyType={'done'}
        onChangeText={onChangeTextCall}
        onSubmitEditing={(e) => Keyboard.dismiss()}
      />
    </View>
  );
};

const NoDataAvailable = () => (
  <View style={styles.noDataContainer}>
    <Text style={styles.noDataText}>{Strings.npPeopleAvailable}</Text>
  </View>
);

const PeopleScreen = ({ navigation }) => {
  const [isSearch, setSearch] = useState(false);
  const { loading, people } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        setSearch(false);
        await dispatch.people.getPeoples();
      } catch (error) {
        console.info(error);
      }
    });
    return unsubscribe;
  }, [dispatch.people, navigation]);

  const searchPress = useCallback(async () => {
    setSearch(!isSearch);
    isSearch && (await dispatch.people.getPeoples());
  }, [dispatch.people, isSearch]);

  return (
    <Container style={styles.mainContainer}>
      <CustomHeader
        right
        left
        leftIcon={null}
        leftOnPress={null}
        rightIcon={
          <Image
            style={styles.searchIcon}
            source={isSearch ? Icons.cancel : Icons.search}
          />
        }
        rightOnPress={searchPress}
        extraContent={isSearch ? <SearchInput /> : null}
        title={Strings.peopleTitle}
      />
      <ReachabilityView />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentList}
        data={people.peoples}
        renderItem={PeopleItem}
        keyExtractor={(item) => item.url}
        ListEmptyComponent={NoDataAvailable}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {loading.global && <Loader />}
    </Container>
  );
};
PeopleItem.propTypes = {
  item: PropTypes.object
};
export default PeopleScreen;
