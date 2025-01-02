import React from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Interstellar = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Interstellar</Text>
          <Text style={styles.headerSubtitle}>Perjalanan Luar Angkasa</Text>
        </View>

        {/* Image */}
        <Image source={require('../assets/interstellar.jpeg')} style={styles.image} />

        {/* Content */}
        <View style={styles.contentContainer}>
          {/* Deskripsi */}
          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.description}>
            Kisah perjalanan manusia ke luar angkasa untuk menemukan planet yang layak huni demi kelangsungan hidup umat manusia. 
            Film ini mengeksplorasi hubungan antara sains, cinta, dan takdir, yang membawa harapan dalam menghadapi kehancuran planet Bumi.
          </Text>

          {/* Meta Information */}
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Icon name="clock-o" size={14} color="#FF6B6B" />
              <Text style={styles.metaText}>169 menit</Text>
            </View>
            <View style={styles.metaItem}>
              <Icon name="signal" size={14} color="#FF6B6B" />
              <Text style={styles.metaText}>Epik</Text>
            </View>
          </View>

          {/* Fakta Menarik */}
          <Text style={styles.sectionTitle}>Fakta Menarik</Text>
          <Text style={styles.description}>
            1. Film ini disutradarai oleh Christopher Nolan dan dirilis pada tahun 2014.{'\n'}
            2. Dibintangi oleh Matthew McConaughey, Anne Hathaway, dan Jessica Chastain.{'\n'}
            3. Menggunakan teori ilmiah yang dikembangkan bersama fisikawan Kip Thorne, yang juga memenangkan Hadiah Nobel.{'\n'}
            4. Interstellar adalah salah satu film dengan visual efek terbaik, memenangkan Academy Award.
          </Text>

          {/* Button */}
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Kembali ke Beranda
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 24,
  },
  scrollContainer: {
    padding: 16,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 24,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
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
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 16,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#212529',
  },
  description: {
    fontSize: 15,
    color: '#6C757D',
    lineHeight: 22,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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

export default Interstellar;
