import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import {
    Home,

} from '../../pages';

export default function MainRouter() {
  return (
    <div>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
                </Route>

            </Routes>

    </div>
  )
}
