import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const Editor = dynamic(
   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
   { ssr: false },
);

export default function TextEditor({ setEditorHTML }) {
   const [editorState, setEditorState] = useState(EditorState.createEmpty());

   const handleEditorStateChange = (editorState) => {
      setEditorState(editorState);
      setEditorHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
   };

   return (
      <Editor
         editorState={editorState}
         toolbarClassName='toolbarClassName'
         wrapperClassName='wrapperClassName'
         editorClassName='editorClassName'
         onEditorStateChange={handleEditorStateChange}
      />
   );
}