import PropTypes from "prop-types";
import styles from "./CityItem.module.css"; // Ensure the correct relative path is used

export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  // Optionally format the date (assuming date is a string)
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <li className={styles.cityItem}>
      {" "}
      {/* Use the correct CSS class name */}
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formattedDate}</time>{" "}
      {/* Format date for better readability */}
    </li>
  );
}

// Define prop types for CityItem
CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired, // Ensure that the date is a string, adjust if it's another type
  }).isRequired,
};
