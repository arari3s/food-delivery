import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SpacingContainer from '../../components/spacingContainer';
import { selectRestaurant } from '../../slices/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';
import { themeColors } from '../../theme';
import * as Icon from 'react-native-feather';
import {
    removeFromCart,
    selectCartItems,
    selectCartTotal,
} from '../../slices/cartSlice';
import { useEffect, useState } from 'react';

function Cart() {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const deliveryFee = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {});
        setGroupedItems(items);
    }, [cartItems]);

    return (
        <View style={styles.container}>
            <View style={styles.buttonBackContainer}>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={() => navigation.goBack()}
                >
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
                    Delivery in 20-30 minutes
                </Text>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={styles.dishesContainer}
            >
                {Object.entries(groupedItems).map(([key, items]) => {
                    const dish = items[0];
                    return (
                        <View key={key} style={styles.itemContainer}>
                            <SpacingContainer
                                spacing={12}
                                styleCustom={styles.sectionItem}
                            >
                                <Text style={styles.countItem}>
                                    {items.length}x
                                </Text>
                                <Image
                                    source={dish.image}
                                    style={styles.imageItem}
                                />
                                <Text style={styles.nameItem}>{dish.name}</Text>
                            </SpacingContainer>
                            <SpacingContainer
                                spacing={12}
                                styleCustom={styles.sectionItem}
                            >
                                <Text style={styles.priceItem}>
                                    ${dish.price}
                                </Text>
                                <TouchableOpacity
                                    style={styles.btnMinus}
                                    onPress={() =>
                                        dispatch(
                                            removeFromCart({ id: dish.id }),
                                        )
                                    }
                                >
                                    <Icon.Minus
                                        strokeWidth={2}
                                        height={20}
                                        width={20}
                                        stroke={'white'}
                                    />
                                </TouchableOpacity>
                            </SpacingContainer>
                        </View>
                    );
                })}
            </ScrollView>

            <SpacingContainer
                spacing={12}
                styleCustom={styles.totalContainer}
                direction={'vertical'}
            >
                <View style={styles.subTotal}>
                    <Text style={styles.itemSubtotal}>Subtotal</Text>
                    <Text style={styles.itemSubtotal}>${cartTotal}</Text>
                </View>
                <View style={styles.subTotal}>
                    <Text style={styles.itemSubtotal}>Delivery Fee</Text>
                    <Text style={styles.itemSubtotal}>${deliveryFee}</Text>
                </View>
                <View style={styles.subTotal}>
                    <Text style={styles.orderTotal}>Order Total</Text>
                    <Text style={styles.orderTotal}>
                        ${deliveryFee + cartTotal}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.btnOrder}
                        onPress={() => navigation.navigate('OrderPreparing')}
                    >
                        <Text style={styles.textOrder}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </SpacingContainer>
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
    dishesContainer: {
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 24,
        marginHorizontal: 8,
        marginBottom: 12,
        shadowColor: '#9ca3af',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 13,
    },
    countItem: {
        fontWeight: '800',
        color: themeColors.text,
    },
    imageItem: {
        height: 56,
        width: 56,
        borderRadius: 24,
    },
    nameItem: {
        fontWeight: '800',
        color: '#374151',
    },
    priceItem: {
        fontWeight: '700',
        fontSize: 16,
    },
    btnMinus: {
        padding: 4,
        borderRadius: 24,
        backgroundColor: themeColors.bgColor(1),
    },
    sectionItem: {
        alignItems: 'center',
    },
    totalContainer: {
        padding: 24,
        paddingHorizontal: 32,
        borderRadius: 24,
        backgroundColor: themeColors.bgColor(0.2),
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemSubtotal: {
        color: '#374151',
    },
    orderTotal: {
        color: '#374151',
        fontWeight: '900',
    },
    btnOrder: {
        backgroundColor: themeColors.bgColor(1),
        padding: 12,
        borderRadius: 24,
    },
    textOrder: {
        fontWeight: '800',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default Cart;
