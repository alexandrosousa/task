import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { getFirestore, updateDoc, doc } from 'firebase/firestore'

import styles from './style'
import firebaseApp from '../../config/firebaseConfig'

export default function Details({ navigation, route }) {
    const database = getFirestore(firebaseApp)

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)

    const idTask = route.params.id

    async function editTask(id) {
        await updateDoc(doc(database, 'Tasks', id), {
            description: descriptionEdit,
        })

        navigation.navigate('Task')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite uma tarefa aqui"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    editTask(idTask)
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
