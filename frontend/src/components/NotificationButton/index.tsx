import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function NotificationButton({saleId}: Props) {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notification button" onClick={() => handleClick(saleId)}/>
        </div>
    )
}

function handleClick(saleId: number): void {
    console.log(`Enviando requisição do usuário ${saleId}`)
    axios(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso")
        })
}

export default NotificationButton;


