import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-controll-container">
                        <input type="text" name="" id="" className="dsmeta-form-controll" />
                    </div>

                    <div className="dsmeta-form-controll-container">
                        <input type="text" name="" id="" className="dsmeta-form-controll" />
                    </div>
                </div>


                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">#1</td>
                                <td className="show576">08/09/2001</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">23</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992">#2</td>
                                <td className="show576">08/09/2001</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">23</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="show992">#3</td>
                                <td className="show576">08/09/2001</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">23</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>
        </>
    )
}

export default SalesCard