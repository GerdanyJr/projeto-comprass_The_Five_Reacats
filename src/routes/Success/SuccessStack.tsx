import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PixPaymentSuccessScreen from '../../screens/PixPaymentScreen';
import InvoicePaymentScreen from '../../screens/InvoicePaymentScreen';
import CardPaymentSuccessScreen from '../../screens/CardPaymentSuccessScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import SuccessScreen from '../../screens/SuccessScreen';

const Stack = createNativeStackNavigator();

export function SuccessStack() {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
            name= "SuccessScreen"
            component={SuccessScreen} />
            <Stack.Screen 
            name= "PixPaymentScreen" 
            component={PixPaymentSuccessScreen} />
            <Stack.Screen 
            name= "InvoicePaymentScreen" 
            component={InvoicePaymentScreen} />
            <Stack.Screen 
            name= "CardPaymentSuccessScreen" 
            component={CardPaymentSuccessScreen} />
            <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen} />
        </Stack.Navigator>
    )
}