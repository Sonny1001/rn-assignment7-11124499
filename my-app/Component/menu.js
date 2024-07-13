import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigation = useNavigation();
  const menuItems = [
    { name: 'Home', screen: 'Products' },
    { name: 'Cart', screen: 'Cart' },
    { name: 'Store', screen: 'Store' },
    { name: 'Locations', screen: 'Locations' },
    { name: 'Blog', screen: 'Blog' },
    { name: 'Jewellery', screen: 'Jewellery' },
    { name: 'Main', screen: 'Main' },
    { name: 'Dress', screen: 'Dress' },
   
  ];

  return (
    <View style={[styles.menuContainer, isMenuOpen ? styles.menuOpen : styles.menuClosed]}>
	<TouchableOpacity onPress={() => setIsMenuOpen(false)} style={styles.closeButton}>     
	<EvilIcons name="close" size={30} color="black" style={styles.menuClose} />
	</TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>ERIC ATSU</Text>
        <View style={styles.line} />
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {
          setIsMenuOpen(false); 
          navigation.navigate(item.screen); 
        }}>
          <Text style={styles.menuItem}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '63.5%', 
    height: 1000,
    backgroundColor: 'white',
    zIndex: 10, 
  },
  menuClose: {
	paddingTop: 10,
  },
    menuOpen: {
    transform: [{ translateX: 0 }], 
  },
  menuClosed: {
    transform: [{ translateX: -300 }], 
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: '#dd8560',
	width: 80,
	marginLeft: 4,
  },
  menuItem: {
    padding: 15,
	fontSize: 20,
  },
});

export default Menu;