import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primeflex/primeflex.css';                                   
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';  
export default function AllProduct() {
  const [products, setProducts] = useState([]);
  
  const [layout, setLayout] = useState('grid');
  
    const getAllProduct = async () => {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_API_URL}/products?page=1&limit=20`
        );
        const fetchedProducts = data.data.products;
        setProducts(fetchedProducts); 
      } catch (error) {
      }
    };
    const {isLoading} = useQuery('All_Products',getAllProduct);
  if(isLoading){
    return (
       <div class="d-flex justify-content-center  ">
    <div class="spinner-grow text-primary" role="status">
    </div>
    </div>
    ) 
  }
    
 
  const listItem = (products) => {
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round img-fluid" src={products.mainImage.secure_url} alt={products.name} />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="font flex flex-column align-items-center sm:align-items-start gap-3">
                        <h3 className="fs-5 font-bold ">{products.name}</h3>
                        <Rating value={products.avgRating} disabled cancel={false} />

                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                            <Link
                 to={`/product/${products._id}`}
                 className="p-button-rounded text-nav-color"
                >
                 Details
               </Link>
                                <span className="font-semibold">{products.category}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">

                        <span className="text-nav-color text-2xl font-semibold">${products.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const gridItem = (products) => {
    return (
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div className="p-4 font border border-3  rounded-4 border-warning  surface-card border-round h-100">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div className="flex align-items-center gap-2">
           
                    </div>
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <img className="w-9 shadow-2 border-round img-fluid" src={products.mainImage.secure_url} alt={products.name} />
                    <h3 className="fs-5 font-bold">{products.name}</h3>
                    <Rating value={products.avgRating} disabled cancel={false} />
                </div>
                <div className="flex align-items-center justify-content-between">
         

                    <span className="text-nav-color text-2xl font-semibold">${products.price}</span>
                    <Link
                 to={`/product/${products._id}`}
                 className="p-button-rounded text-nav-color"
                >
                 Details
               </Link>
                    </div>
            </div>
        </div>
    );
};

const itemTemplate = (products, layout) => {
    if (!products) {
        return;
    }

    if (layout === 'list') return listItem(products);
    else if (layout === 'grid') return gridItem(products);
};

const header = () => {
    return (
        <div className="flex justify-content-end">
            <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
        </div>
    );
};

return (
    <div className="card">
        <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()} paginator rows={3} />
    </div>
)
  
}
