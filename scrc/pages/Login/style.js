import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    tittle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#f92e6a',
        marginBottom: 70,
    },
    input: {
        width: '90%',
        marginTop: 30,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f92e6a',
        fontSize: 17,
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warningAlert: {
        paddingLeft: 10,
        color: '#bdbdbd',
        fontSize: 15,
    },
    buttonLogin: {
        width: 200,
        height: 50,
        backgroundColor: '#f92e6a',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 50,
    },
    buttonLoginDisable: {
        backgroundColor: '#c0c0c0',
    },
    textButtonLogin: {
        color: '#fff',
        fontSize: 17,
    },
    registration: {
        marginTop: 20,
        color: '#4d5156',
    },
    linkSubscribe: {
        color: '#1877fd',
        fontSize: 16,
    },
})

export default styles
