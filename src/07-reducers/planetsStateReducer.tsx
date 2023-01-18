import reducerFunction from "@utils/reducerFunction";

export function toastInit() {
  return {
    planetList: [],
  };
}

export type PlanetListActions = "UPDATE_PLANET_LIST" | "FILTER_PLANET_LIST";

export interface ActionInterface<Planet> {
  type: PlanetListActions;
  payload?: PayloadInterface<Planet>;
}

interface PayloadInterface<Planet> {
  planetList: Planet[];
  filterBy?: string;
  filter?: string;
}

const cases = {
  UPDATE_PLANET_LIST: <Planet,>(
    state: Planet[],
    action: ActionInterface<Planet>
  ) => {
    return action.payload;
  },
  FILTER_PLANET_LIST: <Planet,>(
    state: Planet[],
    action: ActionInterface<Planet>
  ) => {
    action.payload?.planetList.filter((planet: Planet) => {
      const { payload } = action;
      if (!payload?.filterBy || !payload?.filter) return planet;
      if (payload && payload.filterBy && payload.filter) {
        return planet[payload.filterBy] === payload.filter;
      }
    });
  },
};

export const planetStateReducer = <Planet,>(
  state: Planet[],
  action: ActionInterface<Planet>
): Planet[] => {
  return reducerFunction(state, action, cases);
};
