import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../../theme';
import SpacingContainer from '../../components/spacingContainer';
import DishRow from '../../components/dishRow';
import CartIcon from '../../components/cartIcon';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../slices/restaurantSlice';

function Restaurant() {
    const navigation = useNavigation();
    const { params } = useRoute();
    const item = params;
    const dispatch = useDispatch();

    useEffect(() => {
        if (item && item.id) {
            dispatch(setRestaurant({ ...item }));
        }
    }, []);

    return (
        <View>
            <CartIcon />
            <StatusBar style={'light'} />
            <ScrollView>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.cover} />
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon.ArrowLeft
                            strokeWidth={3}
                            stroke={themeColors.bgColor(1)}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.detail}>
                        <Text style={styles.title}>{item.name}</Text>
                        <SpacingContainer
                            spacing={8}
                            styleCustom={styles.rating}
                        >
                            <SpacingContainer spacing={4}>
                                <Image
                                    source={require('../../assets/images/fullStar.png')}
                                    style={styles.ratingStart}
                                />
                                <Text style={styles.textStarsController}>
                                    <Text style={styles.textStars}>
                                        {item.stars}
                                    </Text>
                                    <Text style={styles.textReview}>
                                        ({item.reviews} review){' . '}
                                        <Text style={styles.textCategory}>
                                            {item.category}
                                        </Text>
                                    </Text>
                                </Text>
                            </SpacingContainer>
                            <SpacingContainer spacing={4}>
                                <Icon.MapPin
                                    color={'grey'}
                                    height={15}
                                    width={15}
                                />
                                <Text>Nearby. {item.address}</Text>
                            </SpacingContainer>
                        </SpacingContainer>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                    </View>
                </View>
                <View style={styles.restaurantController}>
                    <Text style={styles.menu}>Menu</Text>
                    {/*    dishes*/}
                    {item.dishes.map((dish, index) => (
                        <DishRow item={{ ...dish }} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    cover: {
        width: '100%',
        height: 288,
    },
    btnBack: {
        position: 'absolute',
        top: 56,
        left: 16,
        backgroundColor: '#f9fafb',
        padding: 8,
        borderRadius: 24,
    },
    detailContainer: {
        backgroundColor: '#fff',
        marginTop: -42,
        paddingTop: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    detail: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    ratingStart: {
        height: 16,
        width: 16,
    },
    textStarsController: {
        fontSize: 12,
    },
    textStars: {
        color: '#15803d',
    },
    textReview: {
        color: '#374151',
    },
    textCategory: {
        fontWeight: '700',
    },
    description: {
        color: '#6b7280',
        marginTop: 8,
    },
    restaurantController: {
        paddingBottom: 144,
        backgroundColor: '#fff',
    },
    menu: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 24,
        fontWeight: '800',
    },
});

export default Restaurant;
