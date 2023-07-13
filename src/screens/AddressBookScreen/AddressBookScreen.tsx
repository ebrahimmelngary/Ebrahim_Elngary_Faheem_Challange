import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';

import { BASE_URL } from '../../api';
import { Data, Result } from '../../types';
import AddressBookCard from '../../components/AddressBookCard/AddressBookCard';
import styles from './AddressBookScreen.styles';
import RadioWithLabel from '../../components/RadioWithLabel/RadioWithLabel';
import { filters } from './FilterOptions';

export default function AddressBookScreen() {
  const [page, setPage] = useState<number>(1);
  const [addressBookData, setAddressBookData] = useState<Result[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredAddressBookData, setFilteredAddressBookData] = useState<
    Result[]
  >([]);

  useEffect(() => {
    //Avoid Memory leak
    const controller = new AbortController();
    const signal = controller.signal;
    const getAddressBookList = async () => {
      try {
        setIsLoading(true);
        await axios
          .get(BASE_URL + `?results=15&page=${page}`, { signal })
          .then((response: AxiosResponse<Data>) => {
            if (response?.status === 200) {
              setAddressBookData(items => [
                ...items,
                ...response?.data?.results,
              ]);
            }
            setIsLoading(false);
          });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getAddressBookList();

    return () => controller.abort();
  }, [page]);

  const renderItems = ({ item, index }: { item: Result; index: number }) => {
    return <AddressBookCard key={index.toString()} item={item} />;
  };

  const loadMore = () => {
    if (!isLoading) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const filteredData = addressBookData?.filter(
      item => item.gender === selectedOption,
    );
    setFilteredAddressBookData(filteredData);
  }, [addressBookData, selectedOption]);

  const headerComponent = () => {
    return (
      <View style={styles.headerContainer}>
        {filters?.map(item => (
          <RadioWithLabel
            key={item.id}
            title={item.title}
            onPress={() => setSelectedOption(item.value)}
            isActive={item.value === selectedOption}
          />
        ))}
      </View>
    );
  };

  const emptyComponent = () => (
    <Text style={styles.emptyText}>No Contacts Loaded</Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={
          filteredAddressBookData?.length > 0
            ? filteredAddressBookData
            : addressBookData
        }
        ListHeaderComponent={headerComponent}
        stickyHeaderIndices={[0]}
        renderItem={renderItems}
        keyExtractor={(item, index) => item?.id?.value + index.toString()}
        onEndReachedThreshold={0.1}
        windowSize={15}
        initialNumToRender={15}
        onEndReached={loadMore}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
}
