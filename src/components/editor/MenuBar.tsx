import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import {
	BoldIcon,
	CodeIcon,
	Heading1,
	Heading2,
	Heading3,
	HighlighterIcon,
	ItalicIcon,
	LinkIcon,
	ListIcon,
	ListOrderedIcon,
	Pilcrow,
	Quote,
	RedoIcon,
	StrikethroughIcon,
	UnderlineIcon,
	UndoIcon,
	UnlinkIcon,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import LinkComponent from "./LinkComponent";
import { cn } from "@/lib/utils";

const Separator = () => <div className="w-px h-5 bg-border mx-1 shrink-0" />;

const ToolbarToggle = ({
	pressed,
	onPressedChange,
	label,
	children,
}: {
	pressed: boolean;
	onPressedChange: () => void;
	label: string;
	children: React.ReactNode;
}) => (
	<Toggle
		aria-label={label}
		size="lg"
		variant="outline"
		pressed={pressed}
		onPressedChange={onPressedChange}
		className={cn(
			"h-8 w-8 p-0 border rounded-md transition-all duration-150",
			"text-muted-foreground hover:text-foreground hover:bg-accent",
			"data-[state=on]:bg-violet-100 data-[state=on]:text-violet-700",
			"dark:data-[state=on]:bg-violet-900/40 dark:data-[state=on]:text-violet-300",
		)}
	>
		{children}
	</Toggle>
);

const MenuBar = ({ editor }: { editor: Editor }) => {
	const editorState = useEditorState({
		editor,
		selector: (ctx) => ({
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
			isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
			isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
			isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
			isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
			isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
			isParagraph: ctx.editor.isActive("paragraph") ?? false,
		}),
	});

	if (!editor) return null;

	return (
		<div className="bg-[#F0F0F0] sticky top-0 z-10">
			<div className="flex flex-wrap items-center gap-2 px-2 py-1.5 border rounded-md">
				<ToolbarToggle
					pressed={editorState.isHeading2}
					onPressedChange={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					label="Heading2"
				>
					<Heading1 className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isHeading3}
					onPressedChange={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					label="Heading3"
				>
					<Heading2 className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isHeading4}
					onPressedChange={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					label="Heading4"
				>
					<Heading3 className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isParagraph}
					onPressedChange={() =>
						editor.chain().focus().setParagraph().run()
					}
					label="paragraph"
				>
					<Pilcrow className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isBold}
					onPressedChange={() => editor.chain().focus().toggleBold().run()}
					label="Bold"
				>
					<BoldIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isItalic}
					onPressedChange={() =>
						editor.chain().focus().toggleItalic().run()
					}
					label="Italic"
				>
					<ItalicIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isUnderline}
					onPressedChange={() =>
						editor.chain().focus().toggleUnderline().run()
					}
					label="Underline"
				>
					<UnderlineIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isStrike}
					onPressedChange={() =>
						editor.chain().focus().toggleStrike().run()
					}
					label="Strikethrough"
				>
					<StrikethroughIcon className="h-4 w-4" />
				</ToolbarToggle>

				<Separator />

				{/* Highlight & Code */}
				<ToolbarToggle
					pressed={editorState.isHighlight}
					onPressedChange={() =>
						editor
							.chain()
							.focus()
							.toggleHighlight({ color: "#fdeb80" })
							.run()
					}
					label="Highlight"
				>
					<HighlighterIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isCode}
					onPressedChange={() => editor.chain().focus().toggleCode().run()}
					label="Code"
				>
					<CodeIcon className="h-4 w-4" />
				</ToolbarToggle>

				<Separator />

				{/* Lists & Quote */}
				<ToolbarToggle
					pressed={editorState.isBulletList}
					onPressedChange={() =>
						editor.chain().focus().toggleBulletList().run()
					}
					label="Bullet list"
				>
					<ListIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isOrderedList}
					onPressedChange={() =>
						editor.chain().focus().toggleOrderedList().run()
					}
					label="Ordered list"
				>
					<ListOrderedIcon className="h-4 w-4" />
				</ToolbarToggle>

				<ToolbarToggle
					pressed={editorState.isBlockquote}
					onPressedChange={() =>
						editor.chain().focus().toggleBlockquote().run()
					}
					label="Blockquote"
				>
					<Quote className="h-4 w-4" />
				</ToolbarToggle>

				<Separator />

				{/* Link */}
				{editorState.isLink ? (
					<ToolbarToggle
						pressed
						onPressedChange={() =>
							editor
								.chain()
								.focus()
								.extendMarkRange("link")
								.unsetLink()
								.run()
						}
						label="Remove link"
					>
						<UnlinkIcon className="h-4 w-4" />
					</ToolbarToggle>
				) : (
					<LinkComponent editor={editor}>
						<Toggle
							size="lg"
							aria-label="Insert link"
							variant="outline"
							className="h-8 w-8 p-0 border rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
						>
							<LinkIcon className="h-4 w-4" />
						</Toggle>
					</LinkComponent>
				)}

				<Separator />

				{/* Undo / Redo */}
				<Toggle
					size="lg"
					aria-label="Undo"
					variant="outline"
					onPressedChange={() => editor.chain().focus().undo().run()}
					disabled={!editor.can().undo()}
					className="h-8 w-8 p-0 border rounded-md text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30"
				>
					<UndoIcon className="h-4 w-4" />
				</Toggle>

				<Toggle
					size="lg"
					aria-label="Redo"
					variant="outline"
					onPressedChange={() => editor.chain().focus().redo().run()}
					disabled={!editor.can().redo()}
					className="h-8 w-8 p-0 border rounded-md text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30"
				>
					<RedoIcon className="h-4 w-4" />
				</Toggle>
			</div>
		</div>
	);
};

export default MenuBar;
