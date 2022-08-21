import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Colors from '../constants/color';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/success.png')}
                    />
                </View>
                <Text style={styles.textContainer}>הטלפון שאל
                    <Text style={styles.text}> {roundsNumber} </Text>
                    שאלות
                    לנחש את המספר
                    <Text style={styles.text}> {userNumber} </Text>
                </Text>
                <PrimaryButton onPress={onStartNewGame}>משחק חדש</PrimaryButton>
            </View >
        </ScrollView>
    )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        marginTop: 48,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 36
    },
    text: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
});