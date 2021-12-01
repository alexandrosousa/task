import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Platform,
} from 'react-native'

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './style'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)

    useEffect(() => {
        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('Task', { idUser: user.uid })
            }
        })
    }, [])

    // Função de login:
    const loginFirebase = () => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user

                navigation.navigate('Task', { idUser: user.uid })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message

                setErrorLogin(true)
            })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            <Text style={styles.tittle}>Task</Text>
            <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={(text) => {
                    setEmail(text)
                    setErrorLogin(false)
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={(text) => {
                    setSenha(text)
                    setErrorLogin(false)
                }}
            />
            {errorLogin ? (
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>E-mail ou senha inválido</Text>
                </View>
            ) : (
                <View />
            )}

            {email === '' || senha === '' ? (
                <TouchableOpacity
                    style={[styles.buttonLogin, styles.buttonLoginDisable]}
                    disabled={true}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.registration}>
                Não é cadastrado?{' '}
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => {
                        navigation.navigate('NewUser')
                    }}
                >
                    Clique aqui
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
