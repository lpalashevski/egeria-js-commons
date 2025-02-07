import { API_ASSETS_SEARCH_PATH } from '../../routes';
import { QUERY_MIN_LENGTH, TYPES_MIN_SELECTED, API_URL } from '../../../commons/constants';
import { formData } from '../../../types/formData';
import { fetchData } from '../../egeria-fetch';
import { getQueryParamsPath } from '../../../forms/index';

/**
 *
 * @param formData should contain all the query params from the URL
 * @param apiUrl is an optional parameter but it is used if API is deployed
 *        in a different location
 * @returns empty array if conditions aren't met otherwise it will fetch data
 *          from the API
 *
 * This function is used to fetch data for Asset Catalog.
 *
 */
// TODO: remove apiUrl as an optional
const fetchRawData = async (formData: formData) => {
  const {q, types} = formData;

  if(q.value.length >= QUERY_MIN_LENGTH && types.value.length >= TYPES_MIN_SELECTED) {
    const _queryParamsPath = getQueryParamsPath(formData);

    const path = `${API_ASSETS_SEARCH_PATH}${_queryParamsPath.length ? `?${_queryParamsPath}` : ``}`;

    const rawData = await fetchData(path, 'GET');

    return rawData;
  } else {
    console.error('Err: API conditions were not met.');

    return [];
  }
};

export {
  fetchRawData
}
