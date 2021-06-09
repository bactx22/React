const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600.jpg",
      price: 20000000,
      status: true,
    },
    {
      id: 2,
      name: "Samsung",
      image:
        "https://phucanhcdn.com/media/product/38094_samsung_galaxy_s20_plus_black_1_1.png",
      price: 20000000,
      status: true,
    },
    {
      id: 3,
      name: "Oppo",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/229915/oppo-a53s-122620-092604-600x600.jpg",
      price: 20000000,
      status: true,
    },
  ]);

  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  // const handleDelete = (id) => {
  //   const newProduct = products.filter(product => product.id !== id);
  //   setProducts(newProduct);
  //   console.log(newProduct)
  //   }
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Banner />
        <Albums products={products} />
        {/* handleDelete={handleDelete} */}
        {status ? (
          <div style={{ background: color, width: "300px", height: "300px" }}>
            {count}
          </div>
        ) : (
          ""
        )}

        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          change color
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          change color
        </button>
        <button
          onClick={() => {
            setStatus(!status);
          }}
        >
          change status
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
