import Quill from 'quill';
import './style.css'

const Table = Quill.import('modules/table');

class CustomTable extends Table {
  constructor(quill, options) {
    super(quill, options);
    this.quill = quill;

    // Add a button to insert a table
    const toolbar = this.quill.getModule('toolbar');
    toolbar.addHandler('table', this.insertTable.bind(this));
  }

  insertTable() {
    const rows = prompt('Enter number of rows:');
    const cols = prompt('Enter number of columns:');
    if (rows && cols) {
      const table = document.createElement('table');
      console.log(table)
      table.classList.add('ql-table');

      for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
          const cell = row.insertCell();
          const cellContent = document.createElement('div');
          cellContent.contentEditable = true;
          cellContent.classList.add('ql-editor');
          cell.appendChild(cellContent);
        }
      }

      const range = this.quill.getSelection(true);
      this.quill.insertEmbed(range.index, 'table', table.outerHTML);
      this.quill.setSelection(range.index + 1);
    }
  }
}

// Register the custom table module
Quill.register('modules/customTable', CustomTable);
