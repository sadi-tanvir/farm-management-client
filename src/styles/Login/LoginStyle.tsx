import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 100,
    },
    logo: {
        width: 200,
        height: 50
    },
    formsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 15
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 10
    },
    inputFields: {
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderWidth: 1,
        color: '#485460',
        borderRadius: 7,
        width: '80%',
    }
});

export default styles