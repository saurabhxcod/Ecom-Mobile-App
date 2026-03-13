import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TEXT } from '../utils/constants';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const menuItems = [
    { title: 'My Orders', icon: 'cube-outline', screen: 'Orders' },
    { title: 'My Wishlist', icon: 'heart-outline', screen: 'Wishlist' },
    { title: 'Addresses', icon: 'location-outline', screen: '' },
    { title: 'Payment Methods', icon: 'card-outline', screen: '' },
    { title: 'Settings', icon: 'settings-outline', screen: '', disabled: true },
    { title: 'Logout', icon: 'log-out-outline', screen: '', isLast: true, disabled: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.email}>alex.rivera@example.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[styles.menuItem, item.isLast && styles.lastItem]}
              onPress={() => item.screen && !item.disabled && navigation.navigate(item.screen as any)}
              disabled={item.disabled}
              activeOpacity={item.disabled ? 1 : 0.7}
            >
              <View style={styles.menuLeft}>
                <Ionicons 
                  name={item.icon as any} 
                  size={24} 
                  color={item.isLast ? COLORS.error : COLORS.text} 
                />
                <Text style={[styles.menuTitle, item.isLast && { color: COLORS.error }]}>
                  {item.title}
                </Text>
              </View>
              {!item.isLast && (
                <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.lg,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    marginLeft: SPACING.md,
  },
  name: {
    fontSize: TEXT.h2,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  email: {
    fontSize: TEXT.caption,
    color: COLORS.textSecondary,
  },
  editButton: {
    backgroundColor: '#EEF2FF',
    padding: 10,
    borderRadius: 12,
  },
  menuContainer: {
    marginTop: SPACING.lg,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: TEXT.body,
    fontWeight: '500',
    color: COLORS.text,
    marginLeft: SPACING.md,
  },
  lastItem: {
    borderBottomWidth: 0,
    marginTop: SPACING.lg,
  },
});

export default ProfileScreen;
