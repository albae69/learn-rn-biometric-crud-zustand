import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

// Local files
import {RootStackParamList} from '@navigation/types';
import {Button, Input} from '@components';
import {Note, NoteSchema} from '@models/Note';
import useBoundStore from '@store';

type Props = NativeStackScreenProps<RootStackParamList, 'EditNote'>;

const EditNote = ({navigation, route}: Props) => {
  const {id, title, description} = route.params;
  const {edit} = useBoundStore(state => state);

  // Forms
  const {
    control,
    handleSubmit,
    trigger,
    formState: {errors},
  } = useForm<Note>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {id: id, title: title, description: description},
  });

  const [height, setHeight] = useState(100);

  const onEditNote = (data: Note) => {
    edit(id, data);
    Alert.alert('Message', 'Successfully edited note', [
      {
        text: 'OK',
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View className="flex flex-1 bg-white p-4">
      <Text className="text-2xl text-black font-semibold mb-4">Edit Note</Text>
      <View className="mb-4 flex flex-1 justify-center">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field}) => (
            <Input
              label="Title"
              {...field}
              onChangeText={(value: string) => {
                field.onChange(value);
                trigger('title');
              }}
              errorMessage={errors.title ? errors.title.message : ''}
            />
          )}
          name="title"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field}) => (
            <Input
              label="Description"
              multiline={true}
              numberOfLines={4}
              onContentSizeChange={e =>
                setHeight(e?.nativeEvent?.contentSize?.height)
              }
              style={{height: height}}
              {...field}
              onChangeText={(value: string) => {
                field.onChange(value);
                trigger('description');
              }}
              errorMessage={
                errors.description ? errors.description.message : ''
              }
            />
          )}
          name="description"
        />
        <Button title="Save" onPress={handleSubmit(onEditNote)} />
      </View>
    </View>
  );
};

export default EditNote;
