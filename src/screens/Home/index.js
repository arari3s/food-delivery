import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Categories from '../../components/categories';
import FeaturedRow from '../../components/featuredRow';
import SpacingContainer from '../../components/spacingContainer';
import { featured } from '../../constants';
import { themeColors } from '../../theme';
import * as Icon from 'react-native-feather';

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sectionContainer}>
                <View style={styles.searchContainer}>
                    <Icon.Search height="25" width="25" stroke="grey" />
                    <TextInput
                        placeholder="Restaurant"
                        style={styles.textInput}
                    />
                    <SpacingContainer
                        space={4}
                        styleCustom={styles.locationController}
                    >
                        <Icon.MapPin height="20" width="20" stroke="grey" />
                        <Text style={styles.textLocation}>Jakarta</Text>
                    </SpacingContainer>
                </View>
                <View style={styles.sliderContainer}>
                    <Icon.Sliders
                        height="20"
                        width="20"
                        stroke="white"
                        strokeWidth={2.5}
                    />
                </View>
            </View>

            {/*main*/}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <Categories />

                <View style={styles.featuredController}>
                    {[featured, featured, featured].map((item, index) => {
                        return (
                            <FeaturedRow
                                key={index}
                                title={item.title}
                                description={item.description}
                                restaurants={item.restaurants}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderRadius: 24,
        borderColor: '#d1d5db',
        marginRight: 8,
    },
    textInput: {
        marginLeft: 8,
        flex: 1,
    },
    locationController: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: '#d1d5db',
        paddingLeft: 8,
    },
    textLocation: {
        color: '#4b5563',
    },
    sliderContainer: {
        padding: 12,
        backgroundColor: themeColors.bgColor(1),
        borderRadius: 24,
    },
    featuredController: {
        marginTop: 20,
    },
});

export default Home;
