import { createAlova } from 'alova';
import { xhrRequestAdapter } from '@alova/adapter-xhr';
import ReactHook from 'alova/react';
import { useRequest } from 'alova/client';

export const alova = createAlova({
  baseURL: 'https://api.github.com/repos/alovajs/alova/releases',
  statesHook: ReactHook,
  requestAdapter: xhrRequestAdapter()
});

// Gets the most current version name & number of Alova from GitHub releases
export const getGHversion = () =>
  alova.Get('latest', {
    transform(response) {
      return response.data.name.substring(1);
    },
  });

const App = () => {
  // simple, immediate=true request with no params
  const { data, loading } = useRequest(getGHversion);

  if (loading) {
    return (
      <div>still loading, not refreshing...</div>
  )}

  return (
    <div>We have data. Version name is {data}</div>
  );
};

export default App;
