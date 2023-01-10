import { API_URL } from '../../commons/constants';

import {
  authHeader,
  handleResponse
} from '../../auth';

export const glossaries = {
  getAll,
  getGlossaryCategories,
  getGlossaryTerms
};

/**
 *
 * HTTP API request for retrieving all the asset types.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
function getAll() {
    const requestOptions: any = { method: 'GET', headers: authHeader() };

    return fetch(`${API_URL}/api/glossaries`, requestOptions).then(handleResponse);
}

/**
 *
 * HTTP API request for retrieving all the glossary categories.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
function getGlossaryCategories(glossaryGUID) {
  const requestOptions: any = { method: 'GET', headers: authHeader() };

  return fetch(`${API_URL}/api/glossaries/${glossaryGUID}/categories`, requestOptions).then(handleResponse);
}

/**
 *
 * HTTP API request for retrieving all the glossary terms.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
 function getGlossaryTerms(categoryGUID) {
  const requestOptions: any = { method: 'GET', headers: authHeader() };

  return fetch(`${API_URL}/api/glossaries/categories/${categoryGUID}/terms`, requestOptions).then(handleResponse);
}
