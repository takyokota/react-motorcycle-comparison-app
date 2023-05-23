import { useEffect, useState } from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const BikeData = ({ bikeInfo }) => {
  const [bike, setBike] = useState({});
  // console.log(bikeInfo);

  // to get bike info from API
  useEffect(() => {
    try {
      fetchFromAPI(bikeInfo.make, bikeInfo.model, bikeInfo.year)
        .then((data) => setBike(data))
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  }, [bikeInfo, setBike]);

  return bike;

  // return (
  //   <Fragment>
  //     {bike.make ? (<td>{bike.make}</td>) : (<td>N/A</td>)}
  //     {bike.year ? (<td>{bike.year}</td>) : (<td>N/A</td>)}
  //     {bike.model ? (<td>{bike.model}</td>) : (<td>N/A</td>)}
  //     {bike.power ? (<td>{bike.power}</td>) : (<td>N/A</td>)}
  //     {bike.torque ? (<td>{bike.torque}</td>) : (<td>N/A</td>)}
  //     {bike.fuel_consumption ? (<td>{bike.fuel_consumption}</td>) : (<td>N/A</td>)}
  //     {bike.total_weight ? (<td>{bike.total_weight}</td>) : (<td>N/A</td>)}
  //     {bike.fuel_capacity ? (<td>{bike.fuel_capacity}</td>) : (<td>N/A</td>)}
  //   </Fragment>
  // );
};

export default BikeData;