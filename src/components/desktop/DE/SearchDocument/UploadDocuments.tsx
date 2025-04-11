import React, { useState } from "react";
import "./SearchDocuments.scss";
import { Input } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import Footer from "../Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormSelector from "../FormSelector/FormSelector";
import UploadHeader from "../Header/UploadHeader";
import { GenderOptions } from "./Data/Data";
import RadioButtonsProperty from "./RadioButtonsProperty";
import { uploadDocuments } from "../../../../apis/uploadDocuments";

type Props = {};

export interface SearchData {
  authorName: string;
  title: any;
  workNumber: any;
  registrationDate: any;
  type: any;
  file: any;
}

const UploadDocuments = (props: Props) => {
  
  let User_ID = localStorage.getItem('user_id');;
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const navigate = useNavigate();
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCancel = () => {
    navigate("/en");
  };
  const [isRadio, setIsRadio] = useState<any>(1);

  const { handleSubmit, control } = useForm<SearchData>({
    defaultValues: {
      authorName: "",
      title: "",
      workNumber: "",
      registrationDate: "",
      type: isRadio,
    },
    mode: "onChange",
  });

  const onUploadDocuments = (data: SearchData) => {
    const upload = {
      type: isRadio,
      authorName: data.authorName,
      title: data.title,
      workNumber: data.workNumber,
      registrationDate: data.registrationDate,
      file: selectedFile,
      category: selectedCategory,
      userID: User_ID
    };
    setIsLoading(true);
    uploadDocuments(upload)
      .then((response) => {
        toast.success("Upload File Successfully");
        setIsLoading(false);
        navigate("/EN");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error("Error uploading file. Please try again.");
      });
  };

  return (
    <div className="search-document-page">
      <UploadHeader />
      <div className="search-documents-container">
        <div className="search-document">
          <div className="form-container">
            <h1 className="page-title">Upload File</h1>
            <form
              className="search-documents-form"
              onSubmit={handleSubmit(onUploadDocuments)}
            >
              <div className="search-bars">
                <div className="search-form-field">
                  <label>Select Type</label>
                  <div className="radio-buttons">
                    <RadioButtonsProperty
                      isRadio={isRadio}
                      setIsRadio={setIsRadio}
                    />
                  </div>
                </div>
                <div className="search-form-field">
                  <label>Author Name</label>
                  <Controller
                  name="authorName"
                  control={control}
                  defaultValue="authorName"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      id="authorName"
                      type="text"
                      name="authorName"
                      placeholder="Author Name"
                      onChange={onChange}
                      className="document-input"
                      required
                    />
                  )}
                />
                </div>
                <h3 className="search-title">Genre:</h3>
                <FormSelector
                  value={selectedCategory}
                  options={GenderOptions}
                  onChange={handleCategoriesChange}
                />
                
                <div className="search-form-field">
                  <label>Title</label>
                  <Controller
                  name="title"
                  control={control}
                  defaultValue="title"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      id="title"
                      type="text"
                      name="title"
                      placeholder="Enter Title"
                      onChange={onChange}
                      className="document-input"
                      required
                    />
                  )}
                />
                </div>
                <div className="search-form-field">
                  <label>Work Number</label>
                  <Controller
                  name="workNumber"
                  control={control}
                  defaultValue="workNumber"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      id="workNumber"
                      type="text"
                      name="workNumber"
                      placeholder="Enter Work Number"
                      onChange={onChange}
                      className="document-input"
                      required
                    />
                  )}
                />
                </div>
                
                <div className="search-form-field">
                  <label>Registration Date</label>
                  <Controller
                  name="registrationDate"
                  control={control}
                  defaultValue="registrationDate"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      id="registrationDate"
                      type="date"
                      name="registrationDate"
                      placeholder="Enter Registration Date"
                      onChange={onChange}
                      className="document-input"
                      required
                    />
                  )}
                />
                </div>
                <div className="search-form-field">
                  <label>File</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.mp4,.mov,.avi,.mp3,.wav,.jpg,.jpeg,.png,.gif"
                    required
                    onChange={handleFileChange}
                    className="document-input"
                  />
                </div>
              </div>
              <div className="actions">
                <button
                  className="document-button"
                  type="submit"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="document-button"
                  type="submit"
                  onClick={scrollHandler}
                  disabled={isLoading}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    background: isLoading ? "#000" : "#3b4d53",
                    opacity: isLoading ? 0.6 : 1
                  }}
                >
                  {isLoading ? "Uploading..." : "Upload File"}
                </button>
              </div>
              <div className="note">
                <h6>
                  if they require a certified law, please go through the
                  Department of State every time there is a cost.
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadDocuments;
