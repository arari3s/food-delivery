import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { themeColors } from '../theme';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

function CartIcon() {
    const navigation = useNavigation();
    const cartItem = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    if (!cartItem.length) return;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => navigation.navigate('Cart')}
            >
                <View style={styles.button}>
                    <Text style={styles.textCart}>{cartItem.length}</Text>
                </View>
                <Text style={styles.textCart}>View Cart</Text>
                <Text style={styles.textCart}>${cartTotal}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        zIndex: 50,
    },
    cartButton: {
        backgroundColor: themeColors.bgColor(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 50,
        padding: 16,
        paddingVertical: 12,
    },
    button: {
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    textCart: {
        fontWeight: '900',
        color: '#fff',
        fontSize: 18,
    },
});
export default CartIcon;
