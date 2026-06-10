"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";

import MenuBar from "./MenuBar";

interface Props {
	value: any;
	onChange: (content: any) => void;
}

export default function TiptapEditor({ value, onChange }: Props) {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Image.configure({
				inline: false,
				allowBase64: false,
			}),
			Highlight.configure({ multicolor: true }),
		],
		content: value,
		editorProps: {
			attributes: {
				class: "prose dark:prose-invert prose-sm sm:prose-base focus:outline-none max-w-none",
			},
		},
		onUpdate: ({ editor }) => {
			const json = JSON.stringify(editor.getJSON()); //JSON Formate
			onChange(json);
		},
		immediatelyRender: false,
	});

	return (
		<div className="">
			{editor && <MenuBar editor={editor} />}
			<EditorContent editor={editor} className="tiptapBox" />
		</div>
	);
}
