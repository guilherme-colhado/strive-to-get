import { ButtonSearch, InputSearch, SearchComponent } from "./style"
import { BsSearch } from 'react-icons/bs'
import { useState } from "react";
import { useEffect } from "react";
export const Search = ({cb}) => {
    const [active, setActive] = useState(false);
    // const windowClick = () => window.onClick(()=>setActive(false))
    // useEffect(() => {
    //     windowClick()
    // }, []);
    return <SearchComponent>
        <InputSearch type='text'></InputSearch>
        <ButtonSearch><BsSearch/></ButtonSearch>
    </SearchComponent>
}