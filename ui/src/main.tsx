import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts'

import * as FilePond from 'filepond';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the plugin code
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

// Import the plugin styles
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';

import FilePondPluginImageCrop from 'filepond-plugin-image-crop';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import FilePonfPluginValidateSize from 'filepond-plugin-file-validate-size';
// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageEdit, FilePondPluginImageCrop, FilePondPluginFileValidateType, FilePonfPluginValidateSize);


import 'filepond/dist/filepond.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
      <Toaster position="top-center" />
      {/* @ts-ignore */}
      <RouterProvider router={router}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </RouterProvider>
    </Provider>,
)
