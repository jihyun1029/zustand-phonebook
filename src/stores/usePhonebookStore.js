import {create} from 'zustand';

const DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg';

const usePhoneBookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber, image = DEFAULT_IMAGE) =>
        set((state) => ({
            phoneBook:[...state.phoneBook, {id:Date.now(), name, phoneNumber, image}]
        })),
}));

export default usePhoneBookStore;