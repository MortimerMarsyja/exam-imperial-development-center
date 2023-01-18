// hooks
import useFetch from "04-hooks/use-fetcher";
import { useThemeContext } from "@contexts/themeContext";
import { useEffect, useReducer, useState } from "react";
import useSWR from "swr";
// styles
import StyledPlanets from "./Planets.styled";
// components
import Card from "@components/Card";
import ComposedTitle from "@components/ComposedTitle";
import Image from "@components/Image";
import Pagination from "@components/Pagination";
import SearchInput from "@components/SearchInput";
// utils
import { formatPopulation } from "@utils/numberFormat";
import { planetStateReducer } from "@reducers/planetsStateReducer";
import { formatImage } from "@utils/formatImage";
import { sortResults } from "@utils/sortResults";
import SelectSortInput from "@components/SelectInput";
import LeftControls from "@components/LeftControls";

const planetsUrl = "src/06-assets/planets/";

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "population", label: "Population" },
  { value: "terrain", label: "Terrain" },
];

const Planets = () => {
  const { fetcher } = useFetch();
  const { theme } = useThemeContext();
  const [url, setUrl] = useState(`planets`);
  const { data } = useSWR(url, fetcher);
  const [state, dispatch] = useReducer(planetStateReducer, []);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (data && data.results) {
      dispatch({
        type: "UPDATE_PLANET_LIST",
        payload: {
          planetList: data.results,
        },
      });
    }
  }, [data]);

  const handlePrevPage = (prev: null | string) => {
    if (prev) {
      setPage(page - 1);
      setUrl(`planets?page=${page - 1}`);
    } else {
      setUrl(`planets`);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    setUrl(`planets?page=${page + 1}`);
  };

  const handleOnSort = (sortedValues: any[]) =>
    dispatch({
      type: "UPDATE_PLANET_LIST",
      payload: {
        planetList: sortedValues,
      },
    });

  return (
    <StyledPlanets>
      <ComposedTitle
        title="Planets"
        subtitle="Imperial Destroyers Center"
        theme={theme}
      />
      {state.planetList?.map((planet: any) => (
        <Card theme={theme}>
          <Image
            width={300}
            height={140}
            alt={planet.name}
            onError={(e) => {
              e.currentTarget.src = `https://images.hdqwalls.com/download/joyful-planet-4k-ly-2560x1700.jpg`;
            }}
            pngSRC={`${planetsUrl}${formatImage(planet.name)}.png`}
            jpgSRC={`${planetsUrl}${formatImage(planet.name)}.jpg`}
            src={`${planetsUrl}${formatImage(planet.name)}.jpg`}
          />
          <ul>
            <li>{planet.name}</li>
            <li>
              <p>{planet.terrain}</p>
            </li>
            <li>
              <p>{formatPopulation(planet.population)}</p>
            </li>
          </ul>
        </Card>
      ))}
      <Pagination
        current={page}
        total={data?.count}
        previous={data?.previous}
        next={data?.next}
        loading={data === undefined}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        elementsPerPage={10}
      />
      <LeftControls width={400} height={50}>
        <SearchInput
          width={120}
          height={30}
          onInput={(value: string) => {
            if (value) {
              setUrl(`planets?search=${value}`);
            }
            if (!value) {
              setUrl(`planets`);
            }
          }}
        />
        <SelectSortInput
          onChange={({ sort, sortBy }) =>
            state.planetList
              ? sortResults(state.planetList, sortBy, sort, handleOnSort)
              : () => {}
          }
          options={sortOptions}
          width={120}
          height={30}
          label={"sort"}
        />
      </LeftControls>
    </StyledPlanets>
  );
};

export default Planets;
