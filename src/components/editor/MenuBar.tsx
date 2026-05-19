import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";

const MenuBar = ({ editor }: { editor: Editor}) => {
	const editorState = useEditorState({
		editor,
		selector: (ctx) => {
			return { isBold: ctx.editor.isActive("bold") ?? false };
		},
	});
	if (!editor) {
		return null;
	}

	return (
		<div>
			<div>
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={editorState.isBold ? "is-active" : ""}
				>
					Bold
				</button>
			</div>
		</div>
	);
};

export default MenuBar;
