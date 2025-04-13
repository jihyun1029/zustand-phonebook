import React from "react";
import {TextField} from "@mui/material";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-box">
            <TextField
                width={100}
                id="outlined-basic"
                label="찾기"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;