import { Route, Routes } from "react-router-dom"
import AdministrarTareas from '../pages/AdministrarTareas';
import NotFound from '../pages/NotFound';

function Public(){
    return(
      <>
      <Routes>
        <Route path='/' element={<AdministrarTareas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </>
    )
}

export default Public