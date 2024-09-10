"use client";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import QuillResizeImage from "quill-resize-image";

Quill.register("modules/resize", QuillResizeImage);

export function CustomEditor({ value, setValue }) {
	const modules = {
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
		<ReactQuill className="w-full" theme="snow" value={value} onChange={setValue} modules={modules} />
	);
}
