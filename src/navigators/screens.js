import { Navigation } from 'react-native-navigation';

import Posts from '../containers/Posts';
import Friends from '../containers/Friends';
import Albums from '../containers/Albums';
import Todos from '../containers/Todos';
import Profile from '../containers/Profile';


registerScreens = () => {
    Navigation.registerComponent('Posts', () => Posts);
    Navigation.registerComponent('Friends', () => Friends);
    Navigation.registerComponent('Albums', () => Albums);
    Navigation.registerComponent('Todos', () => Todos);
    Navigation.registerComponent('Profile', () => Profile);
}

export default registerScreens;
