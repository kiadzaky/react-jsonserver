import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fectData();
	}, []);
	const fectData = async () => {
		const response = await fetch('http://localhost:6969/products');
		const data = await response.json();
		setProducts(data);
	};

	const deleteProduct = async (id) => {
		await fetch(`http://localhost:6969/products/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		});
		fectData();
	};
	return (
		<div>
			<h1 className="title is-2">Data Produk</h1>
			<a href="/addproduct" className="button is-primary">
				Tambah Produk
			</a>
			<table className="table is-stripped">
				<thead>
					<tr>
						<th>No</th>
						<th>Nama Produk</th>
						<th>Harga</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<tr key={product.id}>
							<td>{index + 1}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>
								<Link
									to={`/editproduct/${product.id}`}
									className="button is-small is-info"
								>
									Edit
								</Link>
								<button
									onClick={() => deleteProduct(product.id)}
									className="button is-small is-danger"
								>
									Hapus
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
