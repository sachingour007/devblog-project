"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./MenuBar";

export default function TiptapEditor() {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Image,
			Highlight.configure({ multicolor: true }),
		],
		content: `<p>Tell your story...</p>`,
		editorProps: {
			attributes: {
				class: "prose dark:prose-invert prose-sm sm:prose-base focus:outline-none max-w-none",
			},
		},
		immediatelyRender: false,
	});

	return (
		<div className="wrapper ">
			{editor && <MenuBar editor={editor} />}
			<EditorContent editor={editor} className="tiptapBox" />
		</div>
	);
}
