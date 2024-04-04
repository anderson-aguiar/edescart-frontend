import './styles.css'
type Props ={
    text: string;
}
export default function ButtonAdmin({text}: Props){
    return(
        <button type='reset' className='ed-btn ed-btn-admin'>{text}</button>
    );
}