import React, { useState, useEffect } from 'react'

import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'

import { getFirestore, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'

import styles from './style'

// Este route é para poder receber os params que veio do login, no caso o id do usuário:
export default function Task({ navigation, route }) {
    const database = getFirestore(firebaseApp)

    // Sempre que a tela for carregada executa isso:
    const [task, setTask] = useState([])
    // const [refresh, setRefresh] = useState(false)

    function logOut() {
        const auth = getAuth()

        signOut(auth)
            .then(() => {
                navigation.navigate('Login')
            })
            .catch((error) => {
                ToastAndroid.show('Não foi possível desconectar o usuário')
            })
    }

    async function deleteTask(id) {
        await deleteDoc(doc(database, 'Tasks', id))

        ToastAndroid.show('Tarefa excluída', ToastAndroid.SHORT)

        // setRefresh(!refresh)
    }

    useEffect(() => {
        async function carregarDados() {
            setTask([])

            const taskCollection = await query(collection(database, 'Tasks'))

            onSnapshot(taskCollection, (doc) => {
                const list = []

                doc.forEach((document) => {
                    let task = {
                        id: document.id,
                        description: document.data().description,
                    }

                    list.push(task)
                })

                setTask(list)
            })
        }

        carregarDados()
    }, [])

    // Sempre que os componentes forem montados executa isso:
    // useEffect(() => {
    //     async function carregarDados() {
    //         const list = []

    //         const taskCollection = await getDocs(collection(database, 'Tasks'))

    //         taskCollection.forEach((document) => {
    //             list.push({ ...document.data(), id: document.id })
    //         })

    //         setTask(list)
    //     }

    //     carregarDados()
    // }, [refresh])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                keyExtractor={(item) => item.id}
                // extraData={refresh}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="trash-o"
                                    size={27}
                                    color={'#f92e6a'}
                                ></FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description,
                                    })
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    navigation.navigate('NewTask', { idUser: route.params.idUser })
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNewLogout} onPress={logOut}>
                <Text>
                    <MaterialCommunityIcons name={'location-exit'} size={50} color="#f92e6a" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}
