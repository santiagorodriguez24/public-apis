import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from 'App';
import Home from 'routes/home/Home';
import NotFound from 'routes/not-found/NotFound';
import { mockedStore, publicApis } from './mocked-data';
import PublicApisTable from 'components/PublicApisTable';

const mockStore = configureStore();

describe('<App/> initial State:', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  const store = mockStore(mockedStore);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    { attachTo: root },
  );

  test('Renders Home Page by default.', () => {
    expect(wrapper.containsMatchingElement(<Home />)).toBeTruthy();
    expect(wrapper.containsMatchingElement(<NotFound />)).toBeFalsy();
  });

  test('MainLayout Component is rendered.', () => {
    expect(wrapper.find('.main-layout')).toHaveLength(1);
  });

  test('AppLoader is rendered properly.', () => {
    expect(wrapper.find('.app-loader-container')).toHaveLength(1);
  });

  afterAll(() => {
    wrapper.unmount();
  });
});

describe('<PublicApisTable/>:', () => {
  const wrapper = mount(
    <MemoryRouter>
      <PublicApisTable publicApis={publicApis} />
    </MemoryRouter>,
  );

  test('Table rows are rendered.', () => {
    expect(wrapper.find('.link-button-cell')).toHaveLength(publicApis.length);
  });

  afterAll(() => {
    wrapper.unmount();
  });
});
