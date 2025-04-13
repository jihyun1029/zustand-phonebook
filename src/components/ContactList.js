import React, {useState} from 'react';
import usePhoneBookStore from "../stores/usePhonebookStore";
import SearchBox from "./SearchBox";

const ContactList = () => {
    const {phoneBook} = usePhoneBookStore();
    // console.log(phoneBook);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredList = phoneBook.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {filteredList.map((item) => (
                <div key={item.id} className="list-item">
                    {item.image && (
                        <img
                            src={item.image}
                            alt={`${item.name}'s profile`}
                            className="item-img"
                            style={{width: '50px', height: '50px', borderRadius: '50%'}}
                        />
                    )}
                    <div>
                        <p className="item-name">{item.name}</p>
                        <p className="item-phoneNumber">{item.phoneNumber}</p>
                    </div>


                    {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
                    {/*    <span className="item-name" style={{fontWeight: 'bold', fontSize: '16px', marginRight: '8px'}}>*/}
                    {/*        {item.name}*/}
                    {/*    </span>*/}
                    {/*    <span className="item-phoneNumber" style={{color: '#666', fontSize: '15px'}}>*/}
                    {/*        {item.phoneNumber}*/}
                    {/*</span>*/}
                    {/*</div>*/}
                </div>
            ))}
        </div>
    );
};

export default ContactList;