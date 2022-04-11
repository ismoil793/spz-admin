import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  // EditorState,
  convertToRaw,
  // ContentState,
  // convertFromRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import PropTypes from "prop-types";
// import htmlToDraft from "html-to-draftjs";
// import { Editor } from "react-draft-wysiwyg";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function TextEditor({ setEditorHTML, defaultState = "" }) {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contentState, setContentState] = useState(null);
  const [isDefaultApplied, setDefaultApplied] = useState(false);

  const handleEditorStateChange = (val) => {
    const html = draftToHtml(convertToRaw(val.getCurrentContent()));
    setEditorHTML((prev) => [prev[0], html]);
  };

  useEffect(() => {
    if (defaultState.length && !isDefaultApplied) {
      const contentObject = JSON.parse(defaultState)[0];
      setContentState(contentObject);
      setDefaultApplied(true);
    }
  }, []);

  const onContentStateChange = (val) => {
    setEditorHTML((prev) => [val, prev[1]]);
  };

  if (window && typeof window === "object") {
    return (
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        contentState={contentState}
        onEditorStateChange={handleEditorStateChange}
        onContentStateChange={onContentStateChange}
      />
    );
  }
  return <div>Loading ...</div>;
}

TextEditor.propTypes = {
  setEditorHTML: PropTypes.func.isRequired,
  defaultState: PropTypes.string,
};
