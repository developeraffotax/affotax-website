"use client";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import QuillResizeImage from "quill-resize-image";


Quill.register("modules/resize", QuillResizeImage);

const Block = Quill.import('blots/block');

class TableBlot extends Block {
  static create(value) {
    const node = super.create();
    node.innerHTML = value;
    return node;
  }

  static formats(node) {
    return node.innerHTML;
  }
}

TableBlot.blotName = 'table';
TableBlot.tagName = 'table';

Quill.register(TableBlot);


// import Quill from 'quill';
import './style.css'
import { useEffect, useRef } from "react";

// const Table = Quill.import('modules/table');

class CustomTable   {
  constructor(quill, options) {
    // super(quill, options);
    this.quill = quill;

    // Add a button to insert a table
    const toolbar = this.quill.getModule('toolbar');
	//console.log(toolbar)
    toolbar.addHandler('table', this.insertTable.bind(this));
  }

  insertTable() {
    const rows = prompt('Enter number of rows:');
    const cols = prompt('Enter number of columns:');
    if (rows && cols) {
      const table = document.createElement('table');
	  
      //table.classList.add('ql-table');

	  table.style.border = '1px solid black';


		console.log(table)
		
    //   for (let i = 0; i < parseInt(rows); i++) {
    //     const row = table.insertRow();
    //     for (let j = 0; j < parseInt(cols); j++) {
    //       const cell = row.insertCell();
    //       const cellContent = document.createElement('div');
    //       cellContent.contentEditable = true;
    //       //cellContent.classList.add('ql-editor-custom');
    //       cell.appendChild(cellContent);
    //     }
    //   }


	
	  
      const range = this.quill.getSelection(true);
      this.quill.insertEmbed(range.index, 'table', table.outerHTML);
	  
	  
	  console.dir(table.outerHTML)

      this.quill.setSelection(range.index + 1);
    }
  }
}

// Register the custom table module
Quill.register('modules/customTable', CustomTable);
















export function CustomEditor2({ value, setValue }) {




	

		const quillRef = useRef()




	const modules = {


	
		
		 



		

		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],
			["link", "image", "video", "formula"],
			['customTable'],
			

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







	const insetTableHandler = () => {

		const table = new CustomTable(quillRef.current.editor)

		table.insertTable()

	}
	











	useEffect(() => {


		//const toolbar = quillRef.current.getModule('toolbar');

		console.log(quillRef.current.editor.getModule('toolbar'))


	}, [])

	return (
		<>
		<ReactQuill ref={quillRef} className="w-full" theme="snow" value={value} onChange={setValue} modules={modules} />
		<button onClick={insetTableHandler}>Insert Table</button>
		
		</>
	);
}
