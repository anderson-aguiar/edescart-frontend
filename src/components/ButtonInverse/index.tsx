import './styles.css'
type Props ={
    text: string;
}
export default function ButtonInverse({text}: Props){
    return(
        <button type='reset' className='ed-btn ed-btn-inverse'>{text}</button>
    );
}