import Home from 'views/pages/Home';
import Components from 'views/pages/Components';
import Redux from 'views/pages/Redux';

export default [
  { path: "/", component: Home, type: 'public' },
  { path: "/components", component: Components, type: 'private' },
  { path: "/redux", component: Redux, type: 'private' }
];
