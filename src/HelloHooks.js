// import React, { Suspense } from 'react';
// import {graphql} from 'react-relay';

// import environment from './environment';

// import {
//   RelayEnvironmentProvider,
//   preloadQuery,
//   usePreloadedQuery,
// } from 'react-relay/hooks';


// // Define a query
// const CurrentUserQuery = graphql`
//   query {
//     current {
//       id
//       name
//     }
//   }
// `;

// // Immediately load the query as our app starts. For a real app, we'd move this
// // into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = preloadQuery(environment, CurrentUserQuery, {
//   /* query variables */
// });

// const Hello = (props) => {
//   const data = usePreloadedQuery(CurrentUserQuery, props.preloadedQuery);
//   return (
//     <div>
//       <p>{data.name}</p>
//     </div>
//   );
// };

// const HelloRoot = (props) => {
//   return (
//     <RelayEnvironmentProvider environment={environment}>
//         <Suspense fallback={'Loading...'}>
//           <Hello preloadedQuery={preloadedQuery} />
//         </Suspense>
//       </RelayEnvironmentProvider>
//   )
// }

// export default HelloRoot;