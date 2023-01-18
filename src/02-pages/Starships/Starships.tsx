// components
import Card from "@components/Card";
import Image from "@components/Image";
import ComposedTitle from "@components/ComposedTitle";
import LeftControls from "@components/LeftControls";
import Pagination from "@components/Pagination";
import SearchInput from "@components/SearchInput";
import SelectSortInput from "@components/SelectInput";
//hooks
import useFetch from "@hooks/use-fetcher";
import useSWR from "swr";
//utils
import { sortResults } from "@utils/sortResults";
import { formatImage } from "@utils/formatImage";
import { FC, useEffect, useReducer, useState } from "react";
//styles
import StyledStarships from "./Starships.styled";
//reducers
import { starshipStateReducer } from "@reducers/starshipsReducer";

const starshipsImgSRC = "src/06-assets/starships/";

const sortOptions = [
  { value: "crew", label: "Crew" },
  { value: "cargo", label: "Cargo" },
  { value: "", label: "" },
];

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

const Starships: FC = () => {
  const { fetcher } = useFetch();
  const [url, setUrl] = useState(`starships`);
  const { data } = useSWR(url, fetcher);
  const [state, dispatch] = useReducer(starshipStateReducer, []);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (data && data.results) {
      dispatch({
        type: "UPDATE_STARSHIP_LIST",
        payload: {
          starshipList: data.results,
        },
      });
    }
  }, [data]);
  console.log(state, "dame el estado de starship");
  const handlePrevPage = (prev: null | string) => {
    if (prev) {
      setPage(page - 1);
      setUrl(`starships?page=${page - 1}`);
    } else {
      setUrl(`starships`);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    setUrl(`starships?page=${page + 1}`);
  };

  const handleOnSort = (sortedValues: any[]) =>
    dispatch({
      type: "UPDATE_STARSHIP_LIST",
      payload: {
        starshipList: sortedValues,
      },
    });
  return (
    <StyledStarships>
      <ComposedTitle title="Starships" subtitle="Imperial Destroyers Center" />
      {state.starshipList?.map((starship: Starship) => (
        <Card>
          <Image
            width={300}
            height={140}
            alt={starship.name}
            onError={(e) => {
              e.currentTarget.src = `https://cutewallpaper.org/21/star-wars-spaceship-background/The-Star-Wars-Project-Page-3-Scifi-Meshescom.jpg`;
            }}
            pngSRC={`${starshipsImgSRC}${formatImage(starship.name)}.png`}
            jpgSRC={`${starshipsImgSRC}${formatImage(starship.name)}.jpg`}
            src={`${starshipsImgSRC}${formatImage(starship.name)}.jpg`}
          />
          <ul>
            <li>{starship.name}</li>
            <li>
              <p>{starship.model}</p>
            </li>
            <li>
              <p>{starship.manufacturer}</p>
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
              setUrl(`starships?search=${value}`);
            }
            if (!value) {
              setUrl(`starships`);
            }
          }}
        />
        <SelectSortInput
          onChange={({ sort, sortBy }) =>
            state.starshipList
              ? sortResults(state.starshipList, sortBy, sort, handleOnSort)
              : () => {}
          }
          options={sortOptions}
          width={120}
          height={30}
          label={"sort"}
        />
      </LeftControls>
    </StyledStarships>
  );
};

export default Starships;
