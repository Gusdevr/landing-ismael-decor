import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import QuemSomos from "./pages/QuemSomos"
// import CortinaTrilho from './pages/CortinaTrilho'
// import CortinaVarao from './pages/CortinaVarao'
// import PersianaAluminio from "./pages/PersianaAluminio"
// import PersianaMadeira from "./pages/PersianaMadeira"
// import PersianaRolo from "./pages/PersianaRolo"
// import PersianaRomana from "./pages/PersianaRomana"
import Servicos from "./pages/Serviços"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='quemsomos' element={<QuemSomos />} />
                {/* <Route path='persianarolo' element={<PersianaRolo />} />
                <Route path='cortinatrilho' element={<CortinaTrilho />} />
                <Route path='cortinavarao' element={<CortinaVarao />} />
                <Route path='persianaaluminio' element={<PersianaAluminio />} />
                <Route path='persianamadeira' element={<PersianaMadeira />} />
                <Route path='persianaromana' element={<PersianaRomana />} /> */}
                <Route path='servicos' element={<Servicos />} />
              
            </Routes>
        </BrowserRouter>
    )
}

export default Router