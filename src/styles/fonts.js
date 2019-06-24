
import { Platform } from 'react-native';

export const defaultFont = Platform.select({
    ios: 'Helvetica',
    android: 'Roboto'
});

export const defaultFontBold = Platform.select({
    ios: 'Helvetica-Bold',
    android: 'Roboto'
});
