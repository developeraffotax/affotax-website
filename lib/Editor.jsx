"use client";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import QuillResizeImage from "quill-resize-image";
import QuillBetterTable from 'quill-better-table'
import { useEffect, useRef } from "react";

Quill.register("modules/resize", QuillResizeImage);
// Quill.register({
// 	'modules/better-table': QuillBetterTable
//   }, true)

export function CustomEditor({ value, setValue }) {



	const quillRef = useRef()



	// useEffect(() => {
	// 	console.log(quillRef.current)

	// 	const quill = quillRef.current.getEditor();
	// 	const table = QuillBetterTable.createTable(3, 3); // Example: create a 3x3 table
	// 	quill.insertEmbed(quill.getSelection().index, 'table', table);


	// }, [])


	const modules = {


	// 	table: false,  // disable table module
    // 'better-table': {
    //   operationMenu: {
    //     items: {
    //       unmergeCells: {
    //         text: 'Another unmerge cells name'
    //       }
    //     },
    //     color: {
    //       colors: ['#fff', 'red', 'rgb(0, 0, 0)'],  // colors in operationMenu
    //       text: 'Background Colors'  // subtitle
    //     } 
    //   }
    // },
    // keyboard: {
    //   bindings: QuillBetterTable.keyboardBindings
    // },


		

		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],
			["link", "image", "video", "formula"],

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

	return (
		<ReactQuill ref={quillRef} className="w-full" theme="snow" value={value} onChange={setValue} modules={modules} />
	);
}
