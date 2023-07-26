// import { useEffect } from "react";
// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     usePayPalScriptReducer
// } from "@paypal/react-paypal-js";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";


// // This values are the props in the UI
// const amount = "200";
// const currency = "USD";
// const style = { "layout": "vertical"};

// // Custom component to wrap the PayPalButtons and handle currency changes
// const ButtonWrapper = ({ currency, showSpinner }) => {
//     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//     // This is the main reason to wrap the PayPalButtons in a new component
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//     useEffect(() => {
//         dispatch({
//             type: "resetOptions",
//             value: {
//                 ...options,
//                 currency: currency,
//             },
//         });
//     }, [currency, showSpinner]);


//     return (<>
//         {(showSpinner && isPending) && <div className="spinner" />}
//         <PayPalButtons
//             style={style}
//             disabled={false}
//             forceReRender={[amount, currency, style]}
//             fundingSource={undefined}
//             createOrder={(data, actions) => {
//                 return actions.order
//                     .create({
//                         purchase_units: [
//                             {
//                                 amount: {
//                                     currency_code: currency,
//                                     value: amount,
//                                 },
//                             },
//                         ],
//                     })
//                     .then((orderId) => {
//                         // Your code here after create the order
//                         return orderId;
//                     });
//             }}
//             onApprove={function (data, actions) {
//                 return actions.order.capture().then(function () {
//                     // Your code here after capture the order
//                 });
//             }}
//         />
//     </>
//     );
// }

// function PayPalPayment() {
//     return (
//         <Container>
//             <Row className="mt-5">
//                 <Col>
//                     <PayPalScriptProvider
//                         options={{
//                             "clientId": "test",
//                             components: "buttons",
//                             currency: "USD"
//                         }}
//                     >
//                         <ButtonWrapper
//                             currency={currency}
//                             showSpinner={false}
//                         />
//                     </PayPalScriptProvider>
//                     <Link to="/homepage">
//               Go Home
//             </Link>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default PayPalPayment;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { Container, Row, Col } from "react-bootstrap";

const amount = "200";
const currency = "USD";
const style = { "layout": "vertical"};
const redirectDelay = 3; // Tempo in secondi prima del reindirizzamento

const ButtonWrapper = ({ currency, showSpinner, onPaymentComplete }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    const handleApprove = (data, actions) => {
        return actions.order.capture().then(() => {
            // Your code here after capturing the order
            // Notify the parent component that payment is completed
            onPaymentComplete();
        });
    };

    return (
        <>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            },
                        ],
                    });
                }}
                onApprove={handleApprove}
            />
        </>
    );
}

function PayPalPayment() {
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [countdown, setCountdown] = useState(redirectDelay);

    const handlePaymentComplete = () => {
        setPaymentCompleted(true);
        // Dopo redirectDelay secondi, reindirizza l'utente alla home page
        const countdownInterval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            window.location.href = "/";
        }, redirectDelay * 1000);
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <PayPalScriptProvider
                        options={{
                            "clientId": "test",
                            components: "buttons",
                            currency: "USD"
                        }}
                    >
                        {!paymentCompleted ? (
                            <ButtonWrapper
                                currency={currency}
                                showSpinner={false}
                                onPaymentComplete={handlePaymentComplete}
                            />
                        ) : (
                            <p>Payment completed! You will be redirected to the <Link to="/homepage">Home Page</Link> in {countdown} second{countdown !== 1 ? "i" : ""}.</p>
                        )}
                    </PayPalScriptProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default PayPalPayment;
