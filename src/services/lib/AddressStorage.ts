import AsyncStorage from "@react-native-async-storage/async-storage";

export const addAddressInStore = async (address: string) => {
  try {
    await AsyncStorage.setItem(`${address}`, address);
    return true;
  } catch (error) {
    return false;
  }
};
export const removeAddressInStore = (address: string) => {};
