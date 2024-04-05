/* eslint-disable @typescript-eslint/ban-types */
import './styles.css';
type Props = {
    message: string;
    onDialogAnswer: Function;
}
export default function DialogConfirmation({ message, onDialogAnswer }: Props) {

    return (
        <div className='ed-dialog-background' onClick={() => onDialogAnswer(false)}>
            <div className='ed-dialog-box' onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className='ed-dialog-confirmation-btns'>
                    <button onClick={() => onDialogAnswer(true)} className="ed-btn ed-dialog-btn" type="submit">Sim</button>
                    <button onClick={() => onDialogAnswer(false)} className="ed-btn ed-dialog-btn-inverse" type="submit">Não</button>
                </div>
            </div>
        </div>
        //onClick={(event) => event.stopPropagation()} faz com que ao clicar na área do <div> ele não feche
    )
}