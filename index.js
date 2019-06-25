/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import initAppScreens from './src/navigation/navigation';

import { Provider, createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

Navigation.events().registerAppLaunchedListener(() => initAppScreens());
