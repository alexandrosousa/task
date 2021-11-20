import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { collection, addDoc } from 'firebase/firestore'

import database from '../../config/firebaseConfig'
import styles from './style'

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null)

    async function addTask() {
        const documento = await addDoc(collection(database, 'Tasks'), {
            description: description,
            status: true,
        })

        navigation.navigate('Task')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite uma tarefa aqui"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    addTask()
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
