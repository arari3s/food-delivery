import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Restaurant from '../screens/Restaurant';
import Cart from '../screens/Cart';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;
