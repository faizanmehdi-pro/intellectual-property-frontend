import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import SearchPropertyPage from "./pages/SearchPropertyPage";
import SearchPropertyPageES from "./pages/SearchPropertyPageES";
import UploadDocumentsES from "./components/desktop/DE/SearchDocument/UploadDocumentsES";
import UploadDocuments from "./components/desktop/DE/SearchDocument/UploadDocuments";
import UpdateDocumentsES from "./components/desktop/DE/SearchDocument/UpdateDocumentsES";
import UpdateDocuments from "./components/desktop/DE/SearchDocument/UpdateDocuments";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<SearchPropertyPageES />} />
        <Route path="/en" element={<SearchPropertyPage />} />
        <Route path="/upload-file" element={<UploadDocumentsES />} />
        <Route path="/upload-file-en" element={<UploadDocuments />} />
        <Route path="/update-file" element={<UpdateDocumentsES />} />
        <Route path="/update-file-en" element={<UpdateDocuments />} />
      </Routes>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  );
}

export default App;
