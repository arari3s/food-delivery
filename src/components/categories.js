import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { categories } from '../constants';
import { useState } from 'react';

function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.sectionContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
            >
                {categories.map((category, index) => {
                    const isActive = category.id === activeCategory;
                    const btnClass = isActive
                        ? { backgroundColor: '#4b5563' }
                        : { backgroundColor: '#e5e7eb' };
                    const textClass = isActive
                        ? { fontWeight: '600', color: '#1f2937' }
                        : { color: '#6b7280' };
                    return (
                        <View key={index} style={styles.categoryContainer}>
                            <TouchableOpacity
                                style={[styles.buttonCategory, btnClass]}
                                onPress={() => setActiveCategory(category.id)}
                            >
                                <Image
                                    source={category.image}
                                    style={styles.imageCategory}
                                />
                            </TouchableOpacity>
                            <Text style={[styles.textCategory, textClass]}>
                                {category.name}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    sectionContainer: {
        overflow: 'visible',
    },
    categoryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
    },
    buttonCategory: {
        padding: 4,
        borderRadius: 24,
        backgroundColor: '#e4e4e7',
    },
    imageCategory: {
        width: 45,
        height: 45,
    },
    textCategory: {
        fontSize: 14,
    },
});
export default Categories;
