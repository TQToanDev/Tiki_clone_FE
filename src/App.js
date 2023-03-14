import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routeList from './routes';
import { AppProvider } from '../src/context/AppContext';

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {routeList.publicRoutes.map((route) => {
                            const Layout = route.layout;
                            const Component = route.component;
                            return (
                                <Route
                                    path={route.path}
                                    key={route.path}
                                    element={
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
