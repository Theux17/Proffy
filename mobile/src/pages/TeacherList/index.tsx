import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


import PageHeader from '../../components/PageHeader'

import styles from './styles'
import TeacherItem from '../../components/TeacherItem'

function TeacherList() {
    const [ isFilterVisible, setIsFiltersVisible ] = useState(false) 

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFilterVisible)
    }
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight= {(
                    <BorderlessButton onPress={ handleToggleFiltersVisible }>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matérias</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria ?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>                          
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia ?"
                                    placeholderTextColor="#c1bccc"/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>                          
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o Horário ?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={ styles.submitButton }>
                            <Text style={ styles.submitButtonText }>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList