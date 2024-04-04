/* eslint-disable @typescript-eslint/ban-types */
import './styles.css'
type Props ={
    text: string;
    onNextPage: Function;
}
export default function ButtonAdmin({text, onNextPage}: Props){
    return(
        <button onClick={() => onNextPage()} type='reset' className='ed-btn ed-btn-admin'>{text}</button>
    );
}