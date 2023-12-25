import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './restaurantCard';

function FeaturedRow({ title, description, restaurants }) {
    return (
        <View>
            <View style={styles.featuredRowController}>
                <View>
                    <Text style={styles.titleFeatured}>{title}</Text>
                    <Text style={styles.descriptionFeatured}>
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.seeAllButton}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={styles.sectionFeatured}
            >
                {restaurants.map((restaurant, index) => {
                    return <RestaurantCard item={restaurant} key={index} />;
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    featuredRowController: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    sectionFeatured: {
        overflow: 'visible',
        paddingVertical: 20,
    },
    titleFeatured: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionFeatured: {
        color: '#6b7280',
        fontSize: 12,
    },
    seeAllButton: {
        fontWeight: 600,
        color: themeColors.text,
    },
});
export default FeaturedRow;
