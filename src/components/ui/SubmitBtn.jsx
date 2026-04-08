"use client";

import "./submitBtn.css";

export default function SubmitBtn({ submitTxt }) {
  return (
    <>
      <button type="submit" className="submit-btn">
        {submitTxt}
      </button>
    </>
  );
}
