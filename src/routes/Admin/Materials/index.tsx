import './styles.css';
import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';
import addMaterial from '../../../assets/addMaterial.svg';
import * as materialService from '../../../services/material-service';
import { useEffect, useState } from 'react';
import { MaterialDTO } from '../../../models/material';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';

export default function Materials() {
    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    const [materials, setMaterials] = useState<MaterialDTO[]>([]);

    useEffect(() => {
        materialService.findAllRequest()
            .then(response => {
                setMaterials(response.data);
            })
    }, [materials])

    function handleDeleteClick(materialId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, visible: true, id: materialId })
    }

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false })
    }
    function handleDialogConfirmationAnswer(answer: boolean, companyId: number) {
        if (answer) {
            materialService.deleteById(companyId)
                .then(() => {
                    setMaterials([]);
                    setDialogInfoData({...dialogInfoData ,visible: true})
                })
                .catch(error => {
                    setDialogInfoData({visible: true, message: error.response.data.error})
                })
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false })
    }
    return (
        <>
            <section id="material-listing-section" className='ed-container'>
                <div className='ed-mt20 ed-line-bottom ed-material-listing-itens'>
                    <h2 className=' ed-listing-section-title '>Materiais</h2>
                    <img src={addMaterial} alt='Adicionar Material' title='Add Novo' />
                </div>
                <table className="ed-table ed-mt20 ed-mb20">
                    <thead>
                        <tr>
                            <th className='ed-tb576'>ID</th>
                            <th className="ed-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            materials.map(material => (
                                <tr key={material.id}>
                                    <td className='ed-tb576'>{material.id}</td>
                                    <td className='ed-txt-left'>{material.name}</td>
                                    <td>
                                        <img className='ed-material-listing-btn' src={editImg} alt='Editar' />
                                    </td>
                                    <td>
                                        <img onClick={() => handleDeleteClick(material.id)} className='ed-material-listing-btn' src={deleteImg} alt='Deletar' />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo message={dialogInfoData.message} onDialogClose={handleDialogInfoClose} />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }
        </>
    );
}