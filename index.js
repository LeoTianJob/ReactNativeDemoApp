/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './src/containers/Posts';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});
