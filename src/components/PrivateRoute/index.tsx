import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { RoleEnum } from '../../models/auth';
type Props = {
    children: JSX.Element;
    roles?: RoleEnum[]
}
export function PrivateRoute({ children, roles = [] }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!authService.hasAnyRoles(roles)) {
        return <Navigate to="/" />;
    }
    return children;
}
//Esse componente tem a finalidade de verificar se o usuário está autenticado e 
//se tem algum Role informado no argumento. Caso sim, ele irá abrir o componente
//filho na rota especificada, ao contrário irá redirecionar para a rota do login ou "/";