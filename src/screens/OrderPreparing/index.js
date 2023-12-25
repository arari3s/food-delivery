import { Image, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

function OrderPreparing() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/delivery.gif')}
                style={styles.image}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 320,
        width: 320,
    },
});
export default OrderPreparing;
