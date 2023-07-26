import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { Container, Row, Col } from "react-bootstrap";

// This values are the props in the UI
const amount = "200";
const currency = "USD";
const style = { "layout": "vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
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


    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                    // Your code here after capture the order
                });
            }}
        />
    </>
    );
}

function PayPalPayment() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col className="d-flex justify-content-center align-items-center col-12">
                    <PayPalScriptProvider
                        options={{
                            "clientId": "test",
                            components: "buttons",
                            currency: "USD"
                        }}
                    >
                        <ButtonWrapper
                            currency={currency}
                            showSpinner={false}
                        />
                    </PayPalScriptProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default PayPalPayment;