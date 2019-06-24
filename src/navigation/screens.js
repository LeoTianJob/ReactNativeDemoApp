import { Navigation } from 'react-native-navigation';

import Posts from '../containers/Posts';
import Friends from '../containers/Friends';
import Albums from '../containers/Albums';
import Todos from '../containers/Todos';
import Profile from '../containers/Profile';


export const POSTS_PAGE = 'Posts';
export const FRIENDS_PAGE = 'Friends';
export const ALBUMS_PAGE = 'Albums';
export const TODOS_PAGE = 'Todos';
export const PROFILE_PAGE = 'Profile'

registerScreens = () => {
    Navigation.registerComponent(POSTS_PAGE, () => Posts);
    Navigation.registerComponent(FRIENDS_PAGE, () => Friends);
    Navigation.registerComponent(ALBUMS_PAGE, () => Albums);
    Navigation.registerComponent(TODOS_PAGE, () => Todos);
    Navigation.registerComponent(PROFILE_PAGE, () => Profile);
}

export default registerScreens;
