import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error as user types
    if (!!errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full name is required";
    if (!formData.email) tempErrors.email = "Work email is required";
    if (!formData.mobile || formData.mobile.length !== 10)
      tempErrors.mobile = "Enter a 10-digit mobile number";
    if (!formData.course) tempErrors.course = "Please select a course";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validate()) {
        try {
          const response = await fetch("https://evergreen-university-dashboard.onrender.com/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          
          if (response.ok) {
            const data = await response.json();
            setSubmittedData(data.student);
            alert("Registration Successful!");
          }
        } catch (err) {
          console.error("Error connecting to server:", err);
        }
      }
    };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Student Registration</h2>
          <p>Fill in the details to enroll in the new batch.</p>
        </div>

        <div className="form-grid">
          {/* Name Field */}
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              className={errors.name ? "input-error" : ""}
              onChange={handleChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. name@company.com"
              className={errors.email ? "input-error" : ""}
              onChange={handleChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Mobile Field */}
          <div className="form-group">
            <label>Mobile Number</label>

            <div className="input-with-prefix">
              <span className="prefix">+91</span>

              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>

            {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
          </div>

          {/* Course Field */}
          <div className="form-group">
            <label>Course Selection</label>
            <input
              type="text"
              name="course"
              placeholder="e.g. Full Stack Development"
              className={errors.course ? "input-error" : ""}
              onChange={handleChange}
            />
            {errors.course && <span className="error-msg">{errors.course}</span>}
          </div>
        </div>

        <button type="submit" className="submit-btn">Complete Registration</button>
      </form>

      {/* Preview Card */}
      {submittedData && (
        <div className="preview-card">
          <h3>Preview Details</h3>
          <div className="preview-item">
            <label>Name: </label>
            <span>{submittedData.name}</span>
          </div>
          <div className="preview-item">
            <label>Email: </label>
            <span>{submittedData.email}</span>
          </div>
          <div className="preview-item">
            <label>Contact: </label>
            <span>+91 {submittedData.mobile}</span>
          </div>
          <div className="preview-item">
            <label>Course: </label>
            <span className="course-tag">{submittedData.course}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;