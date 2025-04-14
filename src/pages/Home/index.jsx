import React, { Suspense } from 'react';
import { Loading } from '../../components';

const Home = React.lazy(() => import('./Home'));

const LoadableHome = (props) => (
  <Suspense fallback={<Loading />}>
    <Home {...props}/>
  </Suspense>
);

export default LoadableHome;
