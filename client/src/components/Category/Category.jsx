import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
// import { useNavigate } from "react-router-dom";
// import "./Category.scss";
// <p>text</p>

// const Category = ({ categories }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="shop-by-category">
//             <div className="categories">
//                 {categories?.data?.map((item) => (
//                     <div
//                         key={item.id}
//                         className="category"
//                         onClick={() => navigate(`/category/${item.id}`)}
//                     >
//                         <img alt="kuchbhi"
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 item.attributes.img.data.attributes.url
                                
//                             }
//                         />
//                         <p>text</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Category;
