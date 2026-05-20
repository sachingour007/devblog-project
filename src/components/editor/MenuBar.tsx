import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import {
	BoldIcon,
	CodeIcon,
	HighlighterIcon,
	ItalicIcon,
	LinkIcon,
	ListIcon,
	ListOrderedIcon,
	Quote,
	RedoIcon,
	StrikethroughIcon,
	UnderlineIcon,
	UndoIcon,
	UnlinkIcon,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import LinkComponent from "./LinkComponent";

const MenuBar = ({ editor }: { editor: Editor }) => {
	const editorState = useEditorState({
		editor,
		selector: (ctx) => {
			return {
				isBold: ctx.editor.isActive("bold") ?? false,
				isItalic: ctx.editor.isActive("italic") ?? false,
				isStrike: ctx.editor.isActive("strike") ?? false,
				isUnderline: ctx.editor.isActive("underline") ?? false,
				isCode: ctx.editor.isActive("code") ?? false,
				isHighlight: ctx.editor.isActive("highlight") ?? false,
				isBulletList: ctx.editor.isActive("bulletList") ?? false,
				isOrderedList: ctx.editor.isActive("orderedList") ?? false,
				isBlockquote: ctx.editor.isActive("blockquote") ?? false,
				isLink: ctx.editor.isActive("link") ?? false,
			};
		},
	});
	if (!editor) {
		return null;
	}

	return (
		<div>
			<div>
				<Toggle
					aria-label="Toggle bold"
					size="sm"
					variant="outline"
					pressed={editorState.isBold}
					onPressedChange={() => editor.chain().focus().toggleBold().run()}
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<BoldIcon className="h-4 w-4" />
				</Toggle>
				<Toggle
					aria-label="Toggle bold"
					size="sm"
					variant="outline"
					pressed={editorState.isItalic}
					onPressedChange={() =>
						editor.chain().focus().toggleItalic().run()
					}
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<ItalicIcon className="h-4 w-4" />
				</Toggle>
				<Toggle
					aria-label="Toggle bold"
					size="sm"
					variant="outline"
					pressed={editorState.isStrike}
					onPressedChange={() =>
						editor.chain().focus().toggleStrike().run()
					}
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<UnderlineIcon className="h-4 w-4" />
				</Toggle>
				<Toggle
					aria-label="Toggle underline"
					size="sm"
					variant="outline"
					pressed={editorState.isUnderline}
					onPressedChange={() =>
						editor.chain().focus().toggleUnderline().run()
					}
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<UnderlineIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="sm"
					variant="outline"
					pressed={editorState.isHighlight}
					onPressedChange={() =>
						editor
							.chain()
							.focus()
							.toggleHighlight({ color: "#fdeb80" })
							.run()
					}
					aria-label="Toggle highlight"
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<HighlighterIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="sm"
					variant="outline"
					pressed={editorState.isCode}
					onPressedChange={() => editor.chain().focus().toggleCode().run()}
					aria-label="Toggle code"
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0"
				>
					<CodeIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="sm"
					variant="outline"
					pressed={editorState.isBulletList}
					onPressedChange={() =>
						editor.chain().focus().toggleBulletList().run()
					}
					aria-label="Toggle bullet list"
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0 list-disc"
				>
					<ListIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="sm"
					variant="outline"
					pressed={editorState.isOrderedList}
					onPressedChange={() =>
						editor.chain().focus().toggleOrderedList().run()
					}
					aria-label="Toggle ordered list"
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0 list-disc"
				>
					<ListOrderedIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="sm"
					variant="outline"
					pressed={editorState.isBlockquote}
					onPressedChange={() =>
						editor.chain().focus().toggleBlockquote().run()
					}
					aria-label="Toggle blockquote"
					className=" data-[state=on]:bg-bgPurpul data-[state=on]:text-white p-0 "
				>
					<Quote className="h-4 w-4" />
				</Toggle>

				{editorState.isLink ? (
					<Toggle
						pressed
						onPressedChange={() =>
							editor
								.chain()
								.focus()
								.extendMarkRange("link")
								.unsetLink()
								.run()
						}
					>
						<UnlinkIcon className="h-4 w-4" />
					</Toggle>
				) : (
					<LinkComponent editor={editor}>
						<Toggle size="sm" aria-label="Toggle link" variant="outline">
							<LinkIcon className="h-4 w-4" />
						</Toggle>
					</LinkComponent>
				)}
			</div>
		</div>
	);
};

export default MenuBar;
