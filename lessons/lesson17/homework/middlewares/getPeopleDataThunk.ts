import { Dispatch } from "redux";
import {
  loadingCreator,
  successCreator,
  errorCreator,
} from "../actions/actions";

export const getPeopleDataThunk = async (
  request: Function,
  dispatch: Dispatch
) => {
  dispatch(loadingCreator(true));

  await request(`https://swapi.dev/api/people/`)
    .then(async (data: Response) => {
      if (data.ok) {
        const json: JSON = await data.json();
        return dispatch(successCreator(json));
      } else {
        return dispatch(errorCreator(`Response status: ${data.status}`));
      }
    })
    .catch((error: Error) => dispatch(errorCreator(error)));
};
