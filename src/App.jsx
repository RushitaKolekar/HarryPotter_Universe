import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {AppLayout,ErrorPage,Books,Cast,Movies,About,Games,Home,Houses,Facts,Snaps,Privacy,Contact} from "./PagesLinks";
import {BookIDs,MovieIDs,HouseIDs} from "./Components/ComponentLinks.js";
import './input.css';
// import './app.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"/",
          element: <Home />,
        
        },
        {
          path:"/books",
          element: <Books />,
        },

        // subpages of books based on the id
        {
          path: "/books/:id",  // Relative path (no leading slash) 
          element: <BookIDs />,
        },

        {
          path:"/cast",
          element: <Cast />,
        },
        {
          path:"/facts",
          element: <Facts />,
        },
        {
          path:"/games",
          element: <Games />,
        },
        
        {
          path:"/houses",
          element: <Houses />,
        },

        //subpages of houses
        {
          path: "/houses/:id",  // Relative path (no leading slash)
          element: <HouseIDs />,
        },

        {
          path:"/movies",
          element: <Movies />,
        },

        //subpages of movies
        {
          path: "/movies/:id",  // Relative path (no leading slash)
          element: <MovieIDs />,
        },

        {
          path:"/snaps",
          element: <Snaps />,
        },

        {
          path:"/about",
          element: <About />,
        },

        {
          path:"/contact",
          element: <Contact />,
        },

        {
          path:"/privacy",
          element: <Privacy />,
        }

      ]
    }

  ])
  
  return (
    <>
     
     <RouterProvider router={router}>

     </RouterProvider>
    </>
  )
}

export default App;
