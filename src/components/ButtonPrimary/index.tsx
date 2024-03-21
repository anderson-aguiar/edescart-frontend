import './styles.css'
type Props ={
    text: string;
}
export default function ButtonPrimary({text}: Props){
    return(
        <button type='submit' className='ed-btn ed-btn-green'>{text}</button>
    );
}