/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigators/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "Albums"
            }
        }
    });
});
