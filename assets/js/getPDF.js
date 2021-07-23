import { fs } from 'fs';
import { mdToPdf } from 'md-to-pdf';

// (async getPDF() => {
// 	const pdf = await mdToPdf({ path: './apuntes.md' }).catch(console.error);

// 	if (pdf) {
// 		fs.writeFileSync(pdf.filename, pdf.content);
// 	}
// })();

async function getPDF() {
    const pdf = await mdToPdf({ path: './apuntes.md' }).catch(console.error);

	if (pdf) {
		fs.writeFileSync(pdf.filename, pdf.content);
	}
}
  