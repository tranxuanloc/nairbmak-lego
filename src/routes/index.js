import Home from 'views/pages/Home';
import Components from 'views/pages/Components';
import HowToUse from 'views/pages/HowToUse';

export default [
  { path: "/", component: Home, type: 'public' },
  { path: "/components", component: Components, type: 'private' },
  { path: "/howtouse", component: HowToUse, type: 'private' }
];
