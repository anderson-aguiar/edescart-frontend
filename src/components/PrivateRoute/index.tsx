import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
type Props = {
    children: JSX.Element;
}
export function PrivateRoute({ children }: Props) {
    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}
//Esse componente tem a finalidade de verificar se o usuário está autenticado. Caso sim, ele irá abrir o componente
//filho na rota especificada, ao contrário irá redirecionar para a rota do login;