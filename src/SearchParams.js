import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "lizard"];

const SearchParams = () => {
  // states hooks
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("cat");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  // Other hooks
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [breeds] = useBreedList(animal);
  // variables derived from states / affected by our states

  // functions needed by the component
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
            // onChange={updateLocation}
            value={location}
            placeholder="Location"
          />
        </label>
        <label>
          <select
            id="animal"
            value={animal}
            onBlur={(event) => setAnimal(event.target.value)}
            onChange={(event) => setAnimal(event.target.value)}
          >
            <option />
            {ANIMALS.map((value) => (
              <option key={value} value={value}>
                {value.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <label>
          <select
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
          >
            <option />
            {breeds.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
