import React, { useState } from "react";
import "./SearchDocuments.scss";
import Footer from "../Footer";
import { Controller, useForm } from "react-hook-form";
import { Input } from "reactstrap";
import RadioButtonsProperty from "./RadioButtonsProperty";
import PropertyHeader from "../Header/PropertyHeader";
import FormSelector from "../FormSelector/FormSelector";
import { GenderOptions } from "./Data/Data";
import SearchResults from "./SearchResults/SearchResults";
import { Link } from "react-router-dom";
import { getSearchDocuments } from "../../../../apis/getSearchDocuments";

export interface search {
  author: string;
  workNumber: any;
  type: any;
  title: string;
  registrationDate: string;
  genre: any;
}
type Props = {};

const SearchProperty = (Props: Props) => {
  const [isRadio, setIsRadio] = useState<any>(3);
  const [searchResult, setSearchResult] = useState<any>();
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const [loadingButton, setLoadingButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const { handleSubmit, control } = useForm<search>({
    defaultValues: {
          author: "",
          type: isRadio,
          title: "",
          workNumber: "",
          registrationDate: "",
    },
    mode: "onChange",
    // resolver: yupResolver(UserInfoFormValidation),
  });

  const scrollHandler = (data: any) => {
    setLoading(true);

    const search = {
          type: isRadio,
          category: selectedCategory,
          author: data?.author,
          title: data?.title,
          workNumber: data?.workNumber,
          registrationDate: data?.registrationDate
    };

    // Fetch search results
    getSearchDocuments(search)
      .then((resp) => {
        setSearchResult(resp?.data);
        setLoadingButton(true);
        setLoading(false);

        setTimeout(() => {
          if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      })
      .catch((err) => {
        console.error(err);
        setLoadingButton(false);
        setLoading(false);
      });
  };

  return (
    <div className="search-document-page">
      <PropertyHeader />
      <div className="search-documents-container">
        <div className="search-document">
          <div className="form-container">
            <h1 className="page-title">Search for Intellectual Property</h1>
            <div className="radio-buttons">
              <RadioButtonsProperty
                isRadio={isRadio}
                setIsRadio={setIsRadio}
              />
            </div>

            <form
              className="search-documents-form"
              onSubmit={handleSubmit(scrollHandler)}
            >
              {/* <div className="search-bars">
                <h3 className="search-title">Search by Category:</h3>
                <FormSelector
                  value={selectedCategory}
                  options={categories}
                  onChange={handleYearChange}
                />
              </div> */}

<div className="search-bars">
                              <h3 className="search-title">Search By:</h3>
                              <Controller
                                name="author"
                                control={control}
                                defaultValue="author"
                                render={({
                                  field: { onChange, value },
                                  fieldState: { error },
                                }) => {
                                  return (
                                    <Input
                                      value={value}
                                      error={error}
                                      id="author"
                                      type="text"
                                      name="author"
                                      placeholder="Author Name"
                                      onChange={onChange}
                                      className="document-input"
                                    />
                                  );
                                }}
                              />
              
                              <Controller
                                name="title"
                                control={control}
                                defaultValue="title"
                                render={({
                                  field: { onChange, value },
                                  fieldState: { error },
                                }) => {
                                  return (
                                    <Input
                                      value={value}
                                      error={error}
                                      id="title"
                                      type="text"
                                      name="title"
                                      placeholder="Title"
                                      onChange={onChange}
                                      className="document-input"
                                    />
                                  );
                                }}
                              />
              
                              {/* <Controller
                                name="name"
                                control={control}
                                defaultValue="name"
                                render={({
                                  field: { onChange, value },
                                  fieldState: { error },
                                }) => {
                                  return (
                                    <Input
                                      value={value}
                                      error={error}
                                      id="name"
                                      type="text"
                                      name="name"
                                      placeholder="Buscar por Género"
                                      onChange={onChange}
                                      className="document-input"
                                    />
                                  );
                                }}
                              /> */}
                              
              <FormSelector
                value={selectedCategory}
                options={GenderOptions}
                onChange={handleYearChange}
                />
              
                              <Controller
                                name="workNumber"
                                control={control}
                                defaultValue="workNumber"
                                render={({
                                  field: { onChange, value },
                                  fieldState: { error },
                                }) => {
                                  return (
                                    <Input
                                      value={value}
                                      error={error}
                                      id="workNumber"
                                      type="text"
                                      name="workNumber"
                                      placeholder="Work Number"
                                      onChange={onChange}
                                      className="document-input"
                                    />
                                  );
                                }}
                              />
              
                              <Controller
                                name="registrationDate"
                                control={control}
                                defaultValue="registrationDate"
                                render={({
                                  field: { onChange, value },
                                  fieldState: { error },
                                }) => {
                                  return (
                                    <Input
                                      value={value}
                                      error={error}
                                      id="registrationDate"
                                      type="text"
                                      name="registrationDate"
                                      placeholder="Registration Date"
                                      onChange={onChange}
                                      className="document-input"
                                    />
                                  );
                                }}
                              />
                            </div>
                            <button
  className="document-button"
  type="submit"
  disabled={loading}
  style={{
    cursor: loading ? "not-allowed" : "pointer",
    background: loading ? "#555" : "#3b4d53",
    opacity: loading ? 0.6 : 1
  }}
>
  {loading ? "Searching..." : "Search"}
</button>
              <div className="note">
                <h6>
                  if they require a certified law, please go through the
                  Department of State every time there is a cost.
                </h6>
              </div>
              <div
                className="actions"
              // style={{ display: isStaff ? "flex" : "none" }}
              >
                {/* <Link className="staff-button" to="/update-file-en">
                  Update File
                </Link> */}
                <Link className="staff-button" to="/upload-file-en">
                  Add New File
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div ref={bottomRef}>
          {loadingButton ? <SearchResults searchResult={searchResult} scrollHandler={scrollHandler} /> : ""}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SearchProperty;
