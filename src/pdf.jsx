import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPDFExample = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    if (!divRef.current) return;

    setLoading(true); // Start loading

    try {
      // Capture the div as a canvas
      const canvas = await html2canvas(divRef.current);
      const imgData = canvas.toDataURL('image/png');

      // Initialize jsPDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add image to PDF with page breaks if necessary
      while (heightLeft >= 0) {
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight; // Move down for next page
        if (heightLeft >= 0) {
          pdf.addPage(); // Add a new page if there's more content
        }
      }

      // Save the PDF
      pdf.save('download.pdf');
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <button onClick={downloadPDF} className="bg-blue-500 text-white p-2 rounded">
        {loading ? "Generating PDF..." : "Download as PDF"}
      </button>

      {/* The div to be downloaded */}
      <div
        ref={divRef}
        className="p-4 border border-gray-300 mt-4"
        style={{ width: '100%', background: '#fff' }}
      >
        <h1>Content to Download</h1>
        <p>This is the content of the div that will be captured and downloaded as a PDF.</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
    </div>
  );
};

export default DownloadPDFExample;
