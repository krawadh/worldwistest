import PropTypes from "prop-types";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

export default function CityList({ cities, isLoading }) {
  console.log("In citiList-----", cities, isLoading);
  if (isLoading) return <Spinner />;

  if (cities.length === 0) {
    return <p>No cities available to display.</p>;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

// Define prop types for CityList
CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cityName: PropTypes.string.isRequired,
      // Add other properties that the city object may have
    })
  ).isRequired, // cities is required and must be an array of objects
  isLoading: PropTypes.bool.isRequired, // isLoading is required and must be a boolean
};
