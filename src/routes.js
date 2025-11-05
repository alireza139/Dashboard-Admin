import Home from './pages/home/Home';
import Offs from './pages/offs/Offs';
import Users from './pages/users/Users';
import Comments from './pages/comments/Comments';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';

const routes = [
    { path: "/home", element: <Home /> },
    { path: "/offs", element: <Offs /> },
    { path: "/users", element: <Users /> },
    { path: "/comments", element: <Comments /> },
    { path: "/orders", element: <Orders /> },
    { path: "/products", element: <Products /> }
]
export default routes