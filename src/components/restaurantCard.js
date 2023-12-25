import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import SpacingContainer from './spacingContainer';
import { useNavigation } from '@react-navigation/native';

function RestaurantCard({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}
        >
            <View style={styles.cardContainer}>
                <Image source={item.image} style={styles.imageCard} />
                <View style={styles.titleController}>
                    <SpacingContainer spacing={4} direction={'vertical'}>
                        <Text style={styles.titleCard}>{item.name}</Text>
                        <SpacingContainer spacing={4}>
                            <Image
                                source={require('../assets/images/fullStar.png')}
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
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    cardContainer: {
        marginRight: 16,
        backgroundColor: '#fff',
        borderRadius: 24,
        shadowColor: '#9ca3af',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 13,
    },
    imageCard: {
        height: 144,
        width: 256,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
    },
    titleController: {
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    titleCard: {
        fontSize: 18,
        fontWeight: '800',
        paddingTop: 8,
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
});
export default RestaurantCard;
