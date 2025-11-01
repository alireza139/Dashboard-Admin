import Offs from './components/offs/Offs';
import Users from './components/users/Users';
import Comments from './components/comments/Comments';
import Orders from './components/orders/Orders';
import Products from './components/products/Products';

const routes = [
    { path: "/offs", element: <Offs /> },
    { path: "/users", element: <Users /> },
    { path: "/comments", element: <Comments /> },
    { path: "/orders", element: <Orders /> },
    { path: "/products", element: <Products /> }
]
export default routes