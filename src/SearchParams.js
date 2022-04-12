import { useState } from 'react';

const SearchParams = (props) => {
  const [location, setLocation] = useState("Seattle, WA");

  for (let i = 0; i < props.length; i++) {
    const [animal, setAnimal] = useState("");
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;