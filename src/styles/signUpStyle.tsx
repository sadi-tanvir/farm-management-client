import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 80,
    },
    logo: {
        width: 150,
        height: 50
    },
    formsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 20
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