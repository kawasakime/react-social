import * as React from "react";
import styles from "./editableInput.module.scss";

const pasteListener = (evt: ClipboardEvent) => {
  evt.preventDefault();
  const text = evt.clipboardData?.getData("text/plain");
  const selectedRange = window.getSelection()?.getRangeAt(0);
  if (!selectedRange || !text) return;

  selectedRange.deleteContents();
  selectedRange.insertNode(document.createTextNode(text));
  selectedRange.setStart(selectedRange.endContainer, selectedRange.endOffset);
};

interface IEditableInputProps {
  placeholder: string;
  content?: string;
  onChange?: (event: React.ChangeEvent<HTMLDivElement>) => void;
  className: string;
  sendPostHandler: (str: string) => void
}

const EditableInput: React.FC<IEditableInputProps> = ({
  placeholder,
  content = "",
  onChange,
  className,
  sendPostHandler
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      // dispatch(addPost(content));
      sendPostHandler(content)
    }
  }

  React.useEffect(() => {
    const contentNode = contentRef.current!;
    contentNode.addEventListener("paste", pasteListener);
    return () => contentNode.removeEventListener("paste", pasteListener);
  }, []);

  const style = styles.editable_input + ` ${className}`;

  return (
    <div
      ref={contentRef}
      onInput={onChange}
      onKeyDown={handleKeyDown}
      onPaste={(e) => console.log(e)}
      className={style}
      contentEditable="true"
      placeholder={placeholder}></div>
  );
};

export default EditableInput;
