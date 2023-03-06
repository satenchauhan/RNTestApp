import React from 'react';
import {AppIcon} from '../../components';
let id = 0;
export const homeItems = [
  {
    id: 1,
    icon: (
      <AppIcon type="material" name="request-page" color="#E06666" size={40} />
    ),
    name: 'Request',
    onPress: () => {
      console.log('Products');
    },
  },
  {
    id: 2,
    icon: (
      <AppIcon type="material" name="favorite-outline" color="red" size={40} />
    ),
    name: 'Favorite',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 3,
    icon: <AppIcon type="material" name="work" size={40} color="#6FA8DC" />,
    name: 'Jobs',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 4,
    icon: (
      <AppIcon type="material" name="file-copy" size={37} color="#686de0" />
    ),
    name: 'Invoices',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 5,
    icon: <AppIcon type="material" name="apps" color="#FFD966" size={37} />,
    name: 'Workbook',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 6,
    icon: <AppIcon type="material" name="money" size={42} color="#37B8B4" />,
    name: 'Expenses',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 7,
    icon: <AppIcon type="material" name="list" size={40} color="#DB74DB" />,
    name: 'Task',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 8,
    icon: <AppIcon type="material" name="note-add" size={40} color="#FF9D47" />,
    name: 'Notes',
    onPress: () => {
      console.log('Documents');
    },
  },
  {
    id: 9,
    icon: <AppIcon type="material" name="settings" size={40} color="gray" />,
    name: 'Settings',
    onPress: () => {
      console.log('Documents');
    },
  },
];
