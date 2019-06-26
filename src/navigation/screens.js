import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import withSafeArea from '../hoc/withSafeArea';

import Posts from '../containers/Posts';
import PostDetails from '../containers/PostDetails';
import Friends from '../containers/Friends';
import Albums from '../containers/Albums';
import AlbumDetails from '../containers/AlbumDetails';
import PhotoDetails from '../containers/PhotoDetails';
import Todos from '../containers/Todos';
import Profile from '../containers/Profile';

export const POSTS_PAGE = 'Posts';
export const POST_DETAILS_PAGE = 'PostDetails';
export const FRIENDS_PAGE = 'Friends';
export const ALBUMS_PAGE = 'Albums';
export const ALBUM_DETAILS_PAGE = 'AlbumDetails';
export const PHOTO_DETAILS = 'PHOTO_DETAILS';
export const TODOS_PAGE = 'Todos';
export const PROFILE_PAGE = 'Profile';

const store = configureStore();

// Only TODOS and PROFILE support redux, I made this on purpose, for other pages, I will use local state
registerScreens = () => {
    Navigation.registerComponent(POSTS_PAGE, () => Posts);
    Navigation.registerComponent(POST_DETAILS_PAGE, () => PostDetails);
    Navigation.registerComponent(FRIENDS_PAGE, () => withSafeArea(Friends));
    Navigation.registerComponentWithRedux(ALBUMS_PAGE, () => withSafeArea(Albums), Provider, store);
    Navigation.registerComponent(ALBUM_DETAILS_PAGE, () => withSafeArea(AlbumDetails));
    Navigation.registerComponent(PHOTO_DETAILS, () => withSafeArea(PhotoDetails, false));
    Navigation.registerComponentWithRedux(TODOS_PAGE, () => withSafeArea(Todos), Provider, store);
    Navigation.registerComponentWithRedux(PROFILE_PAGE, () => withSafeArea(Profile), Provider, store);
}

export default registerScreens;
