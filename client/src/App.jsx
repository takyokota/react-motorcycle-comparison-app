import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Table from "./components/Table";
import { bikeYears, bikeMakes, bikeModels } from "./utils/bikeOptions";

const App = () => {
  const [bikeOneState, setBikeOneState] = useState({
    year: '',
    make: '',
    model: ''
  });
  const [bikeTwoState, setBikeTwoState] = useState({
    year: '',
    make: '',
    model: ''
  });
  const [bikeInfoOne, setBikeInfoOne] = useState({});
  const [bikeInfoTwo, setBikeInfoTwo] = useState({});

  // adding the selected info to the current state for bike one
  const handleChangeOne = (e) => {
    const { name, value } = e.target;
    setBikeOneState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // adding the selected info to the current state for bike two
  const handleChangeTwo = (e) => {
    const { name, value } = e.target;
    setBikeTwoState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // to make all dropdowns empty
  const resetDropdown = () => {
    setBikeOneState({
      year: '',
      make: '',
      model: ''
    });

    setBikeTwoState({
      year: '',
      make: '',
      model: ''
    });
  };

  // to save the states of bike info
  const handleSubmit = (e) => {
    e.preventDefault();

    setBikeInfoOne(bikeOneState);
    setBikeInfoTwo(bikeTwoState);

    resetDropdown();
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-center my-5 md:text-3xl text-xl font-extrabold">Japanese Superbikes Comparison</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center md:flex-row flex-col">
            <div className="md:w-1/12 space-x-20 md:space-x-0">
              <h2 className="text-center font-bold">Bike 1</h2>
              <div className="flex flex-col mt-3">
                <label htmlFor="year">Year</label>
                <select
                  name="year"
                  id="year"
                  value={bikeOneState.year}
                  onChange={handleChangeOne}
                >
                  <option disabled hidden value=''>year</option>
                  {bikeYears.map((year) => (
                    <option value={year} key={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="make">Make</label>
                <select
                  name="make"
                  id="make"
                  value={bikeOneState.make}
                  onChange={handleChangeOne}
                  disabled={bikeOneState.year === '' ? true : false}
                >
                  <option disabled hidden value=''>make</option>
                  {bikeMakes.map((make) => (
                    <option value={make} key={make}>{make}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="model">Model</label>
                <select
                  name="model"
                  id="model"
                  value={bikeOneState.model}
                  onChange={handleChangeOne}
                  disabled={bikeOneState.make === '' ? true : false}
                >
                  <option disabled hidden value=''>model</option>
                  {bikeModels.filter((item) => item.make === bikeOneState.make)
                    .map((item) => item.models
                      .map((model) => (
                        <option value={model} key={uuidv4()}>{model}</option>
                      )))}
                </select>
              </div>
            </div>

            <div className="md:w-1/12"></div>

            <div className="mt-7 md:mt-0 md:w-1/12 space-x-20 md:space-x-0">
              <h2 className="text-center font-bold">Bike 2</h2>
              <div className="flex flex-col mt-3">
                <label htmlFor="year">Year</label>
                <select
                  name="year"
                  id="year"
                  value={bikeTwoState.year}
                  onChange={handleChangeTwo}
                >
                  <option disabled hidden value=''>year</option>
                  {bikeYears.map((year) => (
                    <option value={year} key={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="make">Make</label>
                <select
                  name="make"
                  id="make"
                  value={bikeTwoState.make}
                  onChange={handleChangeTwo}
                  disabled={bikeTwoState.year === '' ? true : false}
                >
                  <option disabled hidden value=''>make</option>
                  {bikeMakes.map((make) => (
                    <option value={make} key={make}>{make}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="model">Model</label>
                <select
                  name="model"
                  id="model"
                  value={bikeTwoState.model}
                  onChange={handleChangeTwo}
                  disabled={bikeTwoState.make === '' ? true : false}
                >
                  <option disabled hidden value=''>model</option>
                  {bikeModels.filter((item) => item.make === bikeTwoState.make)
                    .map((item) => item.models
                      .map((model) => (
                        <option value={model} key={uuidv4()}>{model}</option>
                      )))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-7">
            <button className="w-1/4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md border-2 border-indigo-500" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div>
        <h1 className="text-center mt-10 mb-2 md:text-2xl text-lg font-bold">Comparison Table</h1>
        <div className="flex justify-center items-center md:w-2/3 xl:w-1/2 mx-5 md:mx-auto">
          <Table bikeInfoOne={bikeInfoOne} bikeInfoTwo={bikeInfoTwo} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
