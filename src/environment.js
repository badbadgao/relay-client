import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import fetchGraphQL from './fetchGraphQL';

const fetchQuery = (operation,variables) => {
  return fetchGraphQL(operation.text,variables);
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;