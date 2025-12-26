import React, { useState } from "react";
import FormSkeleton from "../../utility/FormSkeleton";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "fullName") {
      if (trimmedValue === "") {
        setFormErrors((prev) => ({ ...prev, fullName: "Name is required." }));
      } else if (trimmedValue.length < 3) {
        setFormErrors((prev) => ({
          ...prev,
          fullName: "Name must be at least 3 characters.",
        }));
      } else if (!/^[a-zA-Z\s]*$/.test(trimmedValue)) {
        setFormErrors((prev) => ({
          ...prev,
          fullName: "Name can only contain letters and spaces.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, fullName: "" }));
      }
    }

    if (name === "mobileNumber") {
      if (trimmedValue === "") {
        setFormErrors((prev) => ({
          ...prev,
          mobileNumber: "Mobile Number is required.",
        }));
      } else if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
        setFormErrors((prev) => ({
          ...prev,
          mobileNumber: "Please enter a valid 10-digit number.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, mobileNumber: "" }));
      }
    }

    if (name === "emailAddress") {
      if (trimmedValue === "") {
        setFormErrors((prev) => ({
          ...prev,
          emailAddress: "Email is required.",
        }));
      } else if (!validateEmail(trimmedValue)) {
        setFormErrors((prev) => ({
          ...prev,
          emailAddress: "Please enter a valid email address.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, emailAddress: "" }));
      }
    }

    if (name === "message") {
      if (trimmedValue === "") {
        setFormErrors((prev) => ({
          ...prev,
          message: "Message is required.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, message: "" }));
      }
    }
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();
    const errors = {};

    const fullName = formData.fullName.trim();
    const mobileNumber = formData.mobileNumber.trim();
    const emailAddress = formData.emailAddress.trim();
    const message = formData.message.trim();

    if (fullName === "") {
      errors.fullName = "Full Name is required.";
    } else if (fullName.length < 3) {
      errors.fullName = "Name must be at least 3 characters.";
    } else if (!/^[a-zA-Z\s]*$/.test(fullName)) {
      errors.fullName = "Name can only contain letters and spaces.";
    }

    if (mobileNumber === "") {
      errors.mobileNumber = "Mobile Number is required.";
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      errors.mobileNumber = "Please enter a valid 10-digit number.";
    }

    if (emailAddress === "") {
      errors.emailAddress = "Email Address is required.";
    } else if (!validateEmail(emailAddress)) {
      errors.emailAddress = "Please enter a valid email address.";
    }

    if (message === "") {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true); // 🔥 SKELETON START

    setTimeout(() => {
      setLoading(false); // 🔥 SKELETON STOP
      alert("Message sent successfully");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Grid: 1 column on small; 2 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: contact info */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 h-full flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
              Contact with Us For Your Any Information to Know
            </h1>
            <p className="text-md  mb-4">
              Our team is spread around the world working remotely. Visit us at
              Ground Floor, Bella Strada, 037 Santorini, Greece.
            </p>

            <address className="not-italic text-md  mb-4">
              915 Cheshire Road, Stratford Street College, United States
            </address>

            <p className="text-md mb-4">
              Contact Us:{" "}
              <a
                href="tel:+9199034688764"
                className="text-blue-800 font-medium"
              >
                +91 99034 688764
              </a>
            </p>

            <ul className="flex gap-3 mt-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/taxa23/about/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-50 hover:scale-105 transition-transform"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.213c.837 0 1.356-.554 1.356-1.248-.015-.71-.519-1.248-1.342-1.248-.823 0-1.356.538-1.356 1.248 0 .694.519 1.248 1.327 1.248h.015zm4.908 8.213h2.4v-4.045c0-.216.016-.432.08-.586.174-.431.571-.878 1.238-.878.872 0 1.22.662 1.22 1.632v3.877h2.4V9.604c0-2.221-1.184-3.254-2.764-3.254-1.276 0-1.845.705-2.165 1.2h.03v-1.033h-2.4c.03.662 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/_taxa23"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-50 hover:scale-105 transition-transform"
                  aria-label="X / Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576770940387"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-50 hover:scale-105 transition-transform"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/taxa232025/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-50 hover:scale-105 transition-transform"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: form */}

        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
          {loading ? (
            <FormSkeleton />
          ) : (
            <>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Get in Touch
                </h3>
                <p className="text-md  mb-4">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <form className="grid grid-cols-1 gap-4 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^[a-zA-Z\s]*$/.test(input) || input === "") {
                          changeHandler(e);
                        }
                      }}
                      className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                        formErrors.fullName
                          ? "border-red-300"
                          : "border-slate-200"
                      }`}
                      placeholder="Enter full name"
                      aria-invalid={!!formErrors.fullName}
                      aria-describedby={
                        formErrors.fullName ? "fullName-error" : undefined
                      }
                    />
                    {formErrors.fullName && (
                      <p
                        id="fullName-error"
                        className="text-red-600 text-sm mt-1"
                      >
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={changeHandler}
                      className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                        formErrors.emailAddress
                          ? "border-red-300"
                          : "border-slate-200"
                      }`}
                      placeholder="Enter your email address"
                      aria-invalid={!!formErrors.emailAddress}
                      aria-describedby={
                        formErrors.emailAddress
                          ? "emailAddress-error"
                          : undefined
                      }
                    />
                    {formErrors.emailAddress && (
                      <p
                        id="emailAddress-error"
                        className="text-red-600 text-sm mt-1"
                      >
                        {formErrors.emailAddress}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      const inputVal = e.target.value;
                      if (
                        /^\d*$/.test(inputVal) &&
                        (inputVal === "" || parseInt(inputVal[0], 10) >= 6)
                      ) {
                        changeHandler(e);
                      }
                    }}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                      formErrors.mobileNumber
                        ? "border-red-300"
                        : "border-slate-200"
                    }`}
                    placeholder="Mobile Number"
                    maxLength={10}
                    inputMode="numeric"
                    type="tel"
                    aria-invalid={!!formErrors.mobileNumber}
                    aria-describedby={
                      formErrors.mobileNumber ? "mobileNumber-error" : undefined
                    }
                  />
                  {formErrors.mobileNumber && (
                    <p
                      id="mobileNumber-error"
                      className="text-red-600 text-sm mt-1"
                    >
                      {formErrors.mobileNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={changeHandler}
                    className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition ${
                      formErrors.message ? "border-red-300" : "border-slate-200"
                    }`}
                    rows={5}
                    placeholder="Message here"
                    aria-invalid={!!formErrors.message}
                    aria-describedby={
                      formErrors.message ? "message-error" : undefined
                    }
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-red-600 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    onClick={sendEmailHandler}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60 transition"
                  >
                    {loading ? "Sending..." : "Submit"}
                    <svg
                      width={16}
                      height={16}
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        fill="currentColor"
                        d="M23.612.225a1.045,1.045,0,0,0-1.138-.1L.827,11.646a1.547,1.547,0,0,0,.125,2.8l3.254,1.38a.719.719,0,0,0,.043.245l2.5,6.746A1.514,1.514,0,0,0,8.171,24h.089a1.512,1.512,0,0,0,1.3-.824l2.571-4.855,5.408,4.115a1.517,1.517,0,0,0,2.395-.853L23.743,1.36A1.05,1.05,0,0,0,23.612.225Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      </div>

      {/* MAP ADDED AT BOTTOM (FULL WIDTH INSIDE THE PAGE) */}
      <div className="w-full mt-4">
        <iframe
          title="Myitronline Global Services Pvt. Ltd. Office Location"
          src="https://www.google.com/maps?q=Myitronline%20Global%20Services%20Pvt.%20Ltd.%2C%20Office%20No.%20301%2C%20Plot%20No.%2051%2C%20HASANPUR%20I.P.%20Extension%2C%20Patparganj%2C%20Delhi%2C%20110092&z=17&output=embed"
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow border-0"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
