import { ButtonSearch, InputSearch, SearchComponent } from "./style"
import { BsSearch } from 'react-icons/bs'
import { useState } from "react";

export const Search = ({cb}) => {
    const [active, setActive] = useState(true);
    const [search, setSearch] = useState('')
    return <SearchComponent onBlur={(e)=> setActive(false)} onFocus={()=>setActive(true)}>
        <form onSubmit={(e)=>{
            e.preventDefault()
            if(active) {
                cb(search)
            }
        }}>
            <InputSearch open={active} onChange={(e)=>setSearch(e.target.value)} type='text'></InputSearch>
            <ButtonSearch type="submit"><BsSearch/></ButtonSearch>
        </form>
    </SearchComponent>
}