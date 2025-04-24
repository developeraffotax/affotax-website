import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCE = ({value, setValue}) => {
  const handleEditorChange = (content, editor) => {
    //console.log('Content was updated:', content);
	setValue(content)
  };

  return (
    <Editor
      apiKey="vl6cvkywcal47cs5tvdbmc99wsm8wi07hm29ud61930howap" // optional for free features, but needed for cloud-based premium features
      value={value}
      init={{
        height: 300,
        menubar: false,
		plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',

		menubar: 'file edit view insert format tools table help',

		toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",

      }}
      onEditorChange={handleEditorChange}
	  
    />
  );
};

export default TinyMCE;
