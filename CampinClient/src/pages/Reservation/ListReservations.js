import Navbar from '../../components/NewNavbar'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import style from './AddReservation.module.css'

function ListReservations() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div className={style.fullScreen}>
            <div className={style.overlay}></div>
        </div>
        <div className={`container  ${style.AddResContainer}`}> 
            <div className={style.AddResContent}>
                <h1 className={style.welcomeText}>List of reservations</h1>
                <div className=' pt-4'></div>
                <table className="table mb-4 text-white" style={{ "--bs-table-color": "initial", "--bs-table-bg": "initial" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Number of participants</th>
                            <th scope="col">Start date</th>
                            <th scope="col">End date</th>
                            <th scope="col">Payment status</th> {/* Corrected typo in "Payment" */}
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className='align-middle'>1</th>
                            <td className='align-middle'>Mark</td>
                            <td className='align-middle'>Otto</td>
                            <td className='align-middle'>@mdo</td>
                            <td className='align-middle'>paid</td>
                            <td>
                                <button className={`${style.AddResButton} ${style.CancelButton}`}>Delete</button>
                            </td>
                            <td>
                                <button className={`${style.AddResButton} ${style.UpdateButton}`}>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default ListReservations;
