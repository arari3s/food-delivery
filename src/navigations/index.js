import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Restaurant from '../screens/Restaurant';
import Cart from '../screens/Cart';
import OrderPreparing from '../screens/OrderPreparing';
import Delivery from '../screens/Delivery';

function Navigations() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen
                    name="Cart"
                    options={{ presentation: 'modal' }}
                    component={Cart}
                />
                <Stack.Screen
                    name="OrderPreparing"
                    options={{ presentation: 'fullScreenModal' }}
                    component={OrderPreparing}
                />
                <Stack.Screen
                    name="Delivery"
                    options={{ presentation: 'fullScreenModal' }}
                    component={Delivery}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;
