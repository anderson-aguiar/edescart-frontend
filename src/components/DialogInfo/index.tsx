/* eslint-disable @typescript-eslint/ban-types */
import './styles.css';
type Props = {
    message: string;
    onDialogClose: Function;
}
export default function DialogInfo({message, onDialogClose} : Props){

    return(
        <div className='ed-dialog-background' onClick={() => onDialogClose()}>
            <div className='ed-dialog-box' onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <button onClick={() => onDialogClose()} className="ed-btn ed-dialog-btn" type="submit">ok</button>
            </div>
        </div>
        //onClick={(event) => event.stopPropagation()} faz com que ao clicar na área do <div> ele não feche
    )
}