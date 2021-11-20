import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
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
        fontSize: 27,
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
