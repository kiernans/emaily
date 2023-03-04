import StripeCheckout from 'react-stripe-checkout';
import { useHandleTokenMutation } from '../store';

const Payments = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [handleToken, results] = useHandleTokenMutation();

	return (
		<StripeCheckout
			name='Emaily'
			description='$5 for 5 email credits'
			ComponentClass='div'
			amount={500}
			token={(token) => handleToken(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY as string}
		/>
	);
};

export default Payments;
