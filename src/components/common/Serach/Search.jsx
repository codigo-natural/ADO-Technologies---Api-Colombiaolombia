import { useEffect, useState } from "react";
import styles from './Search.module.css'
import { Input } from "../Input/Input";

export const Search = ({ touristicAttractions }) => {
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   setFilteredAttractions(
  //     touristicAttractions((attraction) =>
  //       attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // }, [attractions, searchTerm]);

  return (
    <section className={styles.section}>
      <h2>Touristic Attractions</h2>
      <Input />
      <ul className="attractions-list">
        {/* {currentAttractions.map((attraction) => ( */}
        <ul className={styles.list}>
          {touristicAttractions.map((attraction) => (
            <li key={attraction.id}>{attraction.name}</li>
          ))}
        </ul>
        {/* ))} */}
      </ul>
      {/* <div className="pagination">
        {Array.from({ length: Math.ceil(filteredAttractions.length / attractionsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div> */}
    </section>
  )
}
