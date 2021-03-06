import React from "react";

const ReleaseForm = ({ submitHandler }) => {
  let _releaseName, _releaseDate;
  const handleSubmit = (e) => {
    submitHandler(e, {
      name: _releaseName.value,
      date: _releaseDate.value,
    });
    clearForm();
  };

  const clearForm = () => {
    _releaseDate.value = "";
    _releaseName.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="form-inline row justify-content-md-center ">
      <label className="sr-only" htmlFor="inlineFormInput">
        Release Name
      </label>
      <input
        type="text"
        ref={(input) => (_releaseName = input)}
        className="form-control mb-2 col-sm-4 mr-2 mb-sm-2"
        id="inlineFormInput"
        placeholder="Set the Name"
      />

      <label className="sr-only" htmlFor="inlineFormInputGroup">
        Release Date
      </label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-2">
        <input
          type="text"
          ref={(input) => (_releaseDate = input)}
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Set the Date"
        />
      </div>
      <button type="submit" className="btn btn-success mb-sm-2">
        Save
      </button>
    </form>
  );
};

export default ReleaseForm;
