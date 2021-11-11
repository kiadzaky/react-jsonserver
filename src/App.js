import {
	BrowserRouter as BR,
	Routes,
	Route,
	HashRouter,
	NavLink,
} from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
	return (
		// MEMBUAT ROUTE
		// <div className="container">
		// 	<BR>
		// 		<Routes>
		// 			<Route exact path="/" element={<ProductList />}></Route>
		// 			<Route path="/addproduct" element={<AddProduct />}></Route>
		// 			<Route path="/editproduct/:id" element={<EditProduct />}></Route>
		// 		</Routes>
		// 	</BR>
		// </div>
		//MEMBUAT SPA
		<HashRouter>
			<div>
				<h1 className="title">Single Page Application</h1>
				<ul>
					<li>
						<NavLink to="/">List Product</NavLink>
					</li>
					<li>
						<NavLink to="/addproduct">Tambah Product</NavLink>
					</li>
				</ul>
				<div className="content">
					<Routes>
						<Route exact path="/" element={<ProductList />}></Route>
						<Route path="/addproduct" element={<AddProduct />}></Route>
						<Route path="/editproduct/:id" element={<EditProduct />}></Route>
					</Routes>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
