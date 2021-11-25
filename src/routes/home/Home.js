import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_ERROR } from 'final-form';
import { Container } from 'reactstrap';

import { getPublicApis } from 'store/action-creators/PublicApisActions';

import AppLoader from 'components/AppLoader';
import MainLayout from 'components/MainLayout';
import Filters from 'components/Filters';
import PublicApisTable from 'components/PublicApisTable';

const locales = {
  getPublicApisErrorMessage:
    'There was an error in the search, please try again.',
};

function Home() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const publicApisStore = useSelector((store) => store.publicApis.publicApis);

  useEffect(() => {
    async function loadData() {
      await dispatch(getPublicApis({}));
      setIsLoading(false);
    }

    loadData();
  }, [dispatch]);

  const getFilteredPublicApis = useCallback(
    async (values) => {
      setIsLoading(true);

      const params = {};

      if (values.auth) {
        params.Auth = values.auth;
      }

      if (values.https) {
        params.HTTPS = values.https;
      }

      if (values.cors) {
        params.CORS = values.cors;
      }

      try {
        const getPublicApisResult = await dispatch(getPublicApis(params));
        setIsLoading(false);
        return undefined; // undefined is returned on success.
      } catch (error) {
        setIsLoading(false);
        // To set an error for the whole form return the following structure.
        return {
          [FORM_ERROR]: locales.getPublicApisErrorMessage,
        };
      }
    },
    [dispatch],
  );

  return (
    <MainLayout>
      <Container>
        <Filters handleSubmit={getFilteredPublicApis} isLoading={isLoading} />
        {isLoading ? (
          <AppLoader />
        ) : (
          <PublicApisTable publicApis={publicApisStore} />
        )}
      </Container>
    </MainLayout>
  );
}

export default Home;
