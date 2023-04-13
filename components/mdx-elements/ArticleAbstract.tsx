interface Section {
	title: string;
	href: string;
	subSections: Array<Section & { index: number }>;
}

interface ArticleAbstractProps {
	sections: Array<Section>;
}

const SubSection = ({ title, href, subSections, index }: Section & { index: number }) => (
	<li
		className="lex-col items-start justify-start list-item"
		style={{
			marginLeft: `${index * 10}px`
		}}
	>
		<a href={`#${href}`} className="font-normal text-base hover:text-text-200 cursor-pointer">
			{title}
		</a>
		<ul className="flex flex-col items-start justify-start my-0 list-inside list-disc">
			{subSections.length > 0 &&
				subSections.map((iSubSection, iIndex) => {
					const { index: iSubSectionIndex, ...rest } = iSubSection;
					return <SubSection key={iIndex} index={index + iIndex} {...rest} />;
				})}
		</ul>
	</li>
);

export function ArticleAbstract({ sections }: ArticleAbstractProps) {
	return (
		<div className="flex flex-col items-start justify-start gap-4 pl-6 lg:pr-24 lg:w-fit py-6 bg-gray-400 rounded-default">
			<h6 className="font-bold text-lg text-white">O que esse artigo aborda?</h6>
			<ul className="flex flex-col items-start justify-start my-0 list-inside list-disc">
				{sections.map((section, index) => (
					<li
						className="flex-col items-start justify-start font-medium text-lg p-0 my-1 list-item text-white marker:text-white"
						key={index}
					>
						<a
							href={`#${section.href}`}
							className="font-normal text-base hover:text-text-200 no-underline cursor-pointer"
						>
							{section.title}
						</a>
						{section.subSections &&
							section.subSections.length > 0 &&
							section.subSections.map((subSection, index) => (
								<SubSection key={index} {...subSection} index={index} />
							))}
					</li>
				))}
			</ul>
		</div>
	);
}
