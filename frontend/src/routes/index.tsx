import { Route, Routes } from "react-router-dom";
import ListarCategorias from "../pages/categorias/listarCategorias";
import ListarProdutos from "../pages/produtos/listarProdutos";


export default function AppRoutes() {
    return(

        <Routes>
            <Route path ="/" element ={<h1>Página Principal</h1>} />
            <Route path = "/categorias" element={<ListarCategorias/>}/>
            <Route path = "/produtos" element={<ListarProdutos/>}/>
        </Routes>
    );
}