import React from 'react';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfResume from '../materials/resume.pdf';


export default function Test() {

	pdfjs.GlobalWorkerOptions.workerSrc =
		`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	var documentSize = 1;

	document.addEventListener("contextmenu", (event) => {
		event.preventDefault();
	});

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}
	function changePage(offset) {
		setPageNumber(prevPageNumber => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	function getResolution() {
		const windowHeight = (window.innerHeight * window.devicePixelRatio);

		if (windowHeight <= 1080) {
			documentSize = 0.8;
		} else if (windowHeight < 960){
			documentSize = 0.7;
		} else {
			documentSize = 1;
		}
	}

	getResolution();

	return (
		<>
			<div>
				<Document
					file={PdfResume}
					onLoadSuccess={onDocumentLoadSuccess}>
					<Page pageNumber={pageNumber} scale={documentSize} />
				</Document>
				<div>
					<div>
						Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
					</div>
					<div>
						<button
							type="button"
							disabled={pageNumber <= 1}
							onClick={previousPage}
							className="Pre">
							{"<"}
						</button>
						<button
							type="button"
							disabled={pageNumber >= numPages}
							onClick={nextPage}>
							{">"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
