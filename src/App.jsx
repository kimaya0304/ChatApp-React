import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./pages/Auth"
import { Suspense, lazy } from "react"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./components/Error"

const Auth = lazy(() => import("./pages/Auth"))
const Chat = lazy(() => import("./pages/Chat"))


const App = () => {

  const MAIN_ROUTES = [
    { path: "/", element: <Auth /> },
    { path: "/chat", element: <Chat /> },
  ]
  return <>
    <BrowserRouter>
      <Routes>
        {
          MAIN_ROUTES.map(item => <Route path={item.path} element={<ErrorBoundary FallbackComponent={<Error />}>
            <Suspense fallback={<><span className="loading loading-infinity loading-md"></span></>}>
              {item.element}
            </Suspense>
          </ErrorBoundary>} />)
        }
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App