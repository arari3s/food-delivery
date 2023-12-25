import React from 'react';
import { StyleSheet, View } from 'react-native';

function SpacingContainer({ children, spacing, direction, styleCustom }) {
    const containerStyle = {
        flexDirection: direction === 'vertical' ? 'column' : 'row',
    };

    const spacingStyle = (index) => {
        if (index > 0) {
            return direction === 'vertical'
                ? { marginTop: spacing || 4 }
                : { marginLeft: spacing || 4 };
        }
        return null;
    };

    return (
        <View style={[styles.container, containerStyle, styleCustom]}>
            {React.Children.map(children, (child, index) => (
                <View style={spacingStyle(index)}>{child}</View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
});

export default SpacingContainer;
