/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigators/screens';
import Icon from 'react-native-vector-icons/FontAwesome';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Promise.all([
        Icon.getImageSource('newspaper-o', 30, 'black'),
        Icon.getImageSource('users', 30, 'black'),
        Icon.getImageSource('image', 30, 'black'),
        Icon.getImageSource('list', 30, 'black'),
        Icon.getImageSource('user', 30, 'black')
    ]).then((icons) => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [{
                        component: {
                            name: 'Posts',
                            options: {
                                bottomTab:{
                                    fontSize: 12,
                                    text: 'Posts',
                                    icon: icons[0]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Friends',
                            options: {
                                bottomTab:{
                                    fontSize: 12,
                                    text: 'Friends',
                                    icon: icons[1]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Albums',
                            options: {
                                bottomTab:{
                                    fontSize: 12,
                                    text: 'Albums',
                                    icon: icons[2]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Todos',
                            options: {
                                bottomTab:{
                                    fontSize: 12,
                                    text: 'Todos',
                                    icon: icons[3]
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Profile',
                            options: {
                                bottomTab:{
                                    fontSize: 12,
                                    text: 'Profile',
                                    icon: icons[4]
                                }
                            }
                        }
                    }
                    ]
                }
            }
        });
    })
});
