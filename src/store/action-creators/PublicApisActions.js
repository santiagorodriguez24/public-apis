import { createAction } from 'redux-actions';

import { CHANGE_PUBLIC_APIS_PROPS, GET_PUBLIC_APIS } from 'store/action-types';
import { apiGetCustomParams } from 'api-interface/Api';
import { url_public_apis } from 'api-interface/urls';

export const changePublicApisProps = createAction(
  CHANGE_PUBLIC_APIS_PROPS,
  (props) => props,
);

export const getPublicApis = createAction(GET_PUBLIC_APIS, (params) =>
  apiGetCustomParams(url_public_apis, params),
);
