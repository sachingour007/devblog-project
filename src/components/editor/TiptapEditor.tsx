"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import MenuBar from "./MenuBar";

export default function TiptapEditor() {
	const editor = useEditor({
		extensions: [StarterKit, Image],
		content: `<h2>Tell your story...</h2>`,
		immediatelyRender: false,
	});

	return (
		<div className="border rounded-lg p-4 min-h-75">
			{editor && <MenuBar editor={editor} />}
			<EditorContent editor={editor} />
		</div>
	);
}
