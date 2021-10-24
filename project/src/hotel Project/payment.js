import React from 'react'

const Payment = ({checkIn,checkout}) => {
   
    return (
        <div className='payment-div'>
            <header>
                <h2>Payment Part</h2>
            </header>
            <main>
                <p>
                    You are Booking for the Presidential Economy Deluxe from the {checkIn} to the {checkout}.

                </p>
                <p>
                    It Costs  $300
                </p>
            </main>
            <div>
                <header>
                    <h3>Finish the Booking Process By Paying the for your Stay at the Room</h3>
                </header>
                <div className='btn-pay-center'>
                    <button className="btn-pay-btn">
                        Pay
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment
