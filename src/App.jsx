import { Switch, Route } from 'react-router-dom';
import Courses from './components/Courses/CoursesList';
import Layout from './components/Layout/Layout';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const App = () => (
	<Layout>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/checkout" component={Checkout} />
			<Route exact path="/categories" component={Categories} />
			<Route exact path="/categories/:categoryId" component={Courses} />
		</Switch>
	</Layout>
);

export default App;
