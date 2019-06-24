/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigators/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
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
                                text: 'Posts'
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
                                text: 'Friends'
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
                                text: 'Albums'
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
                                text: 'Todos'
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
                                // icon: <PostsIcon width={32} height={32} />
                            }
                        }
                    }
                }
                ]
            }
        }
    });
});
