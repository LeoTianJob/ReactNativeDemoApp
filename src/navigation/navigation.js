// import React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens, { POSTS_PAGE, FRIENDS_PAGE, ALBUMS_PAGE, TODOS_PAGE, PROFILE_PAGE} from './screens';
import Icon from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 25;
const BUTTON_TEXT_COLOR = 'black';
const BUTTON_FONT_SIZE = 10;

registerScreens();

export default initAppScreens = () => {
    Promise.all([
        Icon.getImageSource('newspaper-o', ICON_SIZE, BUTTON_TEXT_COLOR),
        Icon.getImageSource('chevron-left', ICON_SIZE, BUTTON_TEXT_COLOR),
        Icon.getImageSource('users', ICON_SIZE, BUTTON_TEXT_COLOR),
        Icon.getImageSource('image', ICON_SIZE, BUTTON_TEXT_COLOR),
        Icon.getImageSource('list', ICON_SIZE, BUTTON_TEXT_COLOR),
        Icon.getImageSource('user', ICON_SIZE, BUTTON_TEXT_COLOR)
    ]).then((icons) => {
        [
            postsIcon,
            goBackIcon,
            friendsIcon,
            albumsIcon,
            todosIcon,
            profileIcon
        ] = icons;

        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: POSTS_PAGE,
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Latest Posts'
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab:{
                                    fontSize: BUTTON_FONT_SIZE,
                                    text: POSTS_PAGE,
                                    icon: postsIcon
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: FRIENDS_PAGE,
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Friends'
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab:{
                                    fontSize: BUTTON_FONT_SIZE,
                                    text: FRIENDS_PAGE,
                                    icon: friendsIcon
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: ALBUMS_PAGE,
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Albums'
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab:{
                                    fontSize: BUTTON_FONT_SIZE,
                                    text: ALBUMS_PAGE,
                                    icon: albumsIcon
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: TODOS_PAGE,
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Todo List'
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab:{
                                    fontSize: BUTTON_FONT_SIZE,
                                    text: TODOS_PAGE,
                                    icon: todosIcon
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: PROFILE_PAGE,
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Profile'
                                            }
                                        }
                                    }
                                }
                            }],
                            options: {
                                bottomTab:{
                                    fontSize: BUTTON_FONT_SIZE,
                                    text: PROFILE_PAGE,
                                    icon: profileIcon
                                }
                            }
                        }
                    }
                    ]
                }
            }
        });
    });
}

