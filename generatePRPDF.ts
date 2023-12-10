import path from "path";
import { mdToPdf } from "md-to-pdf"
import fs from "fs";

(async () => {
	const pdf = await mdToPdf({
		path: 'SELF_PROMOTION.md',
	}, {
		stylesheet: ["style.css"],
		dest: "SELF_PROMOTION.pdf",
		pdf_options: {
			format: "A4",
			landscape: true,
			margin: {
				top: "30mm",
				left: "20mm",
				right: "20mm",
				bottom: "30mm",
			},
		},
	}).catch(console.error);

	if (pdf && pdf.filename) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
})();
