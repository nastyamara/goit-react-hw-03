
import css from './SearchBox.module.css'


export default function SearchBox({ value, onChange }) {
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" name="" id="" value={value} onChange={((e)=>onChange(e.target.value))} />
        </div>
    )
}