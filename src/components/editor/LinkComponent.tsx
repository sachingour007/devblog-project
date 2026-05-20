"use client";
import React, { ReactNode, useState } from "react";
import type { Editor } from "@tiptap/core";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

const LinkComponent = ({
	editor,
	children,
}: {
	editor: Editor;
	children: ReactNode;
}) => {
	const [linkUrl, setLinkUrl] = useState("");
	const [isLinkPopoverOpen, setIsLinkPopoverOpen] = useState(false);

	const handleSetLink = () => {
		if (linkUrl) {
			editor
				.chain()
				.focus()
				.extendMarkRange("link")
				.setLink({ href: linkUrl })
				.run();
		} else {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
		}
		setIsLinkPopoverOpen(false);
		setLinkUrl("");
	};

	return (
		<Popover open={isLinkPopoverOpen} onOpenChange={setIsLinkPopoverOpen}>
			<PopoverTrigger>{children}</PopoverTrigger>
			{/* // this is the main */}
			{/* trigger point */}
			<PopoverContent className="w-80 p-4">
				<div className="flex flex-col gap-4">
					<h3 className="font-medium">Insert Link</h3>
					<Input
						placeholder="https://example.com"
						type="url"
						value={linkUrl}
						onChange={(e) => setLinkUrl(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSetLink();
							}
						}}
					/>
					<div className="flex justify-between">
						<Button
							variant="outline"
							onClick={() => setIsLinkPopoverOpen(false)}
						>
							Cancel
						</Button>
						<Button onClick={handleSetLink}>Save</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default LinkComponent;
