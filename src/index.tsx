import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AboutPage } from 'pages/about'
import { ContactsPage } from 'pages/contacts'

import { App } from 'components/App'

const root = document.getElementById('root')

if (!root) throw new Error('root not found')

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'Loading about...'}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/contacts',
        element: (
          <Suspense fallback={'Loading contacts...'}>
            <ContactsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not found page</h1>,
  },
])

container.render(<RouterProvider router={router} />)
