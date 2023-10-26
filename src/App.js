import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostFrom } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element = {
                <>
                  <AddPostFrom />
                  <PostsList />
                </>
              }
            />
            <Route exact path="/posts/:postId" element = {<SinglePostPage />}></Route>
            <Route exact path="/editPost/:postId" element = {<EditPostForm />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
