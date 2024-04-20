import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTouristicAttractions } from '../../../store/actions/fetchResources';
import styles from './Atractions.module.css';

export const Atractions = () => {
  const dispatch = useDispatch();
  const { touristicAttractions, loading } = useSelector((state) => state.touristicAttractions);

  useEffect(() => {
    dispatch(fetchTouristicAttractions());
  }, [dispatch]);

  if (loading || !touristicAttractions) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={styles.section}>
      <h2>Touristic Attractions</h2>
      <div className={styles.attractionsContainer}>
        {touristicAttractions.map((attraction) => (
          <div className={styles.card} key={attraction.id}>
            <div className={styles.cardImage}>
              <img
                style={{width: '100%'}}
              src={attraction.images[0]}
              alt={attraction.name}
              />
            </div>
            <h3>{attraction.name}</h3>
            <p className={styles.category}>{attraction.city.name}</p>
            <p className={styles.heading}>{attraction.description}</p>
            {/* You can include more details about the attraction here */}
          </div>
        ))}
      </div>
    </section>
  );
};
