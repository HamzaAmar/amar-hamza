type Link = {
	site: string;
	title: "Figma" | "Github" | "Site";
};

type Image = {
	src: string;
	alt: string;
};

export type Project = {
	id: string;
	title: string;
	excerpt: string;
	image: Image;
	avatar: Image;
	publishedAt: string;
	lastModified: string;
	author: {
		name: string;
		picture: string;
	};
	technologies: string[];
	projectType: string;
	role: string;
	location: string;
	status: string;
	duration: string;
	slug: string;
	links: Link[];
	rank: number;
};
