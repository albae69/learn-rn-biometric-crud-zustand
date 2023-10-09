import React, {useState} from 'react';
import {View, Text, FlatList, Modal, ScrollView, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Local files
import {RootStackParamList} from '../navigation/types';
import {Button, Card, ListItem} from '@components';
import {theme} from '@utils';
import {Note} from '@models/Note';
import useBoundStore from '@store';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  // States
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Note | null>(null);
  const {notes, remove, add, edit} = useBoundStore(state => state);
  console.log('notes', notes);

  const onDelete = () => {
    Alert.alert(
      'Message',
      'Are you sure want to delete this note?',
      [
        {
          text: 'Cancel',
        },
        {
          onPress: () => {
            remove(selectedItem?.id!);
            setVisible(false);
          },
        },
      ],
      {cancelable: true},
    );
  };

  const onAddNewNote = () => {
    navigation.navigate('AddNewNote');
    // let newNote: Note = {
    //   id: notes.length + 1,
    //   title: 'title',
    //   description: 'description',
    // };
    // add(newNote);
  };

  const onEdit = () => {
    edit(selectedItem?.id!, {
      id: selectedItem?.id!,
      title: 'title 2',
      description: 'description 2',
    });
  };

  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl text-black font-semibold mb-4">Notes</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            {...item}
            onPress={() => {
              setSelectedItem(item);
              setVisible(true);
            }}
          />
        )}
        ListEmptyComponent={
          <View className="flex flex-1 items-center justify-center">
            <Text className="text-black font-light">No Notes.</Text>
          </View>
        }
      />
      <Button title="Add New Note" onPress={onAddNewNote} />

      {/* Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <View className="flex-1 bg-backdrop items-center justify-center p-4">
          <Card
            title={selectedItem?.title!}
            description={selectedItem?.description!}
            onClose={() => setVisible(prev => !prev)}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </View>
      </Modal>
      {/* Modal */}
    </View>
  );
};

export default Home;
