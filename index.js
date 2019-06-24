/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import initAppScreens from './src/navigation/navigation';

Navigation.events().registerAppLaunchedListener(() => initAppScreens());
