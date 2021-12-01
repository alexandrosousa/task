import React, { useState, useEffect } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Platform,
} from 'react-native'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './style'

export default function NewUser({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorRegister, setErrorRegister] = useState(false)

    // Função de registro:
    const registerFirebase = () => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user

                navigation.navigate('Task', { idUser: user.uid })
            })
            .catch((error) => {
                setErrorRegister('Não foi possível cadastrar este usuário')

                if (error.code === 'auth/email-already-in-use') {
                    setErrorRegister('Este usuário já existe')
                }
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
                    setErrorRegister(false)
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={(text) => {
                    setSenha(text)
                    setErrorRegister(false)
                }}
            />

            {errorRegister ? (
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>{errorRegister}</Text>
                </View>
            ) : (
                <View />
            )}

            {email === '' || senha === '' ? (
                <TouchableOpacity
                    style={[styles.buttonRegistro, styles.buttonRegistroDisable]}
                    disabled={true}
                >
                    <Text style={styles.textButtonRegistro}>Registrar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttonRegistro} onPress={registerFirebase}>
                    <Text style={styles.textButtonRegistro}>Registrar</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.registration}>
                Já é cadastrado?{' '}
                <Text
                    style={styles.linkSubscribe}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    Entre aqui
                </Text>
            </Text>

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
