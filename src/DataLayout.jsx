import { NavLink, Outlet, useLocation } from "react-router";
import './data.css'
export default function DataLayout() {
    const location = useLocation();

    return (
        <>
            <div>
                <h1>This is header</h1>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/data/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data/sellers">Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data/customers">Customers</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: "/data/products",
                            search: "?category=shoes",
                            hash: "#top"
                        }} >Products
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div>
                <h3>This is footer</h3>
                <p>Location:{location.pathname} {location.search} {location.hash}</p>
            </div>
        </>
    );
};
