const { jsPDF } = require("jspdf");
const fs = require("fs");
console.log("Running Running Running");
const doc = new jsPDF();

function drawImage(base64Image, x, y, w, h) {
  const path =
    "data:image/jpeg;base64,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";
  doc.addImage(path, "jpeg", x, y, w, h);
}

function drawLine(color, lineWidth, x1, y1, x2, y2) {
  doc.setLineWidth(lineWidth);
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.line(x1, y1, x2, y2);
}

function drawRectangle(
  fillColor,
  borderColor,
  lbx,
  lby,
  rbx,
  rby,
  rtx,
  rty,
  ltx,
  lty,
  thickness
) {
  doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
  doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
  doc.setLineWidth(thickness);
  doc.rect(lbx, lby, rbx - lbx, rby - lby, "F");
}

function drawCircle(fillColor, borderColor, lineWidth, x, y, r) {
  doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
  doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
  doc.setLineWidth(lineWidth);
  doc.circle(x, y, r, "FD");
}

function drawText(
  fontstyle,
  fontfamily,
  color,
  fontSize,
  alignment,
  text,
  x,
  y,
  rotation
) {
  doc.setFont(fontfamily, fontstyle);
  doc.setFontSize(fontSize);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text(text, x, y, null, null, alignment, rotation);
}

function drawColumnText(
  text,
  fontname,
  size,
  style,
  color,
  llx,
  lly,
  urx,
  ury,
  lineSpace,
  alignment
) {
  doc.setFont(fontname, style);
  doc.setFontSize(size);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text(text.replace("<br/>", "\n"), llx, lly, {
    maxWidth: urx - llx,
    lineHeightFactor: lineSpace,
    align: alignment,
  });
}

// Example usage:
// drawImage("Bim.png", 20, 20, 50, 50);
// drawLine([255, 0, 0], 1, 20, 10, 90, 10); // color, lineWidth, x1, y1, x2, y2
// drawRectangle([255, 255, 0], [0, 0, 255], 10, 70, 60, 120, 60, 120, 10, 70, 1);
// drawCircle([255, 0, 255], [0, 255, 0], 1, 40, 180, 20);
// drawText(
//   "normal",
//   "helvetica",
//   [0, 0, 0],
//   12,
//   "center",
//   "Hello World",
//   105,
//   10,
//   0
// );
// drawColumnText(
//   "This is a long text<br/>split into multiple lines",
//   "helvetica",
//   12,
//   "normal",
//   [0, 0, 0],
//   70,
//   150,
//   40,
//   180,
//   1.2,
//   "left"
// );
// Save the PDF file
drawLine([255, 0, 0], 1, 5, 10, 205, 10);
drawLine([255, 0, 0], 1, 5, 10, 5, 295);
 drawLine([255, 0, 0], 1, 90, 80, 85, 150);
// drawLine([255, 0, 0], 1, 10, 5, 10, 295);
// drawLine([255, 0, 0], 1, 200, 5, 200, 295);

doc.save("output1.pdf");
