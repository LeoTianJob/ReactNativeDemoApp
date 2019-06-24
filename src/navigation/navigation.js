import { Navigation } from 'react-native-navigation';
import registerScreens, { POSTS_PAGE, FRIENDS_PAGE, ALBUMS_PAGE, TODOS_PAGE, PROFILE_PAGE } from './screens';
import Icon from 'react-native-vector-icons/FontAwesome';

import { defaultFont } from '../styles/fonts';
import { honoluluBlue, etonBlue, americanGreen, lightGrey } from '../styles/colors'

const ICON_SIZE = 25;
const BUTTON_TEXT_COLOR = etonBlue;
const BUTTON_TEXT_SELECTED_COLOR = americanGreen;
const BUTTON_FONT_SIZE = 10;
const TOPBAR_TEXT_COLOR = honoluluBlue;
const TOPBAR_FONT_SIZE = 20;
const BG_COLOR = lightGrey;

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
                    options: {
                        bottomTabs: {
                            backgroundColor: BG_COLOR
                        }
                    },
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
                                                    text: 'Latest Posts',
                                                    fontFamily: defaultFont,
                                                    fontSize: TOPBAR_FONT_SIZE,
                                                    color: TOPBAR_TEXT_COLOR
                                                },
                                                background: {
                                                    color: BG_COLOR
                                                }
                                            }
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        fontSize: BUTTON_FONT_SIZE,
                                        fontFamily: defaultFont,
                                        text: POSTS_PAGE,
                                        icon: postsIcon,
                                        textColor: BUTTON_TEXT_COLOR,
                                        iconColor: BUTTON_TEXT_COLOR,
                                        selectedTextColor: BUTTON_TEXT_SELECTED_COLOR,
                                        selectedIconColor: BUTTON_TEXT_SELECTED_COLOR,
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
                                                    text: 'Friends',
                                                    fontFamily: defaultFont,
                                                    fontSize: TOPBAR_FONT_SIZE,
                                                    color: TOPBAR_TEXT_COLOR
                                                },
                                                background: {
                                                    color: BG_COLOR
                                                }
                                            }
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        fontSize: BUTTON_FONT_SIZE,
                                        fontFamily: defaultFont,
                                        text: FRIENDS_PAGE,
                                        icon: friendsIcon,
                                        textColor: BUTTON_TEXT_COLOR,
                                        iconColor: BUTTON_TEXT_COLOR,
                                        selectedTextColor: BUTTON_TEXT_SELECTED_COLOR,
                                        selectedIconColor: BUTTON_TEXT_SELECTED_COLOR,
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
                                                    text: 'Albums',
                                                    fontFamily: defaultFont,
                                                    fontSize: TOPBAR_FONT_SIZE,
                                                    color: TOPBAR_TEXT_COLOR
                                                },
                                                background: {
                                                    color: BG_COLOR
                                                }
                                            }
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        fontSize: BUTTON_FONT_SIZE,
                                        fontFamily: defaultFont,
                                        text: ALBUMS_PAGE,
                                        icon: albumsIcon,
                                        textColor: BUTTON_TEXT_COLOR,
                                        iconColor: BUTTON_TEXT_COLOR,
                                        selectedTextColor: BUTTON_TEXT_SELECTED_COLOR,
                                        selectedIconColor: BUTTON_TEXT_SELECTED_COLOR,
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
                                                    text: 'Todo List',
                                                    fontFamily: defaultFont,
                                                    fontSize: TOPBAR_FONT_SIZE,
                                                    color: TOPBAR_TEXT_COLOR
                                                },
                                                background: {
                                                    color: BG_COLOR
                                                }
                                            }
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        fontSize: BUTTON_FONT_SIZE,
                                        fontFamily: defaultFont,
                                        text: TODOS_PAGE,
                                        icon: todosIcon,
                                        textColor: BUTTON_TEXT_COLOR,
                                        iconColor: BUTTON_TEXT_COLOR,
                                        selectedTextColor: BUTTON_TEXT_SELECTED_COLOR,
                                        selectedIconColor: BUTTON_TEXT_SELECTED_COLOR,
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
                                                    text: 'Profile',
                                                    fontFamily: defaultFont,
                                                    fontSize: TOPBAR_FONT_SIZE,
                                                    color: TOPBAR_TEXT_COLOR
                                                },
                                                background: {
                                                    color: BG_COLOR
                                                }
                                            }
                                        }
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        fontSize: BUTTON_FONT_SIZE,
                                        fontFamily: defaultFont,
                                        text: PROFILE_PAGE,
                                        icon: profileIcon,
                                        textColor: BUTTON_TEXT_COLOR,
                                        iconColor: BUTTON_TEXT_COLOR,
                                        selectedTextColor: BUTTON_TEXT_SELECTED_COLOR,
                                        selectedIconColor: BUTTON_TEXT_SELECTED_COLOR,
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

