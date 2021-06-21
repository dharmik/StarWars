import { Utils } from '../constants';

const getSpeciesStarship = (isSpecies, isStarship, species, starship, id) =>
  isSpecies
    ? species.getSpeciesDetail(id)
    : isStarship && starship.getStarshipDetail(id);

const getAllInfoApiCall = (
  arrPeoplesInfo,
  film,
  species,
  starship,
  isFilm,
  isSpecies,
  isStarship
) => {
  const arrAllInfo = [];
  arrPeoplesInfo.forEach((url) => arrAllInfo.push(Utils.getIdFromUrl(url)));
  const arrApiPromise = [];
  arrAllInfo.forEach((id) =>
    arrApiPromise.push(
      isFilm
        ? film.getFilmDetail(id)
        : getSpeciesStarship(isSpecies, isStarship, species, starship, id)
    )
  );
  return arrApiPromise;
};

const getAllInfoTitle = async (arrInfoPromise, isFilm) => {
  const arrTitle = [];
  try {
    const arrFilmsData = await Promise.all(arrInfoPromise);
    arrFilmsData.forEach((data) =>
      arrTitle.push(isFilm ? data.title : data.name)
    );
    return arrTitle;
  } catch (error) {
    console.info(error);
    return arrTitle;
  }
};

export { getAllInfoApiCall, getAllInfoTitle };
