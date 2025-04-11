import React, { useState } from "react";
import "./SearchDocuments.scss";
import { Controller, useForm } from "react-hook-form";
import { Input } from "reactstrap";
import RadioButtonsPropertyES from "./RadioButtonsPropertyES";
import FooterES from "../FooterES";
import PropertyHeaderES from "../Header/PropertyHeaderES";
import { GenderOptions } from "./Data/DataES";
import FormSelector from "../FormSelector/FormSelector";
import SearchResults from "./SearchResults/SearchResults";
import { Link } from "react-router-dom";
import SearchResultsES from "./SearchResults/SearchResultsES";
import { getSearchDocuments } from "../../../../apis/getSearchDocuments";
import { title } from "process";

export interface search {
  author: string;
  workNumber: any;
  type: any;
  title: string;
  registrationDate: string;
  genre: any;
}
type Props = {};

const SearchPropertyES = (Props: Props) => {
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
      <PropertyHeaderES />
      <div className="search-documents-container">
        <div className="search-document">
          <div className="form-container">
            <h1 className="page-title">Búsqueda de Propiedad Intelectual</h1>
            <div className="radio-buttons">
              <RadioButtonsPropertyES
                isRadio={isRadio}
                setIsRadio={setIsRadio}
              />
            </div>

            <form
              className="search-documents-form"
              onSubmit={handleSubmit(scrollHandler)}
            >
            {/* <div className="search-bars">
              <h3 className="search-title">Buscar por Categoría:</h3>
              <FormSelector
                value={selectedCategory}
                options={categoriesES}
                onChange={handleYearChange}
              />
            </div> */}
              
                            <div className="search-bars">
                              <h3 className="search-title">Búsqueda por:</h3>
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
                                      placeholder="Buscar por Nombre de Autor"
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
                                      placeholder="Buscar por Título"
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
                                      placeholder="Buscar por Número de Obra"
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
                                      placeholder="Buscar por Fecha de Inscripción"
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
                {loading ? "Búsqueda..." : "Buscar"}
              </button>
              <div className="note">
                <h6>
                  Si requieren una ley certificada deberán pasar por el
                  Departamento de Estado toda vez que conlleva costo.
                </h6>
              </div>
              <div
                className="actions"
                // style={{ display: isStaff ? "flex" : "none" }}
              >
                {/* <Link className="staff-button" to="/update-file">
                  Actualizar Archivo
                </Link> */}
                <Link className="staff-button" to="/upload-file">
                  Agregar Nuevo Archivo
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div ref={bottomRef}>
          {loadingButton ? <SearchResultsES searchResult={searchResult} scrollHandler={scrollHandler}/> : ""}
        </div>
        <FooterES />
      </div>
    </div>
  );
};

export default SearchPropertyES;
