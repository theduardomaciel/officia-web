import Image from 'next/image';
import Link from 'next/link';

// Components
import Header from 'components/Header';
import HelpSearchBar from 'components/SearchHelp';

// Utils
import { ArticleMeta, getArticleBySlug, getSectionArticlesMeta } from 'lib/mdx';
import { convertDate } from 'lib/date';
import { ChevronRight } from 'lucide-react';

interface PageProps {
	params: {
		section: string;
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps) {
	const { meta } = await getArticleBySlug(params.section, params.slug);
	return { title: meta.title };
}

export default async function HelpSection({ params }: PageProps) {
	const { section, slug } = params;

	const sectionArticles = await getSectionArticlesMeta(section);

	const article = await getArticleBySlug(section, slug);

	const publishedAtString = `Publicado ${convertDate(new Date(article.meta.publishedAt))}`;
	const lastUpdatedAtString = article.meta.updatedAt
		? `Última atualização ${convertDate(new Date(article.meta.updatedAt))}`
		: null;

	return (
		<>
			<Header>
				<HelpSearchBar
					placeholder="Pesquisar por ajuda"
					className="border-none py-2 min-w-[25vw] hidden lg:flex"
				/>
			</Header>
			<main className="relative z-10 flex min-h-screen flex-col items-center justify-start">
				<header className="relative z-10 flex w-full flex-col items-center justify-start bg-gray-400 pt-header min-h-[50vh] pb-6 lg:pb-0">
					<div className="flex flex-1 flex-col w-full items-start justify-center gap-y-6 px-wrapper">
						<Image
							className="pointer-events-none absolute z-[6] object-cover"
							fill
							src={`/images/pattern.png`}
							alt="Pattern"
							priority
						/>
						<div className="z-10 flex flex-row items-center justify-start gap-x-2.5 text-white">
							<a
								className="text-sm font-semibold transition-colors hover:text-green hover:underline"
								href="/help"
							>
								Central de Ajuda
							</a>
							<ChevronRight width={12} height={12} color="var(--neutral)" />
							<Link
								className="text-sm font-semibold transition-colors hover:text-green hover:underline"
								href={`/help/${section}`}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</Link>
						</div>
						<h1 className="z-10 w-full text-left font-title text-4xl text-white lg:w-fit lg:text-5xl">
							{article.meta.title}
						</h1>
						<p className="z-10 text-base font-normal text-text-100">
							{lastUpdatedAtString ?? publishedAtString}
						</p>
					</div>
				</header>
				<section className="flex w-full flex-col items-start justify-center gap-y-16 px-wrapper py-section">
					<div className="relative flex w-full flex-row items-start justify-between gap-x-12 lg:gap-x-32">
						<article className="container prose max-w-none lg:prose-pre:max-w-[60vw] py-4 dark:prose-invert">
							{article.content}
						</article>
						<aside className="sticky right-0 top-0 hidden w-2/6 flex-col items-end justify-start gap-y-6 lg:flex pt-link -mt-link">
							<h3>Artigos nessa seção</h3>
							{sectionArticles
								.filter((articleMeta) => articleMeta.slug !== article.meta.slug)
								.map((articleMeta) => (
									<ArticleLink
										key={articleMeta.slug}
										meta={articleMeta}
										href={`/help/${section}/${articleMeta.slug}`}
									/>
								))}
						</aside>
					</div>
				</section>
			</main>
		</>
	);
}

const ArticleLink = ({ meta, href }: { meta: ArticleMeta; href: string }) => (
	<Link
		href={href}
		className="flex w-full flex-col rounded-[5px] bg-gray-400 p-3 transition-colors duration-300 ease-in-out hover:bg-gray-200"
	>
		<p className="text-left text-sm font-normal text-white">{meta.title}</p>
	</Link>
);
