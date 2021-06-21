import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomHeader, Loader, ReachabilityView } from '../components';
import { Strings, Utils } from '../constants';
import {
  getAllInfoApiCall,
  getAllInfoTitle
} from '../services/PeopleDetailsService';
import styles from './styles/PeopleDetailsStyles';

// Render Info View
const RenderPeopleInfo = ({ title, arrInfo }) => (
  <View style={styles.detailContainer}>
    <Text style={styles.detailText}>{title}</Text>
    {arrInfo &&
      arrInfo.map((info) => (
        <View key={info} style={styles.subContainer}>
          <View style={styles.bullet} />
          <Text style={styles.infoTitle}>{info}</Text>
        </View>
      ))}
  </View>
);

const FilmsSpeciesStarship = ({ arrFilms, arrSpecies, arrStarship }) => (
  <>
    {arrFilms.length > 0 && (
      <RenderPeopleInfo title={Strings.movies} arrInfo={arrFilms} />
    )}
    {arrSpecies.length > 0 && (
      <RenderPeopleInfo title={Strings.species} arrInfo={arrSpecies} />
    )}
    {arrStarship.length > 0 && (
      <RenderPeopleInfo title={Strings.starship} arrInfo={arrStarship} />
    )}
  </>
);

const PeopleDetailsScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(false);
  const [detailTitle, setTitle] = useState(Strings.peopleDetail);
  const [arrFilms, setFilms] = useState([]);
  const [arrSpecies, setSpecies] = useState([]);
  const [arrStarship, setStarship] = useState([]);
  const { people, film, species, starship } = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      try {
        setTitle(route.params.name);
        const peopleId = Utils.getIdFromUrl(route.params.url);
        setLoading(true);
        const peopleDetail = await people.getPeopleDetail(peopleId);
        const arrFilmPromise = getAllInfoApiCall(
          peopleDetail.films,
          film,
          species,
          starship,
          true,
          false,
          false
        );
        const filmsData = await getAllInfoTitle(arrFilmPromise, true);
        setFilms(filmsData);
        const arrSpeciesPromise = getAllInfoApiCall(
          peopleDetail.species,
          film,
          species,
          starship,
          false,
          true,
          false
        );
        const speciesData = await getAllInfoTitle(arrSpeciesPromise, false);
        setSpecies(speciesData);
        const arrStarshipPromise = getAllInfoApiCall(
          peopleDetail.starships,
          film,
          species,
          starship,
          false,
          false,
          true
        );
        const starshipData = await getAllInfoTitle(arrStarshipPromise, false);
        setStarship(starshipData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.info(error);
      }
    });
    return unsubscribe;
  }, [film, navigation, people, route.params, species, starship]);

  return (
    <Container style={styles.mainContainer}>
      <CustomHeader right left title={detailTitle} />
      <ReachabilityView />
      <Content padder style={styles.content}>
        {detailTitle !== Strings.peopleDetail && (
          <RenderPeopleInfo title={`${Strings.starName} :  ${detailTitle}`} />
        )}
        <FilmsSpeciesStarship {...{ arrFilms, arrSpecies, arrStarship }} />
      </Content>
      {isLoading && <Loader />}
    </Container>
  );
};
FilmsSpeciesStarship.propTypes = {
  arrFilms: PropTypes.array,
  arrSpecies: PropTypes.array,
  arrStarship: PropTypes.array
};
RenderPeopleInfo.propTypes = {
  title: PropTypes.string,
  arrInfo: PropTypes.array
};
PeopleDetailsScreen.propTypes = {
  route: PropTypes.object
};
export default PeopleDetailsScreen;
