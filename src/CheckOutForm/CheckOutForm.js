import React, { useEffect, useState } from 'react';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import { Alert, Button, CircularProgress } from '@mui/material';


  
const CheckOutForm = ({appointment}) => {
    const [error,setError]=useState('')
    const {price,displayName,_id}=appointment
    const stripe = useStripe();
    const elements = useElements();
    const [success,setSuccess]=useState('')
    const [processing,setProcessing]=useState(false)
    const [clientSecret,setClientSecret]=useState('')
   
    useEffect(()=>{
      fetch('https://agile-dawn-10328.herokuapp.com/create-payment-intent',{
        method:'POST',
       headers:{
        'content-type':'application/json'
        },
       body:JSON.stringify({price})
      })
      .then(res=>res.json())
      .then(data=>setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async (e) => {

      // Block native form submission.
      e.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;

      
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
      setProcessing(true)
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        setSuccess('')
          setError(error.message)
        console.log('[error]', error);
        setProcessing(false)
      } else {
        setError('')
        console.log('[PaymentMethod]', paymentMethod);
      }

      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: displayName,
            },
          },
        },
      );
  if(intentError){
    setSuccess("")
    setError(intentError.message)
  }
  else{
    setSuccess("Your Payment is completed")
    setError('')
    console.log(paymentIntent);
    setProcessing(false)
    const payment={
     amount:paymentIntent.amount,
     created:paymentIntent.created,
     transaction:paymentIntent.client_secret.slice("_secret")[0]
    }
    fetch(`https://agile-dawn-10328.herokuapp.com/appointments/${_id}`,{
        method:'PUT',
       headers:{
        'content-type':'application/json'
        },
       body:JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
  }
    };
  
    return (
        <div>
            <form style={{margin:'3em auto',width:'75%',border:'1px solid darkGray',padding:'3em'}}  onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     {processing ? <CircularProgress></CircularProgress>: <Button sx={{mt:4}} variant='contained' type="submit" disabled={!stripe || success}>
        Pay {price}
      </Button>}
    </form>
    {
            error&&<Alert severity="error" sx={{mt:3,width:'50%',mx:'auto'}}>{error}</Alert>
    }
    {
            success&&<Alert severity="success" sx={{mt:3,width:'50%',mx:'auto'}}>{success}</Alert>
    }
        </div>
        
    );
};

export default CheckOutForm;