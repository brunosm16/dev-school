import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const App = () => (
	<Layout>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/checkout" component={Checkout} />
		</Switch>
	</Layout>
);

export default App;
