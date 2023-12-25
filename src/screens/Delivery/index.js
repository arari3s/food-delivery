import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { featured } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../../theme';
import * as Icon from 'react-native-feather';
import SpacingContainer from '../../components/spacingContainer';

function Delivery() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={styles.mapViewContainer}
                mapType={'standard'}
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
            <View style={styles.descriptionContainer}>
                <View style={styles.estimatedContainer}>
                    <View>
                        <Text style={styles.titleEstimated}>
                            Estimated Arrival
                        </Text>
                        <Text style={styles.timeEstimated}>20-30 Minutes</Text>
                        <Text style={styles.orderEstimated}>
                            Your order is own its way!
                        </Text>
                    </View>
                    <Image
                        source={require('../../assets/images/bikeGuy2.gif')}
                        style={styles.imageBike}
                    />
                </View>
                <View style={styles.profileContainer}>
                    <View style={styles.imageProfileContainer}>
                        <Image
                            source={require('../../assets/images/deliveryGuy.png')}
                            style={styles.imageProfile}
                        />
                    </View>
                    <View style={styles.riderContainer}>
                        <Text style={styles.nameRider}>Syed Noman</Text>
                        <Text style={styles.infoRider}>Your Rider</Text>
                    </View>
                    <SpacingContainer
                        spacing={12}
                        styleCustom={styles.iconContainer}
                    >
                        <TouchableOpacity style={styles.btnIcon}>
                            <Icon.Phone
                                fill={themeColors.bgColor(1)}
                                stroke={themeColors.bgColor(1)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnIcon}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Icon.X strokeWidth={4} stroke={'red'} />
                        </TouchableOpacity>
                    </SpacingContainer>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapViewContainer: {
        flex: 1,
    },
    descriptionContainer: {
        borderRadius: 48,
        marginTop: -48,
        backgroundColor: '#fff',
        position: 'relative',
    },
    estimatedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    titleEstimated: {
        fontSize: 18,
        fontWeight: '700',
        color: '#374151',
    },
    timeEstimated: {
        fontSize: 30,
        fontWeight: '900',
        color: '#374151',
    },
    orderEstimated: {
        marginTop: 8,
        fontWeight: '700',
        color: '#374151',
    },
    imageBike: {
        width: 96,
        height: 96,
    },
    profileContainer: {
        backgroundColor: themeColors.bgColor(0.8),
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 48,
        marginVertical: 20,
        marginHorizontal: 8,
    },
    imageProfileContainer: {
        padding: 4,
        borderRadius: 24,
    },
    imageProfile: {
        height: 64,
        width: 64,
        borderRadius: 48,
    },
    riderContainer: {
        flex: 1,
        marginLeft: 12,
    },
    nameRider: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
    },
    infoRider: {
        fontWeight: '700',
        color: '#fff',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },
    btnIcon: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 24,
    },
});
export default Delivery;
