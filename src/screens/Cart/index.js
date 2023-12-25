import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeColors } from '../../theme';
import * as Icon from 'react-native-feather';
import { featured } from '../../constants';
import { useNavigation } from '@react-navigation/native';

function Cart() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.buttonBackContainer}>
                <TouchableOpacity style={styles.buttonBack}>
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Your Cart</Text>
                    <Text style={styles.restaurant}>{restaurant.name}</Text>
                </View>
            </View>

            <View style={styles.deliveryContainer}>
                <Image
                    source={require('../../assets/images/bikeGuy.png')}
                    style={styles.imageDelivery}
                />
                <Text style={styles.textDelivery}>
                    Delivery in20-30 minutes
                </Text>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Change</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonBackContainer: {
        position: 'relative',
        paddingVertical: 16,
    },
    buttonBack: {
        backgroundColor: themeColors.bgColor(1),
        position: 'absolute',
        zIndex: 10,
        borderRadius: 50,
        padding: 4,
        top: 20,
        left: 8,
    },
    title: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 18,
    },
    restaurant: { textAlign: 'center', color: '#6b7280' },
    deliveryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: themeColors.bgColor(0.2),
    },
    imageDelivery: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    textDelivery: {
        flex: 1,
        paddingLeft: 16,
    },
    textButton: {
        fontWeight: '800',
        color: themeColors.text,
    },
});

export default Cart;
