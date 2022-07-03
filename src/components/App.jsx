import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

//import { ReactDOM } from 'react'
import '../components/App.css'
import Nav from './nav';
import Categories from './categories';
import Contact from './contact';
import Electric from './electric_scooters'
import ApolloCity from './apollo-city';
import Gaming from './gaming';
import Laptops from './laptops';
import SmartWatches from './smartwatches';
import TV from './tv';
import WiFi from './wifi';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            
            <div className="hi">
                <Routes>
                    <Route path="/SeeElectronics" element={<Categories />} />
                    <Route path="/SeeElectronics/electricscooters" element={<Electric />}/>
                    <Route path="/SeeElectronics/electricscooters/apollocity" element={<ApolloCity />}/>
                    <Route path="/SeeElectronics/gaming" element={<Gaming />}/>
                    <Route path="/SeeElectronics/laptops" element={<Laptops />}/>
                    <Route path="/SeeElectronics/smartwatches" element={<SmartWatches />}/>
                    <Route path="/SeeElectronics/tv" element={<TV />}/>
                    <Route path="/SeeElectronics/wifi" element={<WiFi />}/>
                    <Route path="/contact" element={<Contact />} />  
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;