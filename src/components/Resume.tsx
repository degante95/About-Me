import React from "react";
import { Modal } from "./Modal";

/**
 * Resume section component
 * This section is a modal that has my resume and allows download.
 */

export function ResumeModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>View Resume</button>
      <Modal open={open} onClose={() => setOpen(false)} ariaLabel="Resume">
        <h2>Resume</h2>
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        />
        <a
          href="/resume.pdf"
          download
          style={{
            marginTop: 16,
            display: "inline-block",
            padding: "0.5em 1.5em",
            background: "#2563eb",
            color: "white",
            borderRadius: "6px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Download as PDF
        </a>
      </Modal>
    </div>
  );
}
