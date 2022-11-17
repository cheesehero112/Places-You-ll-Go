

const GeoLocationForm = () => {
    const [geoLong, setGeoLong] = useState(0);
  const [geoLat, setGeoLat] = useState(0);

    const handleSubmit = async (e) => {
e.preventDefault();
    const geoData = {long, lat} 
    try {
      const response = await fetch('api/places', {
        method: 'GET',
        body: JSON.stringify(geoData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
       
        console.log('new place added!', json);
      }
    } catch (error) {}
  };
}
    return (
      <form>
        <label>Optional: Geo Location</label>
        <input
          type='number'
          placeholder='longitude in number'
          onChange={(e) => setGeoLong(e.target.value)}
          value={geoLong}
        />
        <input
          type='number'
          placeholder='lattitude in number'
          onChange={(e) => setGeoLat(e.target.value)}
          value={geoLat}
        />
      </form>
    );
}