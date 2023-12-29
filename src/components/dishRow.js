import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpacingContainer from './spacingContainer';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    selectCartItemsById,
} from '../slices/cartSlice';

function DishRow({ item }) {
    const dispatch = useDispatch();
    const totalItems = useSelector((state) =>
        selectCartItemsById(state, item.id),
    );
    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    };
    const handleDecrease = () => {
        dispatch(removeFromCart({ id: item.id }));
    };

    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.imageDish} />
            <SpacingContainer
                spacing={12}
                styleCustom={{ flex: 1 }}
                direction={'vertical'}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleDecrease}
                            disabled={!totalItems.length}
                        >
                            <Icon.Minus
                                strokeWidth={2}
                                height={20}
                                width={20}
                                stroke={'white'}
                            />
                        </TouchableOpacity>
                        <Text style={styles.order}>{totalItems.length}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleIncrease}
                        >
                            <Icon.Plus
                                strokeWidth={2}
                                height={20}
                                width={20}
                                stroke={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SpacingContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 24,
        marginHorizontal: 8,
        marginBottom: 12,
    },
    imageDish: {
        borderRadius: 24,
        height: 100,
        width: 100,
    },
    titleContainer: {
        paddingLeft: 12,
    },
    title: {
        fontSize: 20,
    },
    description: {
        color: '#374151',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        alignItems: 'center',
    },
    price: {
        color: '#374151',
        fontSize: 18,
        fontWeight: '800',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: 4,
        borderRadius: 24,
        backgroundColor: themeColors.bgColor(1),
    },
    order: {
        paddingHorizontal: 12,
    },
});
export default DishRow;
