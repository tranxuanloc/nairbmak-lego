import Home from 'views/pages/Home';
import KambriaComponents from 'views/pages/KambriaComponents';
import BootstrapComponents from 'views/pages/BootstrapComponents';
import Redux from 'views/pages/Redux';
import Loading from 'views/pages/Loading';

export default [
  { path: "/", component: Home, type: 'public' },
  { path: "/kambria-components", component: KambriaComponents, type: 'private' },
  { path: "/bootstrap-components", component: BootstrapComponents, type: 'private' },
  { path: "/redux", component: Redux, type: 'private' },
  { path: "/loading-center", component: LoadingCenter, type: 'public' },
  { path: "/loading-top", component: LoadingTop, type: 'public' }
];
