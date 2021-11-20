import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    label: {
        width: '90%',
        marginTop: 20,
        marginLeft: 20,
        // marginRight: 'auto',
        fontSize: 16,
        color: '#f92e6a',
    },
    input: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f92e6a',
        fontSize: 17,
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: '#f92e6a',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 20,
    },
    descriptionTask: {
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#dcdcdc',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: '#282b2db5',
    },
})

export default styles
