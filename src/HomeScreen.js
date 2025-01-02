import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    image: require('../assets/interstellar.jpeg'),
    description: 'Perjalanan melalui ruang dan waktu untuk menyelamatkan umat manusia.',
    duration: '169 menit',
    difficulty: 'Epik'
  },
  {
    id: 2,
    title: 'Oppenheimer',
    image: require('../assets/Oppenheimer.jpeg'),
    description: 'Kisah J. Robert Oppenheimer dan bom atom.',
    duration: '180 menit',
    difficulty: 'Sejarah'
  },
];

const HomeScreen = ({ navigation }) => {
  const MovieHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Film</Text>
      <Text style={styles.headerSubtitle}>Jelajahi Kisah Epik</Text>
    </View>
  );

  const MovieCard = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate(
        item.id === 1 ? 'Detail Interstellar' : 'Detail Oppenheimer'
      )}
      style={styles.cardWrapper}
    >
      <Card style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Icon name="clock-o" size={14} color="#FF6B6B" />
              <Text style={styles.metaText}>{item.duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <Icon name="signal" size={14} color="#FF6B6B" />
              <Text style={styles.metaText}>{item.difficulty}</Text>
            </View>
          </View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(
              item.id === 1 ? 'Detail Interstellar' : 'Detail Oppenheimer'
            )}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Lihat Detail
          </Button>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <MovieHeader />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 24,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FF6B6B',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#6C757D',
    fontWeight: '500',
  },
  listContainer: {
    padding: 16,
    paddingTop: 8,
  },
  cardWrapper: {
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#212529',
  },
  description: {
    fontSize: 15,
    color: '#6C757D',
    marginBottom: 12,
    lineHeight: 20,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  metaText: {
    marginLeft: 6,
    color: '#6C757D',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    elevation: 0,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;
