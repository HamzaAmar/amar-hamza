import React from "react";

import type { HeroHeadingProps } from "./hero-heading.type";

import { Text } from "../typography";

export const HeroHeading = ({
	description,
	heading,
	subHeading,
	section,
}: HeroHeadingProps) => {
	return (
		<div className="Sf-1">
			<Text
				type="heading"
				className="text-scroll"
				size="4"
				weight="4"
				id={`${section}-id-section`}
				as="h2"
			>
				<Text
					className="text-scroll"
					transform="uppercase"
					color="p"
					low
					size="4"
					weight="5"
				>
					{heading}
				</Text>
				<Text size="4" className="text-scroll">
					{subHeading}
				</Text>
			</Text>

			{description && (
				<Text className="text-scroll" size="7" color="b" weight="3" low>
					{description}
				</Text>
			)}
		</div>
	);
};
