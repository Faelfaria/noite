import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../src/theme/theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Icon.Search height={25} width={25} stroke="gray" />
                    <TextInput placeholder="Restaurants" style={styles.textInput} />
                    <View style={styles.locationContainer}>
                        <Icon.MapPin height={20} width={20} stroke="gray" />
                        <Text style={styles.locationText}>Taubaté, SP</Text>
                    </View>
                </View>
                <View style={[styles.filterButton, { backgroundColor: themeColors.bgColor(1) }]}>
                    <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                <Categories />
                <View style={styles.featuredContainer}>
                    {[...Array(3)].map((_, index) => (
                        <FeaturedRow
                            key={index}
                            title={featured.title}
                            description={featured.description}
                            restaurants={featured.restaurants}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
        flex: 1,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 8,
        borderRadius: 9999,
        borderColor: 'gray',
        borderWidth: 1,
    },
    textInput: {
        marginLeft: 8,
        flex: 1,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 2,
        borderColor: '#ccc',
        paddingLeft: 8,
    },
    locationText: {
        color: 'gray',
        marginLeft: 4,
    },
    filterButton: {
        padding: 8,
        borderRadius: 9999,
        marginLeft: 8,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    featuredContainer: {
        marginTop: 20,
    },
});



