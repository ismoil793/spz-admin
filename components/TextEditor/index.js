import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { useEffect, useRef, useState } from 'react';

const Editor = dynamic(
   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
   { ssr: false },
);

// const EditorState = dynamic(
//    () => import('draft-js').then((mod) => mod.EditorState),
//    { ssr: false },
// );

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

{/*<textarea*/}
{/*   disabled*/}
{/*   value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}*/}
{/*/>*/}