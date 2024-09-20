"use client";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import QuillResizeImage from "quill-resize-image";
import QuillBetterTable from 'quill-better-table'
import * as QuillTableUI from 'quill-table-ui'

import { useEffect, useRef, useState } from "react";

Quill.register("modules/resize", QuillResizeImage);
Quill.register({
	'modules/tableUI': QuillTableUI.default
  }, true)

export function CustomEditor({ value, setValue }) {



	const quillRef = useRef(null)
	

	




	const modules = {


	// 'better-table': {
    //     operationMenu: {
    //         items: {
    //             unmergeCells: {
    //                 text: 'Another unmerge cells name'
    //             }
    //         }
    //     }
    // },
    // keyboard: {
    //     bindings: QuillTableUI.keyboardBindings
    // },

		
		// tableUI: true,



		

		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],
			["link", "image", "video", "formula"],
			['tableUI'],
			

			[{ header: 1 }, { header: 2 }], // custom button values
			[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
			[{ script: "sub" }, { script: "super" }], // superscript/subscript
			[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
			[{ direction: "rtl" }], // text direction

			// custom dropdown
			[{ header: [1, 2, 3, 4, 5, 6, false] }],

			[{ color: [] }, { background: [] }], // dropdown with defaults from theme
			[{ font: [] }],
			[{ align: [] }],

			["clean"],
			// remove formatting button
		],

		resize: {
			locale: {
				center: "center",
			},
		},
	};



	// useEffect(() => {
	// 	console.log(quillRef.current)

	// 	// /this.quillRef.getEditor().getModule('better-table');

	// 	// const quill = quillRef.current.getEditor();
	// 	// const table = QuillBetterTable.createTable(3, 3); // Example: create a 3x3 table
	// 	// quill.insertEmbed(quill.getSelection().index, 'table', table);

		


	// }, [])





	// const addTable = () => {




	// }



	return (
		<>
		<ReactQuill ref={quillRef} className="w-full" theme="snow" value={value} onChange={setValue} modules={modules} />
		{/* <button onClick={addTable}>Add Table</button> */}
		</>
	);
}
