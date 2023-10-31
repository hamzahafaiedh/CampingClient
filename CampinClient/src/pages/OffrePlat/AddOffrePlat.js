import Navbar from '../../components/NewNavbar'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import style from './AddReservation.module.css'
function AddReservation() {
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
            <div className={style.AddResContainer}>
                    <div className={style.AddResContent}>
                        <h1 className={style.welcomeText}>Add a new Reservation</h1>
                        <form className={style.AddResForm}>
                            <input type="text" name='' placeholder="Number of participants" className={style.inputField} />
                            <input type="date" placeholder="Start date" className={style.Datefield} />
                            <input type="date" placeholder="End date" className={style.Datefield} />
                            <select className={style.Datefield} >
                            <option value="unpaid">Unpaid</option>
                                <option value="paid">Paid</option> 
                            </select>
                            <div className='d-flex '>
                            <button type="button" className={`${style.AddResButton} ${style.CancelButton}`}>Cancel</button>
                            <button type="submit" className={style.AddResButton}>Add reservation</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    );
}

export default AddReservation;